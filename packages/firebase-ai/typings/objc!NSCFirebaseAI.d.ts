declare class NSCFirebaseAI extends NSObject {
	static alloc(): NSCFirebaseAI; // inherited from NSObject

	static new(): NSCFirebaseAI; // inherited from NSObject

	static generativeModelWithAppNameBackendLocationModelNameGenerationConfigSafetySettingsSystemInstruction(appName: string, backend: string, location: string, modelName: string, generationConfig: NSDictionary<string, any> | any, safetySettings: NSArray<NSDictionary<string, any>> | any[], systemInstruction: string): NSCFirebaseAIModel;
}

declare class NSCFirebaseAIModel extends NSObject {
	static alloc(): NSCFirebaseAIModel; // inherited from NSObject

	static new(): NSCFirebaseAIModel; // inherited from NSObject

	generateContentCompletion(content: NSArray<NSDictionary<string, any>> | any[], completion: (p1: NSDictionary<string, any>, p2: NSError) => void): void;

	generateContentStreamOnChunkCompletion(content: NSArray<NSDictionary<string, any>> | any[], onChunk: (p1: NSDictionary<string, any>) => void, completion: (p1: NSError) => void): void;

	countTokensCompletion(content: NSArray<NSDictionary<string, any>> | any[], completion: (p1: number, p2: NSError) => void): void;

	startChat(history: NSArray<NSDictionary<string, any>> | any[]): NSCFirebaseAIChat;
}

declare class NSCFirebaseAIChat extends NSObject {
	static alloc(): NSCFirebaseAIChat; // inherited from NSObject

	static new(): NSCFirebaseAIChat; // inherited from NSObject

	readonly history: NSArray<any>;

	sendMessageCompletion(content: NSArray<NSDictionary<string, any>> | any[], completion: (p1: NSDictionary<string, any>, p2: NSError) => void): void;

	sendMessageStreamOnChunkCompletion(content: NSArray<NSDictionary<string, any>> | any[], onChunk: (p1: NSDictionary<string, any>) => void, completion: (p1: NSError) => void): void;
}
