import { deserialize, firebase, FirebaseApp } from '@nativescript/firebase-core';
import { AIOptions, Content, GenerateContentResponse, ModelParams, PromptInput } from '.';
import { BackendType } from './common';

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

function deserializeResponse(value: any): GenerateContentResponse {
	return deserialize(value);
}

export class Chat {
	_native: NSCFirebaseAIChat;

	static fromNative(chat: NSCFirebaseAIChat) {
		if (chat instanceof NSCFirebaseAIChat) {
			const ret = new Chat();
			ret._native = chat;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get android() {
		return undefined;
	}

	get history(): Content[] {
		return deserialize(this.native.history);
	}

	sendMessage(prompt: PromptInput): Promise<GenerateContentResponse> {
		return new Promise((resolve, reject) => {
			this.native.sendMessageCompletion(toContent(prompt), (result, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(deserializeResponse(result));
				}
			});
		});
	}

	sendMessageStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.sendMessageStreamOnChunkCompletion(
				toContent(prompt),
				(chunk) => onChunk(deserializeResponse(chunk)),
				(error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				}
			);
		});
	}
}

export class GenerativeModel {
	_native: NSCFirebaseAIModel;

	static fromNative(model: NSCFirebaseAIModel) {
		if (model instanceof NSCFirebaseAIModel) {
			const ret = new GenerativeModel();
			ret._native = model;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get ios() {
		return this.native;
	}

	get android() {
		return undefined;
	}

	generateContent(prompt: PromptInput): Promise<GenerateContentResponse> {
		return new Promise((resolve, reject) => {
			this.native.generateContentCompletion(toContent(prompt), (result, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(deserializeResponse(result));
				}
			});
		});
	}

	generateContentStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void> {
		return new Promise((resolve, reject) => {
			this.native.generateContentStreamOnChunkCompletion(
				toContent(prompt),
				(chunk) => onChunk(deserializeResponse(chunk)),
				(error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				}
			);
		});
	}

	countTokens(prompt: PromptInput): Promise<number> {
		return new Promise((resolve, reject) => {
			this.native.countTokensCompletion(toContent(prompt), (result, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(result);
				}
			});
		});
	}

	startChat(history: Content[] = []): Chat {
		return Chat.fromNative(this.native.startChat(history));
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

	generativeModel(params: ModelParams): GenerativeModel {
		return GenerativeModel.fromNative(NSCFirebaseAI.generativeModelWithAppNameBackendLocationModelNameGenerationConfigSafetySettingsSystemInstruction(this._app?.name ?? null, this._backend, this._location ?? null, params.model, params.generationConfig ?? null, params.safetySettings ?? null, params.systemInstruction ?? null));
	}
}
