import { FirebaseApp } from '@nativescript/firebase-core';
import { BackendType, FinishReason, HarmBlockThreshold, HarmCategory } from './common';

export { BackendType, FinishReason, HarmBlockThreshold, HarmCategory };

export interface TextPart {
	text: string;
}

export interface InlineDataPart {
	inlineData: {
		/** Base64-encoded bytes. */
		data: string;
		mimeType: string;
	};
}

export interface FileDataPart {
	fileData: {
		fileUri: string;
		mimeType: string;
	};
}

export type Part = TextPart | InlineDataPart | FileDataPart;

export interface Content {
	role?: 'user' | 'model' | 'system';
	parts: Part[];
}

/**
 * A prompt: plain text, a list of parts for a single user turn, or explicit multi-turn content.
 */
export type PromptInput = string | Part[] | Content[];

export interface GenerationConfig {
	temperature?: number;
	topP?: number;
	topK?: number;
	candidateCount?: number;
	maxOutputTokens?: number;
	presencePenalty?: number;
	frequencyPenalty?: number;
	stopSequences?: string[];
	responseMimeType?: string;
}

export interface SafetySetting {
	category: HarmCategory;
	threshold: HarmBlockThreshold;
}

export interface ModelParams {
	/** For example `gemini-2.5-flash`. */
	model: string;
	generationConfig?: GenerationConfig;
	safetySettings?: SafetySetting[];
	systemInstruction?: string;
}

export interface UsageMetadata {
	promptTokenCount: number;
	candidatesTokenCount: number;
	totalTokenCount: number;
	thoughtsTokenCount?: number;
}

export interface SafetyRating {
	category: string;
	probability: string;
	blocked: boolean;
}

export interface Candidate {
	text: string;
	finishReason?: FinishReason | string;
	safetyRatings: SafetyRating[];
}

export interface FunctionCall {
	name: string;
	args: { [key: string]: any };
}

export interface GenerateContentResponse {
	text?: string;
	candidates: Candidate[];
	usageMetadata?: UsageMetadata;
	modelVersion?: string;
	functionCalls?: FunctionCall[];
}

export declare class Chat {
	readonly native: any;
	readonly ios: any;
	readonly android: any;

	readonly history: Content[];

	sendMessage(prompt: PromptInput): Promise<GenerateContentResponse>;

	sendMessageStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void>;
}

export declare class GenerativeModel {
	readonly native: any;
	readonly ios: any;
	readonly android: any;

	generateContent(prompt: PromptInput): Promise<GenerateContentResponse>;

	generateContentStream(prompt: PromptInput, onChunk: (chunk: GenerateContentResponse) => void): Promise<void>;

	countTokens(prompt: PromptInput): Promise<number>;

	startChat(history?: Content[]): Chat;
}

export interface AIOptions {
	app?: FirebaseApp;
	/** Defaults to `BackendType.GoogleAI`. */
	backend?: BackendType;
	/** Agent Platform region, defaulting to `global`. Ignored for the Google AI backend. */
	location?: string;
}

export declare class AI {
	readonly app: FirebaseApp;

	generativeModel(params: ModelParams): GenerativeModel;
}

declare module '@nativescript/firebase-core' {
	export interface Firebase extends FirebaseAILogic {}
}

export interface FirebaseAILogic {
	ai(options?: AIOptions): AI;
}
