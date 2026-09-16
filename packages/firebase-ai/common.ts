export enum BackendType {
	GoogleAI = 'googleAI',
	AgentPlatform = 'agentPlatform',
	/**
	 * @deprecated Vertex AI was renamed to the Agent Platform Gemini API. Use AgentPlatform.
	 * Kept for compatibility; it resolves to the Agent Platform with the old `us-central1` default.
	 */
	VertexAI = 'vertexAI',
}

export enum HarmCategory {
	Harassment = 'harassment',
	HateSpeech = 'hateSpeech',
	SexuallyExplicit = 'sexuallyExplicit',
	DangerousContent = 'dangerousContent',
	CivicIntegrity = 'civicIntegrity',
}

export enum HarmBlockThreshold {
	None = 'none',
	LowAndAbove = 'lowAndAbove',
	MediumAndAbove = 'mediumAndAbove',
	OnlyHigh = 'onlyHigh',
}

export enum FinishReason {
	Stop = 'stop',
	MaxTokens = 'maxTokens',
	Safety = 'safety',
	Recitation = 'recitation',
	Other = 'other',
	Unknown = 'unknown',
}
