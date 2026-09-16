import { firebase, FirebaseApp } from '@nativescript/firebase-core';
import { AIOptions, Candidate, Content, GenerateContentResponse, ModelParams, Part, PromptInput, SafetyRating } from '.';
import { BackendType, HarmBlockThreshold, HarmCategory } from './common';

export * from './common';

let defaultAI: AI;

const fb = firebase();
Object.defineProperty(fb, 'ai', {
	value: (options?: AIOptions) => {
		if (!options?.app && !options?.backend && !options?.location) {
			if (!defaultAI) {
				defaultAI = new AI();
			}
			return defaultAI;
		}
		return new AI(options);
	},
	writable: false,
});

export function toContent(prompt: PromptInput): Content[] {
	if (typeof prompt === 'string') {
		return [{ role: 'user', parts: [{ text: prompt }] }];
	}
	if (!Array.isArray(prompt) || prompt.length === 0) {
		return [];
	}
	if ('parts' in prompt[0]) {
		return prompt as Content[];
	}
	return [{ role: 'user', parts: prompt as any }];
}

function toNativeContent(content: Content): com.google.firebase.ai.type.Content {
	const builder = new com.google.firebase.ai.type.Content.Builder();
	builder.setRole(content.role ?? 'user');
	(content.parts ?? []).forEach((part: Part) => {
		if ('text' in part) {
			builder.addText(part.text);
		} else if ('inlineData' in part) {
			builder.addInlineData(android.util.Base64.decode(part.inlineData.data, android.util.Base64.DEFAULT), part.inlineData.mimeType);
		} else if ('fileData' in part) {
			builder.addFileData(part.fileData.fileUri, part.fileData.mimeType);
		}
	});
	return builder.build();
}

/**
 * The Java overloads take (Content first, Content... rest), so the tail has to be handed over
 * as a native array rather than spread.
 */
function toVarargs(prompt: PromptInput): [com.google.firebase.ai.type.Content, androidNative.Array<com.google.firebase.ai.type.Content>] {
	const items = toContent(prompt).map(toNativeContent);
	if (items.length === 0) {
		throw new Error('A prompt is required.');
	}
	const rest = Array.create(com.google.firebase.ai.type.Content, items.length - 1);
	for (let i = 1; i < items.length; i++) {
		rest[i - 1] = items[i];
	}
	return [items[0], rest];
}

function partsToText(content: com.google.firebase.ai.type.Content): string {
	const parts = content?.getParts?.();
	const count = parts?.size?.() ?? 0;
	let text = '';
	for (let i = 0; i < count; i++) {
		const part = parts.get(i);
		if (part instanceof com.google.firebase.ai.type.TextPart) {
			text += part.getText();
		}
	}
	return text;
}

function fromNativeResponse(response: com.google.firebase.ai.type.GenerateContentResponse): GenerateContentResponse {
	const result: GenerateContentResponse = { candidates: [] };

	const text = response.getText();
	if (text) {
		result.text = text;
	}
	result.modelVersion = response.getModelVersion();

	const candidates = response.getCandidates();
	const size = candidates?.size?.() ?? 0;
	for (let i = 0; i < size; i++) {
		const candidate = candidates.get(i);
		const ratings: SafetyRating[] = [];
		const nativeRatings = candidate.getSafetyRatings();
		const ratingCount = nativeRatings?.size?.() ?? 0;
		for (let j = 0; j < ratingCount; j++) {
			const rating = nativeRatings.get(j);
			ratings.push({
				category: rating.getCategory?.()?.toString?.(),
				probability: rating.getProbability?.()?.toString?.(),
				blocked: rating.getBlocked?.()?.booleanValue?.() ?? false,
			});
		}

		const entry: Candidate = {
			text: partsToText(candidate.getContent()),
			safetyRatings: ratings,
		};
		const finishReason = candidate.getFinishReason?.();
		if (finishReason) {
			entry.finishReason = finishReason.toString();
		}
		result.candidates.push(entry);
	}

	const usage = response.getUsageMetadata();
	if (usage) {
		result.usageMetadata = {
			promptTokenCount: usage.getPromptTokenCount(),
			candidatesTokenCount: usage.getCandidatesTokenCount(),
			totalTokenCount: usage.getTotalTokenCount(),
		};
	}

	return result;
}

function awaitFuture<T>(future: com.google.common.util.concurrent.ListenableFuture<T>): Promise<T> {
	return new Promise((resolve, reject) => {
		(<any>com).google.common.util.concurrent.Futures.addCallback(
			future,
			new (<any>com).google.common.util.concurrent.FutureCallback({
				onSuccess(result: T) {
					resolve(result);
				},
				onFailure(error: java.lang.Throwable) {
					reject(new Error(error.getMessage()));
				},
			}),
			(<any>com).google.common.util.concurrent.MoreExecutors.directExecutor()
		);
	});
}

function consumeStream(publisher: any, onChunk: (chunk: GenerateContentResponse) => void): Promise<void> {
	return new Promise((resolve, reject) => {
		publisher.subscribe(
			new (<any>org).reactivestreams.Subscriber({
				onSubscribe(subscription) {
					subscription.request(java.lang.Long.MAX_VALUE);
				},
				onNext(response) {
					onChunk(fromNativeResponse(response));
				},
				onError(error) {
					reject(new Error(error.getMessage()));
				},
				onComplete() {
					resolve();
				},
			})
		);
	});
}

export class Chat {
	_native: com.google.firebase.ai.java.ChatFutures;

	static fromNative(chat: com.google.firebase.ai.java.ChatFutures) {
		if (chat) {
			const ret = new Chat();
			ret._native = chat;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get ios() {
		return undefined;
	}

	get history(): Content[] {
		const history = this.native.getChat().getHistory();
		const size = history?.size?.() ?? 0;
		const result: Content[] = [];
		for (let i = 0; i < size; i++) {
			const item = history.get(i);
			result.push({ role: item.getRole() as any, parts: [{ text: partsToText(item) }] });
		}
		return result;
	}

	async sendMessage(prompt: PromptInput): Promise<GenerateContentResponse> {
		const [message] = toContent(prompt);
		const response = await awaitFuture(this.native.sendMessage(toNativeContent(message)));
		return fromNativeResponse(response);
	}

	sendMessageStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void> {
		const [message] = toContent(prompt);
		return consumeStream(this.native.sendMessageStream(toNativeContent(message)), onChunk);
	}
}

export class GenerativeModel {
	_native: com.google.firebase.ai.java.GenerativeModelFutures;

	static fromNative(model: com.google.firebase.ai.java.GenerativeModelFutures) {
		if (model) {
			const ret = new GenerativeModel();
			ret._native = model;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this.native;
	}

	get ios() {
		return undefined;
	}

	async generateContent(prompt: PromptInput): Promise<GenerateContentResponse> {
		const [first, rest] = toVarargs(prompt);
		const response = await awaitFuture(this.native.generateContent(first, rest));
		return fromNativeResponse(response);
	}

	generateContentStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void> {
		const [first, rest] = toVarargs(prompt);
		return consumeStream(this.native.generateContentStream(first, rest), onChunk);
	}

	async countTokens(prompt: PromptInput): Promise<number> {
		const [first, rest] = toVarargs(prompt);
		const response = await awaitFuture(this.native.countTokens(first, rest));
		return response.getTotalTokens();
	}

	startChat(history: Content[] = []): Chat {
		const list = new java.util.ArrayList<com.google.firebase.ai.type.Content>();
		history.forEach((item) => list.add(toNativeContent(item)));
		return Chat.fromNative(this.native.startChat(list));
	}
}

export class AI {
	_app: FirebaseApp;
	_backend: BackendType;
	_location: string;

	constructor(options?: AIOptions) {
		this._app = options?.app;
		this._backend = options?.backend ?? BackendType.GoogleAI;
		this._location = options?.location;
	}

	get app(): FirebaseApp {
		return this._app ?? firebase().app();
	}

	_nativeBackend() {
		const backend = com.google.firebase.ai.type.GenerativeBackend;
		if (this._backend === BackendType.AgentPlatform) {
			return backend.agentPlatform(this._location || 'global');
		}
		if (this._backend === BackendType.VertexAI) {
			// Vertex AI was renamed to the Agent Platform; preserve its former default location.
			return backend.agentPlatform(this._location || 'us-central1');
		}
		return backend.googleAI();
	}

	generativeModel(params: ModelParams): GenerativeModel {
		const instance = com.google.firebase.ai.FirebaseAI.getInstance(this.app.native, this._nativeBackend());

		let config: com.google.firebase.ai.type.GenerationConfig = null;
		if (params.generationConfig) {
			const builder = new com.google.firebase.ai.type.GenerationConfig.Builder();
			const source = params.generationConfig;
			if (typeof source.temperature === 'number') builder.setTemperature(new java.lang.Float(source.temperature));
			if (typeof source.topP === 'number') builder.setTopP(new java.lang.Float(source.topP));
			if (typeof source.topK === 'number') builder.setTopK(new java.lang.Integer(source.topK));
			if (typeof source.candidateCount === 'number') builder.setCandidateCount(new java.lang.Integer(source.candidateCount));
			if (typeof source.maxOutputTokens === 'number') builder.setMaxOutputTokens(new java.lang.Integer(source.maxOutputTokens));
			if (typeof source.presencePenalty === 'number') builder.setPresencePenalty(new java.lang.Float(source.presencePenalty));
			if (typeof source.frequencyPenalty === 'number') builder.setFrequencyPenalty(new java.lang.Float(source.frequencyPenalty));
			if (Array.isArray(source.stopSequences)) {
				const list = new java.util.ArrayList<string>();
				source.stopSequences.forEach((item) => list.add(item));
				builder.setStopSequences(list);
			}
			if (source.responseMimeType) builder.setResponseMimeType(source.responseMimeType);
			config = builder.build();
		}

		let safety: java.util.List<com.google.firebase.ai.type.SafetySetting> = null;
		if (Array.isArray(params.safetySettings) && params.safetySettings.length > 0) {
			const list = new java.util.ArrayList<com.google.firebase.ai.type.SafetySetting>();
			params.safetySettings.forEach((setting) => {
				list.add(new com.google.firebase.ai.type.SafetySetting(toHarmCategory(setting.category), toHarmBlockThreshold(setting.threshold), null));
			});
			safety = list;
		}

		const systemInstruction = params.systemInstruction ? new com.google.firebase.ai.type.Content.Builder().setRole('system').addText(params.systemInstruction).build() : null;

		return GenerativeModel.fromNative(com.google.firebase.ai.java.GenerativeModelFutures.from(instance.generativeModel(params.model, config, safety, null, null, systemInstruction)));
	}
}

function toHarmCategory(category: HarmCategory) {
	const type = com.google.firebase.ai.type.HarmCategory;
	switch (category) {
		case HarmCategory.Harassment:
			return type.HARASSMENT;
		case HarmCategory.HateSpeech:
			return type.HATE_SPEECH;
		case HarmCategory.SexuallyExplicit:
			return type.SEXUALLY_EXPLICIT;
		case HarmCategory.CivicIntegrity:
			return type.CIVIC_INTEGRITY;
		default:
			return type.DANGEROUS_CONTENT;
	}
}

function toHarmBlockThreshold(threshold: HarmBlockThreshold) {
	const type = com.google.firebase.ai.type.HarmBlockThreshold;
	switch (threshold) {
		case HarmBlockThreshold.LowAndAbove:
			return type.LOW_AND_ABOVE;
		case HarmBlockThreshold.MediumAndAbove:
			return type.MEDIUM_AND_ABOVE;
		case HarmBlockThreshold.OnlyHigh:
			return type.ONLY_HIGH;
		default:
			return type.NONE;
	}
}
