/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class BuildConfig {
					public static class: java.lang.Class<com.google.firebase.ai.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.google.firebase.ai';
					public static BUILD_TYPE: string = 'release';
					public static VERSION_NAME: string = '17.17.0';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class Chat {
					public static class: java.lang.Class<com.google.firebase.ai.Chat>;
					public sendMessageStream(this_: string): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public sendMessageStream(thisCollection$iv: com.google.firebase.ai.type.Content): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public constructor(model: com.google.firebase.ai.GenerativeModel, history: java.util.List<com.google.firebase.ai.type.Content>);
					public getHistory(): java.util.List<com.google.firebase.ai.type.Content>;
					public sendMessage(this_: com.google.firebase.ai.type.Content, this_: any): any;
					public sendMessage(this_: string, prompt: any): any;
					public sendMessage(this_: globalAndroid.graphics.Bitmap, prompt: any): any;
					public sendMessageStream(this_: globalAndroid.graphics.Bitmap): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export abstract class DownloadStatus {
					public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus>;
					public constructor();
				}
				export module DownloadStatus {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus.Companion>;
						public fromInterop$com_google_firebase_ai_logic_firebase_ai(status: com.google.firebase.ai.ondevice.interop.DownloadStatusInterop): com.google.firebase.ai.DownloadStatus;
					}
					export class DownloadCompleted extends com.google.firebase.ai.DownloadStatus {
						public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus.DownloadCompleted>;
						public constructor();
						public equals(other: any): boolean;
						public hashCode(): number;
					}
					export class DownloadFailed extends com.google.firebase.ai.DownloadStatus {
						public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus.DownloadFailed>;
						public constructor(exception: com.google.firebase.ai.type.FirebaseAIException);
						public constructor();
						public equals(other: any): boolean;
						public getException(): com.google.firebase.ai.type.FirebaseAIException;
						public hashCode(): number;
					}
					export class DownloadInProgress extends com.google.firebase.ai.DownloadStatus {
						public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus.DownloadInProgress>;
						public constructor();
						public equals(other: any): boolean;
						public constructor(totalBytesDownloaded: number);
						public getTotalBytesDownloaded(): number;
						public hashCode(): number;
					}
					export class DownloadStarted extends com.google.firebase.ai.DownloadStatus {
						public static class: java.lang.Class<com.google.firebase.ai.DownloadStatus.DownloadStarted>;
						public getBytesToDownload(): number;
						public constructor();
						public equals(other: any): boolean;
						public hashCode(): number;
						public constructor(bytesToDownload: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class FirebaseAI {
					public static class: java.lang.Class<com.google.firebase.ai.FirebaseAI>;
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig): com.google.firebase.ai.GenerativeModel;
					public liveModel(modelName: string, generationConfig: com.google.firebase.ai.type.LiveGenerationConfig, tools: java.util.List<com.google.firebase.ai.type.Tool>): com.google.firebase.ai.LiveGenerativeModel;
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>, tools: java.util.List<com.google.firebase.ai.type.Tool>, toolConfig: com.google.firebase.ai.type.ToolConfig, systemInstruction: com.google.firebase.ai.type.Content): com.google.firebase.ai.GenerativeModel;
					public static getInstance(): com.google.firebase.ai.FirebaseAI;
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>, tools: java.util.List<com.google.firebase.ai.type.Tool>): com.google.firebase.ai.GenerativeModel;
					public generativeModel($this$generativeModel_u24lambda_u240: string, modelUri: com.google.firebase.ai.type.GenerationConfig, this_: java.util.List<com.google.firebase.ai.type.SafetySetting>, modelName: java.util.List<com.google.firebase.ai.type.Tool>, generationConfig: com.google.firebase.ai.type.ToolConfig, safetySettings: com.google.firebase.ai.type.Content, tools: com.google.firebase.ai.type.RequestOptions, toolConfig: com.google.firebase.ai.OnDeviceConfig): com.google.firebase.ai.GenerativeModel;
					public templateGenerativeModel(this_: com.google.firebase.ai.type.RequestOptions, requestOptions: java.util.List<com.google.firebase.ai.type.TemplateTool>, tools: com.google.firebase.ai.type.TemplateToolConfig): com.google.firebase.ai.TemplateGenerativeModel;
					public static getInstance(backend: com.google.firebase.ai.type.GenerativeBackend): com.google.firebase.ai.FirebaseAI;
					public static getInstance(backend: com.google.firebase.ai.type.GenerativeBackend, useLimitedUseAppCheckTokens: boolean): com.google.firebase.ai.FirebaseAI;
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>, tools: java.util.List<com.google.firebase.ai.type.Tool>, toolConfig: com.google.firebase.ai.type.ToolConfig): com.google.firebase.ai.GenerativeModel;
					public liveModel(modelName: string, generationConfig: com.google.firebase.ai.type.LiveGenerationConfig, tools: java.util.List<com.google.firebase.ai.type.Tool>, systemInstruction: com.google.firebase.ai.type.Content): com.google.firebase.ai.LiveGenerativeModel;
					public templateGenerativeModel(requestOptions: com.google.firebase.ai.type.RequestOptions, tools: java.util.List<com.google.firebase.ai.type.TemplateTool>): com.google.firebase.ai.TemplateGenerativeModel;
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>, tools: java.util.List<com.google.firebase.ai.type.Tool>, toolConfig: com.google.firebase.ai.type.ToolConfig, systemInstruction: com.google.firebase.ai.type.Content, requestOptions: com.google.firebase.ai.type.RequestOptions): com.google.firebase.ai.GenerativeModel;
					public liveModel(modelName: string): com.google.firebase.ai.LiveGenerativeModel;
					public static getInstance(app: com.google.firebase.FirebaseApp, backend: com.google.firebase.ai.type.GenerativeBackend, useLimitedUseAppCheckTokens: boolean): com.google.firebase.ai.FirebaseAI;
					public constructor(firebaseApp: com.google.firebase.FirebaseApp, backend: com.google.firebase.ai.type.GenerativeBackend, blockingDispatcher: any, appCheckProvider: com.google.firebase.inject.Provider<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>, internalAuthProvider: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>, onDeviceFactoryProvider: com.google.firebase.inject.Provider<com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceGenerativeModelFactory>, useLimitedUseAppCheckTokens: boolean);
					public generativeModel(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>): com.google.firebase.ai.GenerativeModel;
					public static getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.ai.FirebaseAI;
					public generativeModel(modelName: string): com.google.firebase.ai.GenerativeModel;
					public templateGenerativeModel(): com.google.firebase.ai.TemplateGenerativeModel;
					public templateGenerativeModel(requestOptions: com.google.firebase.ai.type.RequestOptions): com.google.firebase.ai.TemplateGenerativeModel;
					public liveModel(modelName: string, generationConfig: com.google.firebase.ai.type.LiveGenerationConfig): com.google.firebase.ai.LiveGenerativeModel;
					public static getInstance(app: com.google.firebase.FirebaseApp, backend: com.google.firebase.ai.type.GenerativeBackend): com.google.firebase.ai.FirebaseAI;
					public liveModel(modelName: string, generationConfig: com.google.firebase.ai.type.LiveGenerationConfig, tools: java.util.List<com.google.firebase.ai.type.Tool>, systemInstruction: com.google.firebase.ai.type.Content, requestOptions: com.google.firebase.ai.type.RequestOptions): com.google.firebase.ai.LiveGenerativeModel;
				}
				export module FirebaseAI {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.FirebaseAI.Companion>;
						public getInstance(): com.google.firebase.ai.FirebaseAI;
						public getInstance(app: com.google.firebase.FirebaseApp, backend: com.google.firebase.ai.type.GenerativeBackend): com.google.firebase.ai.FirebaseAI;
						public getInstance(backend: com.google.firebase.ai.type.GenerativeBackend): com.google.firebase.ai.FirebaseAI;
						public getInstance(this_: com.google.firebase.FirebaseApp, app: com.google.firebase.ai.type.GenerativeBackend, backend: boolean): com.google.firebase.ai.FirebaseAI;
						public getInstance(backend: com.google.firebase.ai.type.GenerativeBackend, useLimitedUseAppCheckTokens: boolean): com.google.firebase.ai.FirebaseAI;
						public getInstance(app: com.google.firebase.FirebaseApp): com.google.firebase.ai.FirebaseAI;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.google.firebase.ai.FirebaseAI.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class FirebaseAIMultiResourceComponent {
					public static class: java.lang.Class<com.google.firebase.ai.FirebaseAIMultiResourceComponent>;
					public getBlockingDispatcher(): any;
					public constructor(app: com.google.firebase.FirebaseApp, blockingDispatcher: any, appCheckProvider: com.google.firebase.inject.Provider<com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider>, internalAuthProvider: com.google.firebase.inject.Provider<com.google.firebase.auth.internal.InternalAuthProvider>, onDeviceFactoryProvider: com.google.firebase.inject.Provider<com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceGenerativeModelFactory>);
					public get(answer$iv: com.google.firebase.ai.InstanceKey): com.google.firebase.ai.FirebaseAI;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class FirebaseAIRegistrar {
					public static class: java.lang.Class<com.google.firebase.ai.FirebaseAIRegistrar>;
					public constructor();
					public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
				}
				export module FirebaseAIRegistrar {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.FirebaseAIRegistrar.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class GenerativeModel {
					public static class: java.lang.Class<com.google.firebase.ai.GenerativeModel>;
					public countTokens(prompt: globalAndroid.graphics.Bitmap, $completion: any): any;
					public hasFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart): boolean;
					public generateContentStream(prompt: string): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart, list$iv$iv: any): any;
					public generateContent(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
					public countTokens(prompt: string, $completion: any): any;
					public generateContentStream(prompt: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public generateContent(prompt: globalAndroid.graphics.Bitmap, $completion: any): any;
					public generateContent(prompt: string, $completion: any): any;
					public generateContentStream(prompt: globalAndroid.graphics.Bitmap): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public countTokens(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>, $completion: any): any;
					public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, prompt: string, $completion: any): any;
					public startChat(history: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.Chat;
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(functionCall: com.google.firebase.ai.type.FunctionCallPart, functionCall: com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>, functionCall: string, functionDeclaration: any): any;
					public getOnDeviceExtension(): com.google.firebase.ai.OnDeviceExtension;
					public constructor(actualModel: com.google.firebase.ai.generativemodel.GenerativeModelProvider, requestOptions: com.google.firebase.ai.type.RequestOptions, tools: java.util.List<com.google.firebase.ai.type.Tool>, onDeviceExtension: com.google.firebase.ai.OnDeviceExtension);
					public generateContentStream(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public countTokens(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
					/** @deprecated */
					public warmUp($completion: any): any;
					public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>, $completion: any): any;
					public getRequestOptions$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RequestOptions;
					public generateContent(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>, $completion: any): any;
				}
				export module GenerativeModel {
					export class Builder {
						public static class: java.lang.Class<com.google.firebase.ai.GenerativeModel.Builder>;
						public setTools(value: java.util.List<com.google.firebase.ai.type.Tool>): void;
						public setGenerationConfig(value: com.google.firebase.ai.type.GenerationConfig): void;
						public getToolConfig(): com.google.firebase.ai.type.ToolConfig;
						public getOnDeviceConfig(): com.google.firebase.ai.OnDeviceConfig;
						public constructor(modelName: string, apiKey: string, firebaseApp: com.google.firebase.FirebaseApp, useLimitedUseAppCheckTokens: boolean, generativeBackend: com.google.firebase.ai.type.GenerativeBackend);
						public getApiClient(): string;
						public getSafetySettings(): java.util.List<com.google.firebase.ai.type.SafetySetting>;
						public getSystemInstruction(): com.google.firebase.ai.type.Content;
						public setOnDeviceConfig(value: com.google.firebase.ai.OnDeviceConfig): void;
						public setAppCheckTokenProvider(value: com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider): void;
						public setApiClient(value: string): void;
						public setSafetySettings(value: java.util.List<com.google.firebase.ai.type.SafetySetting>): void;
						public setInternalAuthProvider(value: com.google.firebase.auth.internal.InternalAuthProvider): void;
						public getRequestOptions(): com.google.firebase.ai.type.RequestOptions;
						public build$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.GenerativeModel;
						public setSystemInstruction(value: com.google.firebase.ai.type.Content): void;
						public getTools(): java.util.List<com.google.firebase.ai.type.Tool>;
						public getInternalAuthProvider(): com.google.firebase.auth.internal.InternalAuthProvider;
						public setOnDeviceFactoryProvider(value: com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceGenerativeModelFactory): void;
						public getOnDeviceFactoryProvider(): com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceGenerativeModelFactory;
						public setToolConfig(value: com.google.firebase.ai.type.ToolConfig): void;
						public getAppCheckTokenProvider(): com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider;
						public getModelProvider$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.generativemodel.GenerativeModelProvider;
						public buildCloudModelProvider$com_google_firebase_ai_logic_firebase_ai(isHybrid: boolean): com.google.firebase.ai.generativemodel.GenerativeModelProvider;
						public buildOnDeviceModelProvider$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.OnDeviceModelOption): com.google.firebase.ai.generativemodel.GenerativeModelProvider;
						public getGenerationConfig(): com.google.firebase.ai.type.GenerationConfig;
						public setRequestOptions(value: com.google.firebase.ai.type.RequestOptions): void;
					}
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.GenerativeModel.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class InferenceMode {
					public static class: java.lang.Class<com.google.firebase.ai.InferenceMode>;
					public static PREFER_ON_DEVICE: com.google.firebase.ai.InferenceMode;
					public static PREFER_IN_CLOUD: com.google.firebase.ai.InferenceMode;
					public static ONLY_ON_DEVICE: com.google.firebase.ai.InferenceMode;
					public static ONLY_IN_CLOUD: com.google.firebase.ai.InferenceMode;
				}
				export module InferenceMode {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.InferenceMode.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class InferenceSource {
					public static class: java.lang.Class<com.google.firebase.ai.InferenceSource>;
					public static ON_DEVICE: com.google.firebase.ai.InferenceSource;
					public static IN_CLOUD: com.google.firebase.ai.InferenceSource;
					public toString(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
				export module InferenceSource {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.InferenceSource.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class InstanceKey {
					public static class: java.lang.Class<com.google.firebase.ai.InstanceKey>;
					public constructor(backend: com.google.firebase.ai.type.GenerativeBackend, useLimitedUseAppCheckTokens: boolean);
					public toString(): string;
					public getBackend(): com.google.firebase.ai.type.GenerativeBackend;
					public component1(): com.google.firebase.ai.type.GenerativeBackend;
					public equals(other: any): boolean;
					public hashCode(): number;
					public copy(backend: com.google.firebase.ai.type.GenerativeBackend, useLimitedUseAppCheckTokens: boolean): com.google.firebase.ai.InstanceKey;
					public component2(): boolean;
					public getUseLimitedUseAppCheckTokens(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class LiveGenerativeModel {
					public static class: java.lang.Class<com.google.firebase.ai.LiveGenerativeModel>;
					public constructor(modelName: string, blockingDispatcher: any, config: com.google.firebase.ai.type.LiveGenerationConfig, tools: java.util.List<com.google.firebase.ai.type.Tool>, systemInstruction: com.google.firebase.ai.type.Content, location: string, firebaseApp: com.google.firebase.FirebaseApp, controller: com.google.firebase.ai.common.APIController);
					public hasFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart): boolean;
					public constructor(
						modelName: string,
						apiKey: string,
						firebaseApp: com.google.firebase.FirebaseApp,
						blockingDispatcher: any,
						config: com.google.firebase.ai.type.LiveGenerationConfig,
						tools: java.util.List<com.google.firebase.ai.type.Tool>,
						systemInstruction: com.google.firebase.ai.type.Content,
						location: string,
						requestOptions: com.google.firebase.ai.type.RequestOptions,
						appCheckTokenProvider: com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider,
						internalAuthProvider: com.google.firebase.auth.internal.InternalAuthProvider,
						generativeBackend: com.google.firebase.ai.type.GenerativeBackend,
						useLimitedUseAppCheckTokens: boolean
					);
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart, list$iv$iv: any): any;
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(functionCall: com.google.firebase.ai.type.FunctionCallPart, functionCall: com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>, functionCall: string, functionDeclaration: any): any;
					public connect($completion: any): any;
					public connect(this_: com.google.firebase.ai.type.SessionResumptionConfig, sessionResumption: any): any;
				}
				export module LiveGenerativeModel {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.LiveGenerativeModel.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class NetworkStatusChecker {
					public static class: java.lang.Class<com.google.firebase.ai.NetworkStatusChecker>;
					public constructor(connectivityManager: globalAndroid.net.ConnectivityManager);
					public isDeviceOnline(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class OnDeviceConfig {
					public static class: java.lang.Class<com.google.firebase.ai.OnDeviceConfig>;
					public static IN_CLOUD: com.google.firebase.ai.OnDeviceConfig;
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer, temperature: java.lang.Float, topK: java.lang.Integer);
					public getMode(): com.google.firebase.ai.InferenceMode;
					public constructor(mode: com.google.firebase.ai.InferenceMode);
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer, temperature: java.lang.Float, topK: java.lang.Integer, seed: java.lang.Integer, candidateCount: number, modelOption: com.google.firebase.ai.OnDeviceModelOption);
					public getCandidateCount(): number;
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer, temperature: java.lang.Float, topK: java.lang.Integer, seed: java.lang.Integer, candidateCount: number);
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer, temperature: java.lang.Float, topK: java.lang.Integer, seed: java.lang.Integer);
					public getTemperature(): java.lang.Float;
					public getMaxOutputTokens(): java.lang.Integer;
					public getTopK(): java.lang.Integer;
					public getModelOption(): com.google.firebase.ai.OnDeviceModelOption;
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer);
					public getSeed(): java.lang.Integer;
					public constructor(mode: com.google.firebase.ai.InferenceMode, maxOutputTokens: java.lang.Integer, temperature: java.lang.Float);
				}
				export module OnDeviceConfig {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.OnDeviceConfig.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class OnDeviceExtension {
					public static class: java.lang.Class<com.google.firebase.ai.OnDeviceExtension>;
					public getModelName($completion: any): any;
					public warmUp($completion: any): any;
					public constructor(onDeviceGenerativeModel: com.google.firebase.ai.ondevice.interop.GenerativeModel);
					public checkStatus($completion: any): any;
					public download(): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.DownloadStatus>;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class OnDeviceModelOption {
					public static class: java.lang.Class<com.google.firebase.ai.OnDeviceModelOption>;
					public static STABLE: com.google.firebase.ai.OnDeviceModelOption;
					public static PREVIEW: com.google.firebase.ai.OnDeviceModelOption;
					public static PREVIEW_FAST: com.google.firebase.ai.OnDeviceModelOption;
					public toString(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
				export module OnDeviceModelOption {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.OnDeviceModelOption.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class OnDeviceModelStatus {
					public static class: java.lang.Class<com.google.firebase.ai.OnDeviceModelStatus>;
					public static UNAVAILABLE: com.google.firebase.ai.OnDeviceModelStatus;
					public static DOWNLOADABLE: com.google.firebase.ai.OnDeviceModelStatus;
					public static DOWNLOADING: com.google.firebase.ai.OnDeviceModelStatus;
					public static AVAILABLE: com.google.firebase.ai.OnDeviceModelStatus;
					public toString(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
				}
				export module OnDeviceModelStatus {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.OnDeviceModelStatus.Companion>;
						public fromInterop$com_google_firebase_ai_logic_firebase_ai(status: com.google.firebase.ai.ondevice.interop.OnDeviceModelStatusInterop): com.google.firebase.ai.OnDeviceModelStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class TemplateChat {
					public static class: java.lang.Class<com.google.firebase.ai.TemplateChat>;
					public sendMessageStream(this_: string): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public sendMessageStream(flow: com.google.firebase.ai.type.Content): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public sendMessageWithFunctionHandling$com_google_firebase_ai_logic_firebase_ai(this_: java.util.List<com.google.firebase.ai.type.Content>, this_: any): any;
					public constructor(model: com.google.firebase.ai.TemplateGenerativeModel, templateId: string, inputs: java.util.Map<string, any>, history: java.util.List<com.google.firebase.ai.type.Content>);
					public getHistory(): java.util.List<com.google.firebase.ai.type.Content>;
					public sendMessage(this_: com.google.firebase.ai.type.Content, this_: any): any;
					public sendMessage(this_: string, prompt: any): any;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export class TemplateGenerativeModel {
					public static class: java.lang.Class<com.google.firebase.ai.TemplateGenerativeModel>;
					public hasFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart): boolean;
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.FunctionCallPart, list$iv$iv: any): any;
					public generateContentWithHistoryStream$com_google_firebase_ai_logic_firebase_ai($i$f$unsafeTransform: string, $this$unsafeTransform$iv$iv: java.util.Map<string, any>, $i$f$map: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public executeFunction$com_google_firebase_ai_logic_firebase_ai(functionCall: com.google.firebase.ai.type.FunctionCallPart, functionCall: com.google.firebase.ai.type.TemplateAutoFunctionDeclaration<any, any>, functionCall: string, functionDeclaration: any): any;
					public constructor(templateUri: string, apiKey: string, firebaseApp: com.google.firebase.FirebaseApp, useLimitedUseAppCheckTokens: boolean, requestOptions: com.google.firebase.ai.type.RequestOptions, tools: java.util.List<com.google.firebase.ai.type.TemplateTool>, toolConfig: com.google.firebase.ai.type.TemplateToolConfig, appCheckTokenProvider: com.google.firebase.appcheck.interop.InteropAppCheckTokenProvider, internalAuthProvider: com.google.firebase.auth.internal.InternalAuthProvider);
					public generateContent(templateId: string, inputs: java.util.Map<string, any>, $completion: any): any;
					public generateContentStream(templateId: string, inputs: java.util.Map<string, any>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
					public constructRequest$com_google_firebase_ai_logic_firebase_ai(it: java.util.Map<string, any>, item$iv$iv: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.common.TemplateGenerateContentRequest;
					public generateContentWithHistory$com_google_firebase_ai_logic_firebase_ai(templateId: string, inputs: java.util.Map<string, any>, history: java.util.List<com.google.firebase.ai.type.Content>, e: any): any;
					public startChat(templateId: string, inputs: java.util.Map<string, any>, history: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.TemplateChat;
					public constructor(templateUri: string, controller: com.google.firebase.ai.common.APIController, tools: java.util.List<com.google.firebase.ai.type.TemplateTool>, toolConfig: com.google.firebase.ai.type.TemplateToolConfig);
				}
				export module TemplateGenerativeModel {
					export class Companion {
						public static class: java.lang.Class<com.google.firebase.ai.TemplateGenerativeModel.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module annotations {
					export class Generable {
						public static class: java.lang.Class<com.google.firebase.ai.annotations.Generable>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.annotations.Generable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { description(): string });
						public constructor();
						public description(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module annotations {
					export class Guide {
						public static class: java.lang.Class<com.google.firebase.ai.annotations.Guide>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.annotations.Guide interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { description(): string; minimum(): number; maximum(): number; minItems(): number; maxItems(): number; format(): string; enumValues(): androidNative.Array<string> });
						public constructor();
						public description(): string;
						public minimum(): number;
						public format(): string;
						public minItems(): number;
						public maximum(): number;
						public maxItems(): number;
						public enumValues(): androidNative.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module annotations {
					export class Tool {
						public static class: java.lang.Class<com.google.firebase.ai.annotations.Tool>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.annotations.Tool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { description(): string });
						public constructor();
						public description(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module generativemodel {
					export class CloudGenerativeModelProvider extends com.google.firebase.ai.generativemodel.GenerativeModelProvider {
						public static class: java.lang.Class<com.google.firebase.ai.generativemodel.CloudGenerativeModelProvider>;
						public getController$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.common.APIController;
						public countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public countTokens(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public warmUp(param0: any): any;
						public constructor(modelName: string, generationConfig: com.google.firebase.ai.type.GenerationConfig, safetySettings: java.util.List<com.google.firebase.ai.type.SafetySetting>, tools: java.util.List<com.google.firebase.ai.type.Tool>, toolConfig: com.google.firebase.ai.type.ToolConfig, systemInstruction: com.google.firebase.ai.type.Content, generativeBackend: com.google.firebase.ai.type.GenerativeBackend, controller: com.google.firebase.ai.common.APIController);
						public generateContent(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, prompt: java.util.List<any>, $completion: any): any;
						public generateContentStream($i$f$unsafeTransform: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public warmUp($completion: any): any;
						public generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any;
					}
					export module CloudGenerativeModelProvider {
						export class WhenMappings {
							public static class: java.lang.Class<com.google.firebase.ai.generativemodel.CloudGenerativeModelProvider.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module generativemodel {
					export class FallbackGenerativeModelProvider extends com.google.firebase.ai.generativemodel.GenerativeModelProvider {
						public static class: java.lang.Class<com.google.firebase.ai.generativemodel.FallbackGenerativeModelProvider>;
						public countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public getDefaultModel$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.generativemodel.GenerativeModelProvider;
						public generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public generateContentStream($this$generateContentStream_u24lambda_u243: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public countTokens(prompt: java.util.List<com.google.firebase.ai.type.Content>, prompt: any): any;
						public generateContent(prompt: java.util.List<com.google.firebase.ai.type.Content>, prompt: any): any;
						public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, jsonSchema: java.util.List<any>, jsonSchema: any): any;
						public getFallbackModel$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.generativemodel.GenerativeModelProvider;
						public warmUp(this_: any): any;
						public generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public warmUp(param0: any): any;
						public constructor(defaultModel: com.google.firebase.ai.generativemodel.GenerativeModelProvider, fallbackModel: com.google.firebase.ai.generativemodel.GenerativeModelProvider, precondition: any, shouldFallbackInException: boolean);
						public generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any;
					}
					export module FallbackGenerativeModelProvider {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.generativemodel.FallbackGenerativeModelProvider.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module generativemodel {
					export class GenerativeModelProvider {
						public static class: java.lang.Class<com.google.firebase.ai.generativemodel.GenerativeModelProvider>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.generativemodel.GenerativeModelProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any; countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any; generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>; generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any; warmUp(param0: any): any });
						public constructor();
						public countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public warmUp(param0: any): any;
						public generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module generativemodel {
					export class MissingOnDeviceGenerativeModelProvider extends com.google.firebase.ai.generativemodel.GenerativeModelProvider {
						public static class: java.lang.Class<com.google.firebase.ai.generativemodel.MissingOnDeviceGenerativeModelProvider>;
						public generateContentStream(prompt: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public constructor();
						public generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public countTokens(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public warmUp(param0: any): any;
						public generateContent(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, prompt: java.util.List<any>, $completion: any): any;
						public warmUp($completion: any): any;
						public generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module generativemodel {
					export class OnDeviceGenerativeModelProvider extends com.google.firebase.ai.generativemodel.GenerativeModelProvider {
						public static class: java.lang.Class<com.google.firebase.ai.generativemodel.OnDeviceGenerativeModelProvider>;
						public generateContentStream(prompt: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public countTokens(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public generateContentStream(param0: java.util.List<com.google.firebase.ai.type.Content>): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.GenerateContentResponse>;
						public generateContent(param0: java.util.List<com.google.firebase.ai.type.Content>, param1: any): any;
						public countTokens(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public warmUp(param0: any): any;
						public generateContent(prompt: java.util.List<com.google.firebase.ai.type.Content>, $completion: any): any;
						public generateObject(jsonSchema: com.google.firebase.ai.type.JsonSchema<any>, prompt: java.util.List<any>, $completion: any): any;
						public constructor(onDeviceModel: com.google.firebase.ai.ondevice.interop.GenerativeModel, onDeviceConfig: com.google.firebase.ai.OnDeviceConfig);
						public warmUp($completion: any): any;
						public generateObject(param0: com.google.firebase.ai.type.JsonSchema<any>, param1: java.util.List<any>, param2: any): any;
					}
					export module OnDeviceGenerativeModelProvider {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.generativemodel.OnDeviceGenerativeModelProvider.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class ChatFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.ChatFutures>;
						public constructor();
						public getChat(): com.google.firebase.ai.Chat;
						public static from(chat: com.google.firebase.ai.Chat): com.google.firebase.ai.java.ChatFutures;
						public sendMessageStream(param0: com.google.firebase.ai.type.Content): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
						public sendMessage(param0: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
					}
					export module ChatFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.ChatFutures.Companion>;
							public from(chat: com.google.firebase.ai.Chat): com.google.firebase.ai.java.ChatFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.ChatFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.ChatFutures.FuturesImpl>;
							public constructor();
							public sendMessageStream(prompt: com.google.firebase.ai.type.Content): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
							public getChat(): com.google.firebase.ai.Chat;
							public sendMessage(prompt: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
							public constructor(chat: com.google.firebase.ai.Chat);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class GenerativeModelFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.GenerativeModelFutures>;
						public startChat(): com.google.firebase.ai.java.ChatFutures;
						public constructor();
						public generateContentStream(param0: com.google.firebase.ai.type.Content, param1: androidNative.Array<com.google.firebase.ai.type.Content>): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
						public getGenerativeModel(): com.google.firebase.ai.GenerativeModel;
						public countTokens(param0: com.google.firebase.ai.type.Content, param1: androidNative.Array<com.google.firebase.ai.type.Content>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.CountTokensResponse>;
						public generateContent(param0: com.google.firebase.ai.type.Content, param1: androidNative.Array<com.google.firebase.ai.type.Content>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
						public startChat(param0: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.java.ChatFutures;
						public static from(model: com.google.firebase.ai.GenerativeModel): com.google.firebase.ai.java.GenerativeModelFutures;
					}
					export module GenerativeModelFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.GenerativeModelFutures.Companion>;
							public from(model: com.google.firebase.ai.GenerativeModel): com.google.firebase.ai.java.GenerativeModelFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.GenerativeModelFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.GenerativeModelFutures.FuturesImpl>;
							public constructor();
							public generateContent(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
							public startChat(): com.google.firebase.ai.java.ChatFutures;
							public constructor(model: com.google.firebase.ai.GenerativeModel);
							public startChat(param0: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.java.ChatFutures;
							public startChat(history: java.util.List<com.google.firebase.ai.type.Content>): com.google.firebase.ai.java.ChatFutures;
							public countTokens(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.CountTokensResponse>;
							public getGenerativeModel(): com.google.firebase.ai.GenerativeModel;
							public generateContentStream(prompt: com.google.firebase.ai.type.Content, prompts: androidNative.Array<com.google.firebase.ai.type.Content>): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class LiveModelFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.LiveModelFutures>;
						public constructor();
						public static from(model: com.google.firebase.ai.LiveGenerativeModel): com.google.firebase.ai.java.LiveModelFutures;
						public connect(): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.java.LiveSessionFutures>;
					}
					export module LiveModelFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.LiveModelFutures.Companion>;
							public from(model: com.google.firebase.ai.LiveGenerativeModel): com.google.firebase.ai.java.LiveModelFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.LiveModelFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.LiveModelFutures.FuturesImpl>;
							public constructor();
							public connect(): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.java.LiveSessionFutures>;
							public constructor(model: com.google.firebase.ai.LiveGenerativeModel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class LiveSessionFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.LiveSessionFutures>;
						/** @deprecated */
						public sendMediaStream(param0: java.util.List<com.google.firebase.ai.type.MediaData>): com.google.common.util.concurrent.ListenableFuture<any>;
						public constructor();
						public close(): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendAudioRealtime(param0: com.google.firebase.ai.type.InlineData): com.google.common.util.concurrent.ListenableFuture<any>;
						public receive(): org.reactivestreams.Publisher<com.google.firebase.ai.type.LiveServerMessage>;
						public static from(session: com.google.firebase.ai.type.LiveSession): com.google.firebase.ai.java.LiveSessionFutures;
						public send(param0: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendTextRealtime(param0: string): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: com.google.firebase.ai.type.LiveAudioConversationConfig): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: any): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: any): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendStartActivityRealtime(): com.google.common.util.concurrent.ListenableFuture<any>;
						public send(param0: com.google.firebase.ai.type.Content, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendVideoRealtime(param0: com.google.firebase.ai.type.InlineData): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendStopActivityRealtime(): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: any, param1: any, param2: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
						public stopReceiving(): void;
						public startAudioConversation(): com.google.common.util.concurrent.ListenableFuture<any>;
						public stopAudioConversation(): com.google.common.util.concurrent.ListenableFuture<any>;
						public sendFunctionResponse(param0: java.util.List<com.google.firebase.ai.type.FunctionResponsePart>): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: any, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
						public send(param0: string): com.google.common.util.concurrent.ListenableFuture<any>;
						public startAudioConversation(param0: any, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
					}
					export module LiveSessionFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.LiveSessionFutures.Companion>;
							public from(session: com.google.firebase.ai.type.LiveSession): com.google.firebase.ai.java.LiveSessionFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.LiveSessionFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.LiveSessionFutures.FuturesImpl>;
							public startAudioConversation(functionCallHandler: any, enableInterruptions: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(functionCallHandler: any): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendStartActivityRealtime(): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(functionCallHandler: any, transcriptHandler: any, enableInterruptions: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: any): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(transcriptHandler: any, enableInterruptions: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendStopActivityRealtime(): com.google.common.util.concurrent.ListenableFuture<any>;
							public stopReceiving(): void;
							public startAudioConversation(transcriptHandler: any): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(liveAudioConversationConfig: com.google.firebase.ai.type.LiveAudioConversationConfig): com.google.common.util.concurrent.ListenableFuture<any>;
							public stopAudioConversation(): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public constructor();
							public startAudioConversation(): com.google.common.util.concurrent.ListenableFuture<any>;
							public constructor(session: com.google.firebase.ai.type.LiveSession);
							public send(param0: com.google.firebase.ai.type.Content, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public send(content: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendVideoRealtime(video: com.google.firebase.ai.type.InlineData): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: any, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: any, param1: any, param2: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public close(): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendTextRealtime(text: string): com.google.common.util.concurrent.ListenableFuture<any>;
							public receive(): org.reactivestreams.Publisher<com.google.firebase.ai.type.LiveServerMessage>;
							public startAudioConversation(enableInterruptions: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendAudioRealtime(audio: com.google.firebase.ai.type.InlineData): com.google.common.util.concurrent.ListenableFuture<any>;
							public send(param0: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: any, param1: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendFunctionResponse(functionList: java.util.List<com.google.firebase.ai.type.FunctionResponsePart>): com.google.common.util.concurrent.ListenableFuture<any>;
							public sendMediaStream(mediaChunks: java.util.List<com.google.firebase.ai.type.MediaData>): com.google.common.util.concurrent.ListenableFuture<any>;
							public send(content: com.google.firebase.ai.type.Content, turnComplete: boolean): com.google.common.util.concurrent.ListenableFuture<any>;
							public startAudioConversation(param0: com.google.firebase.ai.type.LiveAudioConversationConfig): com.google.common.util.concurrent.ListenableFuture<any>;
							public send(text: string): com.google.common.util.concurrent.ListenableFuture<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class TemplateChatFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.TemplateChatFutures>;
						public getTemplateChat(): com.google.firebase.ai.TemplateChat;
						public constructor();
						public static from(templateChat: com.google.firebase.ai.TemplateChat): com.google.firebase.ai.java.TemplateChatFutures;
						public sendMessageStream(param0: com.google.firebase.ai.type.Content): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
						public sendMessage(param0: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
					}
					export module TemplateChatFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.TemplateChatFutures.Companion>;
							public from(templateChat: com.google.firebase.ai.TemplateChat): com.google.firebase.ai.java.TemplateChatFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.TemplateChatFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.TemplateChatFutures.FuturesImpl>;
							public constructor();
							public sendMessageStream(prompt: com.google.firebase.ai.type.Content): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
							public constructor(templateChat: com.google.firebase.ai.TemplateChat);
							public sendMessage(prompt: com.google.firebase.ai.type.Content): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
							public getTemplateChat(): com.google.firebase.ai.TemplateChat;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module java {
					export abstract class TemplateGenerativeModelFutures {
						public static class: java.lang.Class<com.google.firebase.ai.java.TemplateGenerativeModelFutures>;
						public constructor();
						public generateContent(param0: string, param1: java.util.Map<string, any>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
						public getGenerativeModel(): com.google.firebase.ai.TemplateGenerativeModel;
						public generateContentStream(param0: string, param1: java.util.Map<string, any>): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
						public static from(model: com.google.firebase.ai.TemplateGenerativeModel): com.google.firebase.ai.java.TemplateGenerativeModelFutures;
					}
					export module TemplateGenerativeModelFutures {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.java.TemplateGenerativeModelFutures.Companion>;
							public from(model: com.google.firebase.ai.TemplateGenerativeModel): com.google.firebase.ai.java.TemplateGenerativeModelFutures;
						}
						export class FuturesImpl extends com.google.firebase.ai.java.TemplateGenerativeModelFutures {
							public static class: java.lang.Class<com.google.firebase.ai.java.TemplateGenerativeModelFutures.FuturesImpl>;
							public constructor();
							public generateContentStream(templateId: string, inputs: java.util.Map<string, any>): org.reactivestreams.Publisher<com.google.firebase.ai.type.GenerateContentResponse>;
							public generateContent(templateId: string, inputs: java.util.Map<string, any>): com.google.common.util.concurrent.ListenableFuture<com.google.firebase.ai.type.GenerateContentResponse>;
							public getGenerativeModel(): com.google.firebase.ai.TemplateGenerativeModel;
							public constructor(model: com.google.firebase.ai.TemplateGenerativeModel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class APINotConfiguredException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.APINotConfiguredException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ActivityDetectionConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig>;
						public static builder(): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ActivityDetectionConfig.Internal;
						public getPrefixPaddingMs$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public static disabled(): com.google.firebase.ai.type.ActivityDetectionConfig;
						public getStartSensitivity$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
						public getSilenceDurationMs$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public getEndSensitivity$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
						public getDisabled$com_google_firebase_ai_logic_firebase_ai(): java.lang.Boolean;
					}
					export module ActivityDetectionConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig.Builder>;
							public startSensitivity: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
							public endSensitivity: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
							public prefixPaddingMs: java.lang.Integer;
							public silenceDurationMs: java.lang.Integer;
							public constructor();
							public setPrefixPaddingMs($this$setPrefixPaddingMs_u24lambda_u242: number): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
							public setStartSensitivity($this$setStartSensitivity_u24lambda_u240: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
							public setSilenceDurationMs($this$setSilenceDurationMs_u24lambda_u243: number): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
							public build(): com.google.firebase.ai.type.ActivityDetectionConfig;
							public setEndSensitivity($this$setEndSensitivity_u24lambda_u241: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig.Companion>;
							public disabled(): com.google.firebase.ai.type.ActivityDetectionConfig;
							public builder(): com.google.firebase.ai.type.ActivityDetectionConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig.Internal>;
							public constructor();
							public component2(): string;
							public hashCode(): number;
							public component3(): java.lang.Integer;
							public toString(): string;
							public component1(): string;
							public getDisabled(): java.lang.Boolean;
							public copy(startSensitivity: string, endSensitivity: string, prefixPaddingMs: java.lang.Integer, silenceDurationMs: java.lang.Integer, disabled: java.lang.Boolean): com.google.firebase.ai.type.ActivityDetectionConfig.Internal;
							public constructor(startSensitivity: string, endSensitivity: string, prefixPaddingMs: java.lang.Integer, silenceDurationMs: java.lang.Integer, disabled: java.lang.Boolean);
							public getPrefixPaddingMs(): java.lang.Integer;
							public equals(other: any): boolean;
							public getSilenceDurationMs(): java.lang.Integer;
							public component4(): java.lang.Integer;
							public component5(): java.lang.Boolean;
							public getEndSensitivity(): string;
							public getStartSensitivity(): string;
						}
						export class Sensitivity {
							public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity>;
							public static LOW: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
							public static HIGH: com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity;
							public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
						}
						export module Sensitivity {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.ActivityDetectionConfig.Sensitivity.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AspectRatio {
						public static class: java.lang.Class<com.google.firebase.ai.type.AspectRatio>;
						public static SQUARE_1x1: com.google.firebase.ai.type.AspectRatio;
						public static PORTRAIT_2x3: com.google.firebase.ai.type.AspectRatio;
						public static LANDSCAPE_3x2: com.google.firebase.ai.type.AspectRatio;
						public static PORTRAIT_3x4: com.google.firebase.ai.type.AspectRatio;
						public static LANDSCAPE_4x3: com.google.firebase.ai.type.AspectRatio;
						public static PORTRAIT_4x5: com.google.firebase.ai.type.AspectRatio;
						public static LANDSCAPE_5x4: com.google.firebase.ai.type.AspectRatio;
						public static PORTRAIT_9x16: com.google.firebase.ai.type.AspectRatio;
						public static LANDSCAPE_16x9: com.google.firebase.ai.type.AspectRatio;
						public static LANDSCAPE_21x9: com.google.firebase.ai.type.AspectRatio;
						public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module AspectRatio {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.AspectRatio.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AudioHelper {
						public static class: java.lang.Class<com.google.firebase.ai.type.AudioHelper>;
						public resumeRecording(): void;
						public pauseRecording(): void;
						public listenToRecording(): kotlinx.coroutines.flow.Flow<androidNative.Array<number>>;
						public release(): void;
						public constructor(recorder: globalAndroid.media.AudioRecord, playbackTrack: globalAndroid.media.AudioTrack);
						public playAudio(this_: androidNative.Array<number>): void;
					}
					export module AudioHelper {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.AudioHelper.Companion>;
							public build(bufferSize: any): com.google.firebase.ai.type.AudioHelper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AudioRecordInitializationFailedException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.AudioRecordInitializationFailedException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AudioThreadFactory {
						public static class: java.lang.Class<com.google.firebase.ai.type.AudioThreadFactory>;
						public constructor();
						public newThread(this_: java.lang.Runnable): java.lang.Thread;
					}
					export module AudioThreadFactory {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.AudioThreadFactory.Companion>;
							public getDEFAULT(): java.util.concurrent.ThreadFactory;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AudioTranscriptionConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.AudioTranscriptionConfig>;
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.AudioTranscriptionConfig.Internal;
					}
					export module AudioTranscriptionConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.AudioTranscriptionConfig.Internal>;
							public static INSTANCE: com.google.firebase.ai.type.AudioTranscriptionConfig.Internal;
							public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.AudioTranscriptionConfig.Internal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class AutoFunctionDeclaration<I, O> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>>;
						public constructor(name: string, description: string, inputSchema: com.google.firebase.ai.type.JsonSchema<I>, outputSchema: com.google.firebase.ai.type.JsonSchema<O>, functionReference: any);
						public getOutputSchema(): com.google.firebase.ai.type.JsonSchema<O>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FunctionDeclaration.Internal;
						public getDescription(): string;
						public getFunctionReference(): any;
						public getName(): string;
						public getInputSchema(): com.google.firebase.ai.type.JsonSchema<I>;
					}
					export module AutoFunctionDeclaration {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.AutoFunctionDeclaration.Companion>;
							public create(functionName: string, description: string, inputSchema: com.google.firebase.ai.type.JsonSchema<any>, functionReference: any): com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>;
							public create(functionName: string, description: string, inputSchema: com.google.firebase.ai.type.JsonSchema<any>, outputSchema: com.google.firebase.ai.type.JsonSchema<any>, functionReference: any): com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class BlockReason {
						public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason>;
						public static UNKNOWN: com.google.firebase.ai.type.BlockReason;
						public static SAFETY: com.google.firebase.ai.type.BlockReason;
						public static OTHER: com.google.firebase.ai.type.BlockReason;
						public static BLOCKLIST: com.google.firebase.ai.type.BlockReason;
						public static PROHIBITED_CONTENT: com.google.firebase.ai.type.BlockReason;
						public getOrdinal(): number;
						public getName(): string;
					}
					export module BlockReason {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason.Internal>;
							public static UNKNOWN: com.google.firebase.ai.type.BlockReason.Internal;
							public static UNSPECIFIED: com.google.firebase.ai.type.BlockReason.Internal;
							public static SAFETY: com.google.firebase.ai.type.BlockReason.Internal;
							public static OTHER: com.google.firebase.ai.type.BlockReason.Internal;
							public static BLOCKLIST: com.google.firebase.ai.type.BlockReason.Internal;
							public static PROHIBITED_CONTENT: com.google.firebase.ai.type.BlockReason.Internal;
							public static getEntries(): any;
							public static values(): androidNative.Array<com.google.firebase.ai.type.BlockReason.Internal>;
							public static valueOf(value: string): com.google.firebase.ai.type.BlockReason.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.BlockReason;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.BlockReason.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.BlockReason.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.BlockReason.Internal.Serializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.BlockReason.Internal;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.BlockReason.Internal): void;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.BlockReason.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Candidate {
						public static class: java.lang.Class<com.google.firebase.ai.type.Candidate>;
						public getSafetyRatings(): java.util.List<com.google.firebase.ai.type.SafetyRating>;
						public getFinishReason(): com.google.firebase.ai.type.FinishReason;
						public getGroundingMetadata(): com.google.firebase.ai.type.GroundingMetadata;
						public getCitationMetadata(): com.google.firebase.ai.type.CitationMetadata;
						public constructor(content: com.google.firebase.ai.type.Content, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating>, citationMetadata: com.google.firebase.ai.type.CitationMetadata, finishReason: com.google.firebase.ai.type.FinishReason, finishMessage: string, groundingMetadata: com.google.firebase.ai.type.GroundingMetadata, urlContextMetadata: com.google.firebase.ai.type.UrlContextMetadata);
						public getUrlContextMetadata(): com.google.firebase.ai.type.UrlContextMetadata;
						public getFinishMessage(): string;
						public getContent(): com.google.firebase.ai.type.Content;
					}
					export module Candidate {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.Candidate.Companion>;
							public fromInterop(candidate: com.google.firebase.ai.ondevice.interop.Candidate): com.google.firebase.ai.type.Candidate;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Candidate.Internal>;
							public constructor();
							public getFinishMessage(): string;
							public hashCode(): number;
							public component4(): java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>;
							public component6(): com.google.firebase.ai.type.GroundingMetadata.Internal;
							public toString(): string;
							public component7(): com.google.firebase.ai.type.UrlContextMetadata.Internal;
							public component3(): string;
							public component5(): com.google.firebase.ai.type.CitationMetadata.Internal;
							public getGroundingMetadata(): com.google.firebase.ai.type.GroundingMetadata.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Candidate;
							public copy(content: com.google.firebase.ai.type.Content.Internal, finishReason: com.google.firebase.ai.type.FinishReason.Internal, finishMessage: string, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>, citationMetadata: com.google.firebase.ai.type.CitationMetadata.Internal, groundingMetadata: com.google.firebase.ai.type.GroundingMetadata.Internal, urlContextMetadata: com.google.firebase.ai.type.UrlContextMetadata.Internal): com.google.firebase.ai.type.Candidate.Internal;
							public getCitationMetadata(): com.google.firebase.ai.type.CitationMetadata.Internal;
							public constructor(content: com.google.firebase.ai.type.Content.Internal, finishReason: com.google.firebase.ai.type.FinishReason.Internal, finishMessage: string, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>, citationMetadata: com.google.firebase.ai.type.CitationMetadata.Internal, groundingMetadata: com.google.firebase.ai.type.GroundingMetadata.Internal, urlContextMetadata: com.google.firebase.ai.type.UrlContextMetadata.Internal);
							public getUrlContextMetadata(): com.google.firebase.ai.type.UrlContextMetadata.Internal;
							public equals(other: any): boolean;
							public getContent(): com.google.firebase.ai.type.Content.Internal;
							public component2(): com.google.firebase.ai.type.FinishReason.Internal;
							public getFinishReason(): com.google.firebase.ai.type.FinishReason.Internal;
							public component1(): com.google.firebase.ai.type.Content.Internal;
							public getSafetyRatings(): java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Citation {
						public static class: java.lang.Class<com.google.firebase.ai.type.Citation>;
						public constructor(title: string, startIndex: number, endIndex: number, uri: string, license: string, publicationDate: java.util.Calendar);
						public getUri(): string;
						public getStartIndex(): number;
						public getLicense(): string;
						public getPublicationDate(): java.util.Calendar;
						public getTitle(): string;
						public getEndIndex(): number;
					}
					export module Citation {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Citation.Internal>;
							public constructor(title: string, startIndex: number, endIndex: number, uri: string, license: string, publicationDate: com.google.firebase.ai.type.Citation.Internal.Date);
							public hashCode(): number;
							public component2(): number;
							public component6(): com.google.firebase.ai.type.Citation.Internal.Date;
							public copy(title: string, startIndex: number, endIndex: number, uri: string, license: string, publicationDate: com.google.firebase.ai.type.Citation.Internal.Date): com.google.firebase.ai.type.Citation.Internal;
							public getTitle(): string;
							public getPublicationDate(): com.google.firebase.ai.type.Citation.Internal.Date;
							public toString(): string;
							public getUri(): string;
							public component5(): string;
							public getStartIndex(): number;
							public component1(): string;
							public getEndIndex(): number;
							public getLicense(): string;
							public equals(other: any): boolean;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(calendar: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.Citation;
							public component3(): number;
							public component4(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class CitationMetadata {
						public static class: java.lang.Class<com.google.firebase.ai.type.CitationMetadata>;
						public constructor(citations: java.util.List<com.google.firebase.ai.type.Citation>);
						public getCitations(): java.util.List<com.google.firebase.ai.type.Citation>;
					}
					export module CitationMetadata {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.CitationMetadata.Internal>;
							public component1(): java.util.List<com.google.firebase.ai.type.Citation.Internal>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.CitationMetadata;
							public hashCode(): number;
							public constructor(citationSources: java.util.List<com.google.firebase.ai.type.Citation.Internal>);
							public copy(citationSources: java.util.List<com.google.firebase.ai.type.Citation.Internal>): com.google.firebase.ai.type.CitationMetadata.Internal;
							public equals(other: any): boolean;
							public getCitationSources(): java.util.List<com.google.firebase.ai.type.Citation.Internal>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class CodeExecutionResultPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.CodeExecutionResultPart>;
						public executionSucceeded(): boolean;
						public getThoughtSignature(): string;
						public static createWithThinking(outcome: string, output: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.CodeExecutionResultPart;
						public getOutput(): string;
						public isThought(): boolean;
						/** @deprecated */
						public constructor(outcome: string, output: string);
						public constructor(outcome: string, output: string, isThought: boolean, thoughtSignature: string);
						public getOutcome(): string;
					}
					export module CodeExecutionResultPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.CodeExecutionResultPart.Companion>;
							public createWithThinking(outcome: string, output: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.CodeExecutionResultPart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.CodeExecutionResultPart.Internal>;
							public copy(codeExecutionResult: com.google.firebase.ai.type.CodeExecutionResultPart.Internal.CodeExecutionResult, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.CodeExecutionResultPart.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(codeExecutionResult: com.google.firebase.ai.type.CodeExecutionResultPart.Internal.CodeExecutionResult, thought: java.lang.Boolean, thoughtSignature: string);
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getThought(): java.lang.Boolean;
							public component3(): string;
							public getCodeExecutionResult(): com.google.firebase.ai.type.CodeExecutionResultPart.Internal.CodeExecutionResult;
							public component1(): com.google.firebase.ai.type.CodeExecutionResultPart.Internal.CodeExecutionResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Content {
						public static class: java.lang.Class<com.google.firebase.ai.type.Content>;
						public copy(role: string, parts: java.util.List<any>): com.google.firebase.ai.type.Content;
						public constructor(role: string, parts: java.util.List<any>);
						public getParts(): java.util.List<com.google.firebase.ai.type.Part>;
						public toTemplateInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Content.Internal;
						public constructor(parts: java.util.List<any>);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Content.Internal;
						public getRole(): string;
					}
					export module Content {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.Content.Builder>;
							public role: string;
							public parts: java.util.List<com.google.firebase.ai.type.Part>;
							public constructor();
							public setRole($this$setRole_u24lambda_u240: string): com.google.firebase.ai.type.Content.Builder;
							public addImage(image: globalAndroid.graphics.Bitmap): com.google.firebase.ai.type.Content.Builder;
							public setParts($this$setParts_u24lambda_u241: java.util.List<com.google.firebase.ai.type.Part>): com.google.firebase.ai.type.Content.Builder;
							public build(): com.google.firebase.ai.type.Content;
							public addPart($this$part_u24lambda_u242: com.google.firebase.ai.type.Part): com.google.firebase.ai.type.Content.Builder;
							public addText(text: string): com.google.firebase.ai.type.Content.Builder;
							public addFileData(uri: string, mimeType: string): com.google.firebase.ai.type.Content.Builder;
							public addInlineData(bytes: androidNative.Array<number>, mimeType: string): com.google.firebase.ai.type.Content.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Content.Internal>;
							public constructor();
							public copy(role: string, parts: java.util.List<any>): com.google.firebase.ai.type.Content.Internal;
							public hashCode(): number;
							public constructor(role: string, parts: java.util.List<any>);
							public equals(other: any): boolean;
							public getRole(): string;
							public component2(): java.util.List<com.google.firebase.ai.type.InternalPart>;
							public getParts(): java.util.List<com.google.firebase.ai.type.InternalPart>;
							public toString(): string;
							public component1(): string;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Content;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ContentBlockedException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.ContentBlockedException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ContentModality {
						public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality>;
						public static UNSPECIFIED: com.google.firebase.ai.type.ContentModality;
						public static TEXT: com.google.firebase.ai.type.ContentModality;
						public static IMAGE: com.google.firebase.ai.type.ContentModality;
						public static VIDEO: com.google.firebase.ai.type.ContentModality;
						public static AUDIO: com.google.firebase.ai.type.ContentModality;
						public static DOCUMENT: com.google.firebase.ai.type.ContentModality;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module ContentModality {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality.Internal>;
							public static UNSPECIFIED: com.google.firebase.ai.type.ContentModality.Internal;
							public static TEXT: com.google.firebase.ai.type.ContentModality.Internal;
							public static IMAGE: com.google.firebase.ai.type.ContentModality.Internal;
							public static VIDEO: com.google.firebase.ai.type.ContentModality.Internal;
							public static AUDIO: com.google.firebase.ai.type.ContentModality.Internal;
							public static DOCUMENT: com.google.firebase.ai.type.ContentModality.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.ContentModality.Internal>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ContentModality;
							public static getEntries(): any;
							public static valueOf(value: string): com.google.firebase.ai.type.ContentModality.Internal;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.ContentModality.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.ContentModality.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.ContentModality.Internal.Serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.ContentModality.Internal): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.ContentModality.Internal;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.ContentModality.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ContextWindowCompressionConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.ContextWindowCompressionConfig>;
						public getTriggerTokens(): java.lang.Integer;
						public constructor(triggerTokens: java.lang.Integer, slidingWindow: com.google.firebase.ai.type.SlidingWindow);
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ContextWindowCompressionConfig.Internal;
						public getSlidingWindow(): com.google.firebase.ai.type.SlidingWindow;
					}
					export module ContextWindowCompressionConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ContextWindowCompressionConfig.Internal>;
							public constructor();
							public getSlidingWindow(): com.google.firebase.ai.type.SlidingWindow.Internal;
							public hashCode(): number;
							public component2(): com.google.firebase.ai.type.SlidingWindow.Internal;
							public equals(other: any): boolean;
							public getTriggerTokens(): java.lang.Integer;
							public toString(): string;
							public component1(): java.lang.Integer;
							public constructor(triggerTokens: java.lang.Integer, slidingWindow: com.google.firebase.ai.type.SlidingWindow.Internal);
							public copy(triggerTokens: java.lang.Integer, slidingWindow: com.google.firebase.ai.type.SlidingWindow.Internal): com.google.firebase.ai.type.ContextWindowCompressionConfig.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class CountTokensResponse {
						public static class: java.lang.Class<com.google.firebase.ai.type.CountTokensResponse>;
						/** @deprecated */
						public getTotalBillableCharacters(): java.lang.Integer;
						public constructor(totalTokens: number, totalBillableCharacters: java.lang.Integer, promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>);
						public getTotalTokens(): number;
						public component3(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						public component2(): java.lang.Integer;
						public getPromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						public component1(): number;
					}
					export module CountTokensResponse {
						export class Internal extends com.google.firebase.ai.type.Response {
							public static class: java.lang.Class<com.google.firebase.ai.type.CountTokensResponse.Internal>;
							public constructor();
							public hashCode(): number;
							public getTotalTokens(): java.lang.Integer;
							public toString(): string;
							public component1(): java.lang.Integer;
							public constructor(totalTokens: java.lang.Integer, totalBillableCharacters: java.lang.Integer, promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>);
							public copy(totalTokens: java.lang.Integer, totalBillableCharacters: java.lang.Integer, promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>): com.google.firebase.ai.type.CountTokensResponse.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.CountTokensResponse;
							public component3(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public getTotalBillableCharacters(): java.lang.Integer;
							public equals(other: any): boolean;
							public component2(): java.lang.Integer;
							public getPromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ExecutableCodePart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.ExecutableCodePart>;
						public getThoughtSignature(): string;
						public constructor(language: string, code: string, isThought: boolean, thoughtSignature: string);
						public isThought(): boolean;
						/** @deprecated */
						public constructor(language: string, code: string);
						public getLanguage(): string;
						public getCode(): string;
						public static createWithThinking(language: string, code: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.ExecutableCodePart;
					}
					export module ExecutableCodePart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ExecutableCodePart.Companion>;
							public createWithThinking(language: string, code: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.ExecutableCodePart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.ExecutableCodePart.Internal>;
							public copy(executableCode: com.google.firebase.ai.type.ExecutableCodePart.Internal.ExecutableCode, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.ExecutableCodePart.Internal;
							public getExecutableCode(): com.google.firebase.ai.type.ExecutableCodePart.Internal.ExecutableCode;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getThought(): java.lang.Boolean;
							public component1(): com.google.firebase.ai.type.ExecutableCodePart.Internal.ExecutableCode;
							public component3(): string;
							public constructor(executableCode: com.google.firebase.ai.type.ExecutableCodePart.Internal.ExecutableCode, thought: java.lang.Boolean, thoughtSignature: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FileDataPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.FileDataPart>;
						public getUri(): string;
						public getThoughtSignature(): string;
						public static createWithThinking(uri: string, mimeType: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FileDataPart;
						public getMimeType(): string;
						public isThought(): boolean;
						public constructor(uri: string, mimeType: string, isThought: boolean, thoughtSignature: string);
						public constructor(uri: string, mimeType: string);
					}
					export module FileDataPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FileDataPart.Companion>;
							public createWithThinking(uri: string, mimeType: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FileDataPart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.FileDataPart.Internal>;
							public copy(fileData: com.google.firebase.ai.type.FileDataPart.Internal.FileData, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.FileDataPart.Internal;
							public hashCode(): number;
							public constructor(fileData: com.google.firebase.ai.type.FileDataPart.Internal.FileData, thought: java.lang.Boolean, thoughtSignature: string);
							public equals(other: any): boolean;
							public component1(): com.google.firebase.ai.type.FileDataPart.Internal.FileData;
							public getFileData(): com.google.firebase.ai.type.FileDataPart.Internal.FileData;
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getThought(): java.lang.Boolean;
							public component3(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FinishReason {
						public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason>;
						public static UNKNOWN: com.google.firebase.ai.type.FinishReason;
						public static STOP: com.google.firebase.ai.type.FinishReason;
						public static MAX_TOKENS: com.google.firebase.ai.type.FinishReason;
						public static SAFETY: com.google.firebase.ai.type.FinishReason;
						public static RECITATION: com.google.firebase.ai.type.FinishReason;
						public static OTHER: com.google.firebase.ai.type.FinishReason;
						public static BLOCKLIST: com.google.firebase.ai.type.FinishReason;
						public static PROHIBITED_CONTENT: com.google.firebase.ai.type.FinishReason;
						public static SPII: com.google.firebase.ai.type.FinishReason;
						public static MALFORMED_FUNCTION_CALL: com.google.firebase.ai.type.FinishReason;
						public static IMAGE_SAFETY: com.google.firebase.ai.type.FinishReason;
						public static IMAGE_PROHIBITED_CONTENT: com.google.firebase.ai.type.FinishReason;
						public static IMAGE_OTHER: com.google.firebase.ai.type.FinishReason;
						public static NO_IMAGE: com.google.firebase.ai.type.FinishReason;
						public static IMAGE_RECITATION: com.google.firebase.ai.type.FinishReason;
						public static LANGUAGE: com.google.firebase.ai.type.FinishReason;
						public static UNEXPECTED_TOOL_CALL: com.google.firebase.ai.type.FinishReason;
						public static TOO_MANY_TOOL_CALLS: com.google.firebase.ai.type.FinishReason;
						public static MISSING_THOUGHT_SIGNATURE: com.google.firebase.ai.type.FinishReason;
						public static MALFORMED_RESPONSE: com.google.firebase.ai.type.FinishReason;
						public getOrdinal(): number;
						public getName(): string;
					}
					export module FinishReason {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason.Companion>;
							public fromInterop$com_google_firebase_ai_logic_firebase_ai(reason: com.google.firebase.ai.ondevice.interop.FinishReason): com.google.firebase.ai.type.FinishReason;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason.Internal>;
							public static UNKNOWN: com.google.firebase.ai.type.FinishReason.Internal;
							public static UNSPECIFIED: com.google.firebase.ai.type.FinishReason.Internal;
							public static STOP: com.google.firebase.ai.type.FinishReason.Internal;
							public static MAX_TOKENS: com.google.firebase.ai.type.FinishReason.Internal;
							public static SAFETY: com.google.firebase.ai.type.FinishReason.Internal;
							public static RECITATION: com.google.firebase.ai.type.FinishReason.Internal;
							public static OTHER: com.google.firebase.ai.type.FinishReason.Internal;
							public static BLOCKLIST: com.google.firebase.ai.type.FinishReason.Internal;
							public static PROHIBITED_CONTENT: com.google.firebase.ai.type.FinishReason.Internal;
							public static SPII: com.google.firebase.ai.type.FinishReason.Internal;
							public static MALFORMED_FUNCTION_CALL: com.google.firebase.ai.type.FinishReason.Internal;
							public static IMAGE_SAFETY: com.google.firebase.ai.type.FinishReason.Internal;
							public static IMAGE_PROHIBITED_CONTENT: com.google.firebase.ai.type.FinishReason.Internal;
							public static IMAGE_OTHER: com.google.firebase.ai.type.FinishReason.Internal;
							public static NO_IMAGE: com.google.firebase.ai.type.FinishReason.Internal;
							public static IMAGE_RECITATION: com.google.firebase.ai.type.FinishReason.Internal;
							public static LANGUAGE: com.google.firebase.ai.type.FinishReason.Internal;
							public static UNEXPECTED_TOOL_CALL: com.google.firebase.ai.type.FinishReason.Internal;
							public static TOO_MANY_TOOL_CALLS: com.google.firebase.ai.type.FinishReason.Internal;
							public static MISSING_THOUGHT_SIGNATURE: com.google.firebase.ai.type.FinishReason.Internal;
							public static MALFORMED_RESPONSE: com.google.firebase.ai.type.FinishReason.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.FinishReason.Internal>;
							public static valueOf(value: string): com.google.firebase.ai.type.FinishReason.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FinishReason;
							public static getEntries(): any;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.FinishReason.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.FinishReason.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.FinishReason.Internal.Serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.FinishReason.Internal): void;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.FinishReason.Internal;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.FinishReason.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export abstract class FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAIException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
					export module FirebaseAIException {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAIException.Companion>;
							public from$com_google_firebase_ai_logic_firebase_ai(cause: java.lang.Throwable): com.google.firebase.ai.type.FirebaseAIException;
							public catch$com_google_firebase_ai_logic_firebase_ai(this_: any): any;
							public catchAsync$com_google_firebase_ai_logic_firebase_ai(this_: any, this_: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FirebaseAIOnDeviceInvalidRequestException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAIOnDeviceInvalidRequestException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceInvalidRequestException);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FirebaseAIOnDeviceNotAvailableException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAIOnDeviceNotAvailableException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceNotAvailableException);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FirebaseAIOnDeviceUnknownException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAIOnDeviceUnknownException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: com.google.firebase.ai.ondevice.interop.FirebaseAIOnDeviceException);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FirebaseAutoFunctionException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.FirebaseAutoFunctionException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FunctionCallPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallPart>;
						public constructor(name: string, args: java.util.Map<string, any>, id: string, isThought: boolean, thoughtSignature: string);
						public getThoughtSignature(): string;
						public isThought(): boolean;
						public constructor(name: string, args: java.util.Map<string, any>, id: string);
						public constructor(name: string, args: java.util.Map<string, any>);
						public static createWithThinking(name: string, args: java.util.Map<string, any>, id: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionCallPart;
						public getId(): string;
						public getArgs(): java.util.Map<string, kotlinx.serialization.json.JsonElement>;
						public getName(): string;
					}
					export module FunctionCallPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallPart.Companion>;
							public createWithThinking(name: string, args: java.util.Map<string, any>, id: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionCallPart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallPart.Internal>;
							public constructor(functionCall: com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall, thought: java.lang.Boolean, thoughtSignature: string);
							public copy(functionCall: com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionCallPart.Internal;
							public hashCode(): number;
							public component1(): com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall;
							public equals(other: any): boolean;
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getFunctionCall(): com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall;
							public getThought(): java.lang.Boolean;
							public component3(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FunctionCallingConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallingConfig>;
						public constructor(mode: com.google.firebase.ai.type.FunctionCallingConfig.Mode, allowedFunctionNames: java.util.List<string>);
						public getAllowedFunctionNames$com_google_firebase_ai_logic_firebase_ai(): java.util.List<string>;
						public static auto(): com.google.firebase.ai.type.FunctionCallingConfig;
						public getMode$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FunctionCallingConfig.Mode;
						public static none(): com.google.firebase.ai.type.FunctionCallingConfig;
						public static any(): com.google.firebase.ai.type.FunctionCallingConfig;
						public static any(allowedFunctionNames: java.util.List<string>): com.google.firebase.ai.type.FunctionCallingConfig;
					}
					export module FunctionCallingConfig {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallingConfig.Companion>;
							public none(): com.google.firebase.ai.type.FunctionCallingConfig;
							public any(): com.google.firebase.ai.type.FunctionCallingConfig;
							public any(allowedFunctionNames: java.util.List<string>): com.google.firebase.ai.type.FunctionCallingConfig;
							public auto(): com.google.firebase.ai.type.FunctionCallingConfig;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallingConfig.Internal>;
							public component2(): java.util.List<string>;
							public getMode(): com.google.firebase.ai.type.FunctionCallingConfig.Internal.Mode;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(mode: com.google.firebase.ai.type.FunctionCallingConfig.Internal.Mode, allowedFunctionNames: java.util.List<string>);
							public getAllowedFunctionNames(): java.util.List<string>;
							public toString(): string;
							public component1(): com.google.firebase.ai.type.FunctionCallingConfig.Internal.Mode;
							public copy(mode: com.google.firebase.ai.type.FunctionCallingConfig.Internal.Mode, allowedFunctionNames: java.util.List<string>): com.google.firebase.ai.type.FunctionCallingConfig.Internal;
						}
						export class Mode {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionCallingConfig.Mode>;
							public static AUTO: com.google.firebase.ai.type.FunctionCallingConfig.Mode;
							public static ANY: com.google.firebase.ai.type.FunctionCallingConfig.Mode;
							public static NONE: com.google.firebase.ai.type.FunctionCallingConfig.Mode;
							public static getEntries(): any;
							public static values(): androidNative.Array<com.google.firebase.ai.type.FunctionCallingConfig.Mode>;
							public static valueOf(value: string): com.google.firebase.ai.type.FunctionCallingConfig.Mode;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FunctionDeclaration {
						public static class: java.lang.Class<com.google.firebase.ai.type.FunctionDeclaration>;
						public getSchema$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Schema;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FunctionDeclaration.Internal;
						public getOptionalParameters$com_google_firebase_ai_logic_firebase_ai(): java.util.List<string>;
						public constructor(name: string, description: string, parameters: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalParameters: java.util.List<string>);
						public getName$com_google_firebase_ai_logic_firebase_ai(): string;
						public getParameters$com_google_firebase_ai_logic_firebase_ai(): java.util.Map<string, com.google.firebase.ai.type.Schema>;
						public getDescription$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module FunctionDeclaration {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionDeclaration.Internal>;
							public component2(): string;
							public hashCode(): number;
							public component5(): com.google.firebase.ai.type.Schema.InternalJson;
							public component4(): com.google.firebase.ai.type.Schema.InternalJson;
							public toString(): string;
							public getDescription(): string;
							public copy(name: string, description: string, parameters: com.google.firebase.ai.type.Schema.InternalOpenAPI, parametersJsonSchema: com.google.firebase.ai.type.Schema.InternalJson, responseJsonSchema: com.google.firebase.ai.type.Schema.InternalJson): com.google.firebase.ai.type.FunctionDeclaration.Internal;
							public component1(): string;
							public constructor(name: string, description: string, parameters: com.google.firebase.ai.type.Schema.InternalOpenAPI, parametersJsonSchema: com.google.firebase.ai.type.Schema.InternalJson, responseJsonSchema: com.google.firebase.ai.type.Schema.InternalJson);
							public getParameters(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public getParametersJsonSchema(): com.google.firebase.ai.type.Schema.InternalJson;
							public getResponseJsonSchema(): com.google.firebase.ai.type.Schema.InternalJson;
							public component3(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public getName(): string;
							public equals(other: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class FunctionResponsePart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.FunctionResponsePart>;
						public getThoughtSignature(): string;
						public constructor(name: string, response: kotlinx.serialization.json.JsonObject, id: string, parts: java.util.List<any>);
						public static createWithThinking(name: string, response: kotlinx.serialization.json.JsonObject, id: string, parts: java.util.List<any>, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionResponsePart;
						public constructor(name: string, response: kotlinx.serialization.json.JsonObject);
						public getName(): string;
						public getParts(): java.util.List<com.google.firebase.ai.type.Part>;
						public normalizeAgainstCall$com_google_firebase_ai_logic_firebase_ai(call: com.google.firebase.ai.type.FunctionCallPart): com.google.firebase.ai.type.FunctionResponsePart;
						public isThought(): boolean;
						public constructor(name: string, response: kotlinx.serialization.json.JsonObject, id: string, parts: java.util.List<any>, isThought: boolean, thoughtSignature: string);
						public getId(): string;
						public toInternalFunctionResponse$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse;
						public constructor(name: string, response: kotlinx.serialization.json.JsonObject, id: string);
						public getResponse(): kotlinx.serialization.json.JsonObject;
					}
					export module FunctionResponsePart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionResponsePart.Companion>;
							public from(jsonObject: kotlinx.serialization.json.JsonObject, parts: java.util.List<any>): com.google.firebase.ai.type.FunctionResponsePart;
							public createWithThinking(name: string, response: kotlinx.serialization.json.JsonObject, id: string, parts: java.util.List<any>, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionResponsePart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.FunctionResponsePart.Internal>;
							public constructor(functionResponse: com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse, thought: java.lang.Boolean, thoughtSignature: string);
							public copy(functionResponse: com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.FunctionResponsePart.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getFunctionResponse(): com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse;
							public getThoughtSignature(): string;
							public component1(): com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getThought(): java.lang.Boolean;
							public component3(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GRpcErrorResponse extends com.google.firebase.ai.type.Response {
						public static class: java.lang.Class<com.google.firebase.ai.type.GRpcErrorResponse>;
						public equals(other: any): boolean;
						public copy(error: com.google.firebase.ai.type.GRpcErrorResponse.GRpcError): com.google.firebase.ai.type.GRpcErrorResponse;
						public component1(): com.google.firebase.ai.type.GRpcErrorResponse.GRpcError;
						public hashCode(): number;
						public getError(): com.google.firebase.ai.type.GRpcErrorResponse.GRpcError;
						public constructor(error: com.google.firebase.ai.type.GRpcErrorResponse.GRpcError);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GenerateContentResponse {
						public static class: java.lang.Class<com.google.firebase.ai.type.GenerateContentResponse>;
						public constructor(candidates: java.util.List<com.google.firebase.ai.type.Candidate>, inferenceSource: com.google.firebase.ai.InferenceSource, promptFeedback: com.google.firebase.ai.type.PromptFeedback, usageMetadata: com.google.firebase.ai.type.UsageMetadata, modelVersion: string);
						public getModelVersion(): string;
						public getCandidates(): java.util.List<com.google.firebase.ai.type.Candidate>;
						public getFunctionCalls(): java.util.List<com.google.firebase.ai.type.FunctionCallPart>;
						public getUsageMetadata(): com.google.firebase.ai.type.UsageMetadata;
						public getInlineDataParts(): java.util.List<com.google.firebase.ai.type.InlineDataPart>;
						public getPromptFeedback(): com.google.firebase.ai.type.PromptFeedback;
						public constructor(candidates: java.util.List<com.google.firebase.ai.type.Candidate>, promptFeedback: com.google.firebase.ai.type.PromptFeedback, usageMetadata: com.google.firebase.ai.type.UsageMetadata);
						public getText(): string;
						public getInferenceSource(): com.google.firebase.ai.InferenceSource;
						public getThoughtSummary(): string;
					}
					export module GenerateContentResponse {
						export class Internal extends com.google.firebase.ai.type.Response {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerateContentResponse.Internal>;
							public constructor();
							public getCandidates(): java.util.List<com.google.firebase.ai.type.Candidate.Internal>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GenerateContentResponse;
							public hashCode(): number;
							public component3(): com.google.firebase.ai.type.UsageMetadata.Internal;
							public constructor(candidates: java.util.List<com.google.firebase.ai.type.Candidate.Internal>, promptFeedback: com.google.firebase.ai.type.PromptFeedback.Internal, usageMetadata: com.google.firebase.ai.type.UsageMetadata.Internal, modelVersion: string);
							public component1(): java.util.List<com.google.firebase.ai.type.Candidate.Internal>;
							public toString(): string;
							public component2(): com.google.firebase.ai.type.PromptFeedback.Internal;
							public getPromptFeedback(): com.google.firebase.ai.type.PromptFeedback.Internal;
							public getUsageMetadata(): com.google.firebase.ai.type.UsageMetadata.Internal;
							public equals(other: any): boolean;
							public getModelVersion(): string;
							public component4(): string;
							public copy(candidates: java.util.List<com.google.firebase.ai.type.Candidate.Internal>, promptFeedback: com.google.firebase.ai.type.PromptFeedback.Internal, usageMetadata: com.google.firebase.ai.type.UsageMetadata.Internal, modelVersion: string): com.google.firebase.ai.type.GenerateContentResponse.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GenerateObjectResponse<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.ai.type.GenerateObjectResponse<any>>;
						public constructor(response: com.google.firebase.ai.type.GenerateContentResponse, schema: com.google.firebase.ai.type.JsonSchema<T>, instances: java.util.List<T>);
						public getObject(it: number): T;
						public getResponse(): com.google.firebase.ai.type.GenerateContentResponse;
						public getInstances$com_google_firebase_ai_logic_firebase_ai(): java.util.List<T>;
						public setInstances$com_google_firebase_ai_logic_firebase_ai(value: java.util.List<T>): void;
						public getSchema$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.JsonSchema<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GenerationConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.GenerationConfig>;
						public getFrequencyPenalty$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getSpeechConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SpeechConfig;
						public getStopSequences$com_google_firebase_ai_logic_firebase_ai(): java.util.List<string>;
						public getPresencePenalty$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getResponseSchema$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Schema;
						public static builder(): com.google.firebase.ai.type.GenerationConfig.Builder;
						public getResponseJsonSchema$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.JsonSchema<any>;
						public getThinkingConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ThinkingConfig;
						public getMaxOutputTokens$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GenerationConfig.Internal;
						public getTopK$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public getResponseMimeType$com_google_firebase_ai_logic_firebase_ai(): string;
						public getResponseModalities$com_google_firebase_ai_logic_firebase_ai(): java.util.List<com.google.firebase.ai.type.ResponseModality>;
						public getTemperature$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getTopP$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getImageConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ImageConfig;
						public getCandidateCount$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public toBuilder(): com.google.firebase.ai.type.GenerationConfig.Builder;
					}
					export module GenerationConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerationConfig.Builder>;
							public temperature: java.lang.Float;
							public topK: java.lang.Integer;
							public topP: java.lang.Float;
							public candidateCount: java.lang.Integer;
							public maxOutputTokens: java.lang.Integer;
							public presencePenalty: java.lang.Float;
							public frequencyPenalty: java.lang.Float;
							public stopSequences: java.util.List<string>;
							public responseMimeType: string;
							public responseSchema: com.google.firebase.ai.type.Schema;
							public responseJsonSchema: com.google.firebase.ai.type.JsonSchema<any>;
							public responseModalities: java.util.List<com.google.firebase.ai.type.ResponseModality>;
							public thinkingConfig: com.google.firebase.ai.type.ThinkingConfig;
							public imageConfig: com.google.firebase.ai.type.ImageConfig;
							public speechConfig: com.google.firebase.ai.type.SpeechConfig;
							public constructor();
							public setMaxOutputTokens($this$setMaxOutputTokens_u24lambda_u244: java.lang.Integer): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setResponseModalities($this$setResponseModalities_u24lambda_u2411: java.util.List<com.google.firebase.ai.type.ResponseModality>): com.google.firebase.ai.type.GenerationConfig.Builder;
							public constructor(
								temperature: java.lang.Float,
								topK: java.lang.Integer,
								topP: java.lang.Float,
								candidateCount: java.lang.Integer,
								maxOutputTokens: java.lang.Integer,
								presencePenalty: java.lang.Float,
								frequencyPenalty: java.lang.Float,
								stopSequences: java.util.List<string>,
								responseMimeType: string,
								responseSchema: com.google.firebase.ai.type.Schema,
								responseJsonSchema: com.google.firebase.ai.type.JsonSchema<any>,
								responseModalities: java.util.List<com.google.firebase.ai.type.ResponseModality>,
								thinkingConfig: com.google.firebase.ai.type.ThinkingConfig,
								imageConfig: com.google.firebase.ai.type.ImageConfig,
								speechConfig: com.google.firebase.ai.type.SpeechConfig
							);
							public setCandidateCount($this$setCandidateCount_u24lambda_u243: java.lang.Integer): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setSpeechConfig($this$setSpeechConfig_u24lambda_u2414: com.google.firebase.ai.type.SpeechConfig): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setResponseSchemaJson($this$setResponseSchemaJson_u24lambda_u2410: com.google.firebase.ai.type.JsonSchema<any>): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setResponseMimeType($this$setResponseMimeType_u24lambda_u248: string): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setThinkingConfig($this$setThinkingConfig_u24lambda_u2412: com.google.firebase.ai.type.ThinkingConfig): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setTopK($this$setTopK_u24lambda_u241: java.lang.Integer): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setFrequencyPenalty($this$setFrequencyPenalty_u24lambda_u246: java.lang.Float): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setStopSequences($this$setStopSequences_u24lambda_u247: java.util.List<string>): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setTopP($this$setTopP_u24lambda_u242: java.lang.Float): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setResponseSchema($this$setResponseSchema_u24lambda_u249: com.google.firebase.ai.type.Schema): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setImageConfig($this$setImageConfig_u24lambda_u2413: com.google.firebase.ai.type.ImageConfig): com.google.firebase.ai.type.GenerationConfig.Builder;
							public setTemperature($this$setTemperature_u24lambda_u240: java.lang.Float): com.google.firebase.ai.type.GenerationConfig.Builder;
							public build(): com.google.firebase.ai.type.GenerationConfig;
							public setPresencePenalty($this$setPresencePenalty_u24lambda_u245: java.lang.Float): com.google.firebase.ai.type.GenerationConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerationConfig.Companion>;
							public builder(): com.google.firebase.ai.type.GenerationConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerationConfig.Internal>;
							public component7(): string;
							public component11(): com.google.firebase.ai.type.Schema.InternalJson;
							public hashCode(): number;
							public component14(): com.google.firebase.ai.type.ImageConfig.Internal;
							public component5(): java.lang.Integer;
							public toString(): string;
							public component2(): java.lang.Float;
							public component8(): java.lang.Float;
							public getResponseSchema(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public getPresencePenalty(): java.lang.Float;
							public getSpeechConfig(): com.google.firebase.ai.type.SpeechConfig.Internal;
							public component12(): java.util.List<string>;
							public component13(): com.google.firebase.ai.type.ThinkingConfig.Internal;
							public component10(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public equals(other: any): boolean;
							public component1(): java.lang.Float;
							public component9(): java.lang.Float;
							public component15(): com.google.firebase.ai.type.SpeechConfig.Internal;
							public getResponseModalities(): java.util.List<string>;
							public component3(): java.lang.Integer;
							public copy(
								temperature: java.lang.Float,
								topP: java.lang.Float,
								topK: java.lang.Integer,
								candidateCount: java.lang.Integer,
								maxOutputTokens: java.lang.Integer,
								stopSequences: java.util.List<string>,
								responseMimeType: string,
								presencePenalty: java.lang.Float,
								frequencyPenalty: java.lang.Float,
								responseSchema: com.google.firebase.ai.type.Schema.InternalOpenAPI,
								responseJsonSchema: com.google.firebase.ai.type.Schema.InternalJson,
								responseModalities: java.util.List<string>,
								thinkingConfig: com.google.firebase.ai.type.ThinkingConfig.Internal,
								imageConfig: com.google.firebase.ai.type.ImageConfig.Internal,
								speechConfig: com.google.firebase.ai.type.SpeechConfig.Internal
							): com.google.firebase.ai.type.GenerationConfig.Internal;
							public getMaxOutputTokens(): java.lang.Integer;
							public getTopK(): java.lang.Integer;
							public getTemperature(): java.lang.Float;
							public getResponseJsonSchema(): com.google.firebase.ai.type.Schema.InternalJson;
							public getTopP(): java.lang.Float;
							public getCandidateCount(): java.lang.Integer;
							public getResponseMimeType(): string;
							public component4(): java.lang.Integer;
							public component6(): java.util.List<string>;
							public getStopSequences(): java.util.List<string>;
							public getFrequencyPenalty(): java.lang.Float;
							public constructor(
								temperature: java.lang.Float,
								topP: java.lang.Float,
								topK: java.lang.Integer,
								candidateCount: java.lang.Integer,
								maxOutputTokens: java.lang.Integer,
								stopSequences: java.util.List<string>,
								responseMimeType: string,
								presencePenalty: java.lang.Float,
								frequencyPenalty: java.lang.Float,
								responseSchema: com.google.firebase.ai.type.Schema.InternalOpenAPI,
								responseJsonSchema: com.google.firebase.ai.type.Schema.InternalJson,
								responseModalities: java.util.List<string>,
								thinkingConfig: com.google.firebase.ai.type.ThinkingConfig.Internal,
								imageConfig: com.google.firebase.ai.type.ImageConfig.Internal,
								speechConfig: com.google.firebase.ai.type.SpeechConfig.Internal
							);
							public getThinkingConfig(): com.google.firebase.ai.type.ThinkingConfig.Internal;
							public getImageConfig(): com.google.firebase.ai.type.ImageConfig.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GenerativeBackend {
						public static class: java.lang.Class<com.google.firebase.ai.type.GenerativeBackend>;
						public static googleAI(): com.google.firebase.ai.type.GenerativeBackend;
						public equals(other: any): boolean;
						public static agentPlatform(location: string): com.google.firebase.ai.type.GenerativeBackend;
						public getBackend$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GenerativeBackendEnum;
						public hashCode(): number;
						/** @deprecated */
						public static vertexAI(location: string): com.google.firebase.ai.type.GenerativeBackend;
						public static agentPlatform(): com.google.firebase.ai.type.GenerativeBackend;
						public constructor(location: string, backend: com.google.firebase.ai.type.GenerativeBackendEnum);
						/** @deprecated */
						public static vertexAI(): com.google.firebase.ai.type.GenerativeBackend;
						public getLocation$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module GenerativeBackend {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerativeBackend.Companion>;
							public googleAI(): com.google.firebase.ai.type.GenerativeBackend;
							/** @deprecated */
							public vertexAI(location: string): com.google.firebase.ai.type.GenerativeBackend;
							public agentPlatform(location: string): com.google.firebase.ai.type.GenerativeBackend;
							/** @deprecated */
							public vertexAI(): com.google.firebase.ai.type.GenerativeBackend;
							public agentPlatform(): com.google.firebase.ai.type.GenerativeBackend;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.google.firebase.ai.type.GenerativeBackend.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GenerativeBackendEnum {
						public static class: java.lang.Class<com.google.firebase.ai.type.GenerativeBackendEnum>;
						public static GOOGLE_AI: com.google.firebase.ai.type.GenerativeBackendEnum;
						public static VERTEX_AI: com.google.firebase.ai.type.GenerativeBackendEnum;
						public static AGENT_PLATFORM: com.google.firebase.ai.type.GenerativeBackendEnum;
						public static getEntries(): any;
						public static valueOf(value: string): com.google.firebase.ai.type.GenerativeBackendEnum;
						public static values(): androidNative.Array<com.google.firebase.ai.type.GenerativeBackendEnum>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GoogleMaps {
						public static class: java.lang.Class<com.google.firebase.ai.type.GoogleMaps>;
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GoogleMaps.Internal;
					}
					export module GoogleMaps {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GoogleMaps.Internal>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GoogleMapsGroundingChunk {
						public static class: java.lang.Class<com.google.firebase.ai.type.GoogleMapsGroundingChunk>;
						public getUri(): string;
						public getPlaceId(): string;
						public constructor(uri: string, title: string, placeId: string);
						public getTitle(): string;
					}
					export module GoogleMapsGroundingChunk {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal>;
							public component2(): string;
							public toPublic(): com.google.firebase.ai.type.GoogleMapsGroundingChunk;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getTitle(): string;
							public toString(): string;
							public getUri(): string;
							public copy(uri: string, title: string, placeId: string): com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal;
							public component3(): string;
							public constructor(uri: string, title: string, placeId: string);
							public component1(): string;
							public getPlaceId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GoogleSearch {
						public static class: java.lang.Class<com.google.firebase.ai.type.GoogleSearch>;
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GoogleSearch.Internal;
					}
					export module GoogleSearch {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GoogleSearch.Internal>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GroundingAttribution {
						public static class: java.lang.Class<com.google.firebase.ai.type.GroundingAttribution>;
						public getSegment(): com.google.firebase.ai.type.Segment;
						public getConfidenceScore(): java.lang.Float;
						public constructor(segment: com.google.firebase.ai.type.Segment, confidenceScore: java.lang.Float);
					}
					export module GroundingAttribution {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GroundingAttribution.Internal>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(content: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.GroundingAttribution;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getSegment(): com.google.firebase.ai.type.Segment.Internal;
							public constructor(segment: com.google.firebase.ai.type.Segment.Internal, confidenceScore: java.lang.Float);
							public toString(): string;
							public component2(): java.lang.Float;
							public getConfidenceScore(): java.lang.Float;
							public component1(): com.google.firebase.ai.type.Segment.Internal;
							public copy(segment: com.google.firebase.ai.type.Segment.Internal, confidenceScore: java.lang.Float): com.google.firebase.ai.type.GroundingAttribution.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GroundingChunk {
						public static class: java.lang.Class<com.google.firebase.ai.type.GroundingChunk>;
						public getMaps(): com.google.firebase.ai.type.GoogleMapsGroundingChunk;
						public constructor();
						public constructor(web: com.google.firebase.ai.type.WebGroundingChunk, maps: com.google.firebase.ai.type.GoogleMapsGroundingChunk);
						public getWeb(): com.google.firebase.ai.type.WebGroundingChunk;
						public constructor(web: com.google.firebase.ai.type.WebGroundingChunk);
					}
					export module GroundingChunk {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GroundingChunk.Internal>;
							public getMaps(): com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal;
							public getWeb(): com.google.firebase.ai.type.WebGroundingChunk.Internal;
							public hashCode(): number;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GroundingChunk;
							public component2(): com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal;
							public equals(other: any): boolean;
							public copy(web: com.google.firebase.ai.type.WebGroundingChunk.Internal, maps: com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal): com.google.firebase.ai.type.GroundingChunk.Internal;
							public component1(): com.google.firebase.ai.type.WebGroundingChunk.Internal;
							public toString(): string;
							public constructor(web: com.google.firebase.ai.type.WebGroundingChunk.Internal, maps: com.google.firebase.ai.type.GoogleMapsGroundingChunk.Internal);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GroundingMetadata {
						public static class: java.lang.Class<com.google.firebase.ai.type.GroundingMetadata>;
						/** @deprecated */
						public getGroundingAttribution(): java.util.List<com.google.firebase.ai.type.GroundingAttribution>;
						public getRetrievalQueries(): java.util.List<string>;
						public getSearchEntryPoint(): com.google.firebase.ai.type.SearchEntryPoint;
						public constructor(webSearchQueries: java.util.List<string>, searchEntryPoint: com.google.firebase.ai.type.SearchEntryPoint, retrievalQueries: java.util.List<string>, groundingAttribution: java.util.List<com.google.firebase.ai.type.GroundingAttribution>, groundingChunks: java.util.List<com.google.firebase.ai.type.GroundingChunk>, groundingSupports: java.util.List<com.google.firebase.ai.type.GroundingSupport>);
						public getGroundingChunks(): java.util.List<com.google.firebase.ai.type.GroundingChunk>;
						public getGroundingSupports(): java.util.List<com.google.firebase.ai.type.GroundingSupport>;
						public getWebSearchQueries(): java.util.List<string>;
					}
					export module GroundingMetadata {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GroundingMetadata.Internal>;
							public getGroundingSupports(): java.util.List<com.google.firebase.ai.type.GroundingSupport.Internal>;
							public component6(): java.util.List<com.google.firebase.ai.type.GroundingSupport.Internal>;
							public hashCode(): number;
							public component4(): java.util.List<com.google.firebase.ai.type.GroundingAttribution.Internal>;
							public toString(): string;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(it: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.GroundingMetadata;
							/** @deprecated */
							public getGroundingAttribution(): java.util.List<com.google.firebase.ai.type.GroundingAttribution.Internal>;
							public component1(): java.util.List<string>;
							public component3(): java.util.List<string>;
							public copy(webSearchQueries: java.util.List<string>, searchEntryPoint: com.google.firebase.ai.type.SearchEntryPoint.Internal, retrievalQueries: java.util.List<string>, groundingAttribution: java.util.List<com.google.firebase.ai.type.GroundingAttribution.Internal>, groundingChunks: java.util.List<com.google.firebase.ai.type.GroundingChunk.Internal>, groundingSupports: java.util.List<com.google.firebase.ai.type.GroundingSupport.Internal>): com.google.firebase.ai.type.GroundingMetadata.Internal;
							public getWebSearchQueries(): java.util.List<string>;
							public getGroundingChunks(): java.util.List<com.google.firebase.ai.type.GroundingChunk.Internal>;
							public component2(): com.google.firebase.ai.type.SearchEntryPoint.Internal;
							public component5(): java.util.List<com.google.firebase.ai.type.GroundingChunk.Internal>;
							public equals(other: any): boolean;
							public constructor(webSearchQueries: java.util.List<string>, searchEntryPoint: com.google.firebase.ai.type.SearchEntryPoint.Internal, retrievalQueries: java.util.List<string>, groundingAttribution: java.util.List<com.google.firebase.ai.type.GroundingAttribution.Internal>, groundingChunks: java.util.List<com.google.firebase.ai.type.GroundingChunk.Internal>, groundingSupports: java.util.List<com.google.firebase.ai.type.GroundingSupport.Internal>);
							public getSearchEntryPoint(): com.google.firebase.ai.type.SearchEntryPoint.Internal;
							public getRetrievalQueries(): java.util.List<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class GroundingSupport {
						public static class: java.lang.Class<com.google.firebase.ai.type.GroundingSupport>;
						public constructor(segment: com.google.firebase.ai.type.Segment, groundingChunkIndices: java.util.List<java.lang.Integer>);
						public getSegment(): com.google.firebase.ai.type.Segment;
						public getGroundingChunkIndices(): java.util.List<java.lang.Integer>;
					}
					export module GroundingSupport {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.GroundingSupport.Internal>;
							public component2(): java.util.List<java.lang.Integer>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(content: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.GroundingSupport;
							public getGroundingChunkIndices(): java.util.List<java.lang.Integer>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getSegment(): com.google.firebase.ai.type.Segment.Internal;
							public copy(segment: com.google.firebase.ai.type.Segment.Internal, groundingChunkIndices: java.util.List<java.lang.Integer>): com.google.firebase.ai.type.GroundingSupport.Internal;
							public constructor(segment: com.google.firebase.ai.type.Segment.Internal, groundingChunkIndices: java.util.List<java.lang.Integer>);
							public toString(): string;
							public component1(): com.google.firebase.ai.type.Segment.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class HarmBlockMethod {
						public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockMethod>;
						public static SEVERITY: com.google.firebase.ai.type.HarmBlockMethod;
						public static PROBABILITY: com.google.firebase.ai.type.HarmBlockMethod;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmBlockMethod.Internal;
					}
					export module HarmBlockMethod {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockMethod.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockMethod.Internal>;
							public static UNSPECIFIED: com.google.firebase.ai.type.HarmBlockMethod.Internal;
							public static SEVERITY: com.google.firebase.ai.type.HarmBlockMethod.Internal;
							public static PROBABILITY: com.google.firebase.ai.type.HarmBlockMethod.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.HarmBlockMethod.Internal>;
							public static valueOf(value: string): com.google.firebase.ai.type.HarmBlockMethod.Internal;
							public static getEntries(): any;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockMethod.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmBlockMethod.Internal>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class HarmBlockThreshold {
						public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockThreshold>;
						public static LOW_AND_ABOVE: com.google.firebase.ai.type.HarmBlockThreshold;
						public static MEDIUM_AND_ABOVE: com.google.firebase.ai.type.HarmBlockThreshold;
						public static ONLY_HIGH: com.google.firebase.ai.type.HarmBlockThreshold;
						public static NONE: com.google.firebase.ai.type.HarmBlockThreshold;
						public static OFF: com.google.firebase.ai.type.HarmBlockThreshold;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmBlockThreshold.Internal;
					}
					export module HarmBlockThreshold {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockThreshold.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockThreshold.Internal>;
							public static UNSPECIFIED: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static BLOCK_LOW_AND_ABOVE: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static BLOCK_MEDIUM_AND_ABOVE: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static BLOCK_ONLY_HIGH: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static BLOCK_NONE: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static OFF: com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static getEntries(): any;
							public static valueOf(value: string): com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.HarmBlockThreshold.Internal>;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmBlockThreshold.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmBlockThreshold.Internal>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class HarmCategory {
						public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory>;
						public static UNKNOWN: com.google.firebase.ai.type.HarmCategory;
						public static HARASSMENT: com.google.firebase.ai.type.HarmCategory;
						public static HATE_SPEECH: com.google.firebase.ai.type.HarmCategory;
						public static SEXUALLY_EXPLICIT: com.google.firebase.ai.type.HarmCategory;
						public static DANGEROUS_CONTENT: com.google.firebase.ai.type.HarmCategory;
						public static CIVIC_INTEGRITY: com.google.firebase.ai.type.HarmCategory;
						public static IMAGE_HATE: com.google.firebase.ai.type.HarmCategory;
						public static IMAGE_DANGEROUS_CONTENT: com.google.firebase.ai.type.HarmCategory;
						public static IMAGE_HARASSMENT: com.google.firebase.ai.type.HarmCategory;
						public static IMAGE_SEXUALLY_EXPLICIT: com.google.firebase.ai.type.HarmCategory;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmCategory.Internal;
					}
					export module HarmCategory {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory.Internal>;
							public static UNKNOWN: com.google.firebase.ai.type.HarmCategory.Internal;
							public static HARASSMENT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static HATE_SPEECH: com.google.firebase.ai.type.HarmCategory.Internal;
							public static SEXUALLY_EXPLICIT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static DANGEROUS_CONTENT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static CIVIC_INTEGRITY: com.google.firebase.ai.type.HarmCategory.Internal;
							public static IMAGE_HATE: com.google.firebase.ai.type.HarmCategory.Internal;
							public static IMAGE_DANGEROUS_CONTENT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static IMAGE_HARASSMENT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static IMAGE_SEXUALLY_EXPLICIT: com.google.firebase.ai.type.HarmCategory.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.HarmCategory.Internal>;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmCategory;
							public static valueOf(value: string): com.google.firebase.ai.type.HarmCategory.Internal;
							public static getEntries(): any;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmCategory.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmCategory.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.HarmCategory.Internal.Serializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.HarmCategory.Internal;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.HarmCategory.Internal): void;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmCategory.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class HarmProbability {
						public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability>;
						public static UNKNOWN: com.google.firebase.ai.type.HarmProbability;
						public static NEGLIGIBLE: com.google.firebase.ai.type.HarmProbability;
						public static LOW: com.google.firebase.ai.type.HarmProbability;
						public static MEDIUM: com.google.firebase.ai.type.HarmProbability;
						public static HIGH: com.google.firebase.ai.type.HarmProbability;
						public getOrdinal(): number;
					}
					export module HarmProbability {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability.Internal>;
							public static UNKNOWN: com.google.firebase.ai.type.HarmProbability.Internal;
							public static UNSPECIFIED: com.google.firebase.ai.type.HarmProbability.Internal;
							public static NEGLIGIBLE: com.google.firebase.ai.type.HarmProbability.Internal;
							public static LOW: com.google.firebase.ai.type.HarmProbability.Internal;
							public static MEDIUM: com.google.firebase.ai.type.HarmProbability.Internal;
							public static HIGH: com.google.firebase.ai.type.HarmProbability.Internal;
							public static getEntries(): any;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmProbability;
							public static valueOf(value: string): com.google.firebase.ai.type.HarmProbability.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.HarmProbability.Internal>;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmProbability.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmProbability.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.HarmProbability.Internal.Serializer;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.HarmProbability.Internal): void;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.HarmProbability.Internal;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmProbability.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class HarmSeverity {
						public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity>;
						public static UNKNOWN: com.google.firebase.ai.type.HarmSeverity;
						public static NEGLIGIBLE: com.google.firebase.ai.type.HarmSeverity;
						public static LOW: com.google.firebase.ai.type.HarmSeverity;
						public static MEDIUM: com.google.firebase.ai.type.HarmSeverity;
						public static HIGH: com.google.firebase.ai.type.HarmSeverity;
						public getOrdinal(): number;
					}
					export module HarmSeverity {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity.Internal>;
							public static UNKNOWN: com.google.firebase.ai.type.HarmSeverity.Internal;
							public static UNSPECIFIED: com.google.firebase.ai.type.HarmSeverity.Internal;
							public static NEGLIGIBLE: com.google.firebase.ai.type.HarmSeverity.Internal;
							public static LOW: com.google.firebase.ai.type.HarmSeverity.Internal;
							public static MEDIUM: com.google.firebase.ai.type.HarmSeverity.Internal;
							public static HIGH: com.google.firebase.ai.type.HarmSeverity.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmSeverity;
							public static getEntries(): any;
							public static values(): androidNative.Array<com.google.firebase.ai.type.HarmSeverity.Internal>;
							public static valueOf(value: string): com.google.firebase.ai.type.HarmSeverity.Internal;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmSeverity.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.HarmSeverity.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.HarmSeverity.Internal.Serializer;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.HarmSeverity.Internal;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.HarmSeverity.Internal): void;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.HarmSeverity.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ImageConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.ImageConfig>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ImageConfig.Internal;
						public static builder(): com.google.firebase.ai.type.ImageConfig.Builder;
						public getAspectRatio$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.AspectRatio;
						public getImageSize$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ImageSize;
					}
					export module ImageConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.ImageConfig.Builder>;
							public aspectRatio: com.google.firebase.ai.type.AspectRatio;
							public imageSize: com.google.firebase.ai.type.ImageSize;
							public constructor();
							public build(): com.google.firebase.ai.type.ImageConfig;
							public setImageSize($this$setImageSize_u24lambda_u241: com.google.firebase.ai.type.ImageSize): com.google.firebase.ai.type.ImageConfig.Builder;
							public setAspectRatio($this$setAspectRatio_u24lambda_u240: com.google.firebase.ai.type.AspectRatio): com.google.firebase.ai.type.ImageConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ImageConfig.Companion>;
							public builder(): com.google.firebase.ai.type.ImageConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ImageConfig.Internal>;
							public constructor();
							public getImageSize(): string;
							public component2(): string;
							public hashCode(): number;
							public equals(other: any): boolean;
							public toString(): string;
							public copy(aspectRatio: string, imageSize: string): com.google.firebase.ai.type.ImageConfig.Internal;
							public constructor(aspectRatio: string, imageSize: string);
							public getAspectRatio(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ImagePart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.ImagePart>;
						public getDisplayName(): string;
						public getThoughtSignature(): string;
						public constructor(image: globalAndroid.graphics.Bitmap, displayName: string);
						public getImage(): globalAndroid.graphics.Bitmap;
						public isThought(): boolean;
						public constructor(image: globalAndroid.graphics.Bitmap, displayName: string, isThought: boolean, thoughtSignature: string);
						public static createWithThinking(image: globalAndroid.graphics.Bitmap, displayName: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.ImagePart;
						public constructor(image: globalAndroid.graphics.Bitmap);
						public toInlineDataPart$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.InlineDataPart;
					}
					export module ImagePart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ImagePart.Companion>;
							public createWithThinking(image: globalAndroid.graphics.Bitmap, displayName: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.ImagePart;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ImageSize {
						public static class: java.lang.Class<com.google.firebase.ai.type.ImageSize>;
						public static SIZE_512: com.google.firebase.ai.type.ImageSize;
						public static SIZE_1K: com.google.firebase.ai.type.ImageSize;
						public static SIZE_2K: com.google.firebase.ai.type.ImageSize;
						public static SIZE_4K: com.google.firebase.ai.type.ImageSize;
						public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module ImageSize {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ImageSize.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InlineData {
						public static class: java.lang.Class<com.google.firebase.ai.type.InlineData>;
						public getDisplayName(): string;
						public getMimeType(): string;
						public constructor(data: androidNative.Array<number>, mimeType: string);
						public getData(): androidNative.Array<number>;
						public constructor(data: androidNative.Array<number>, mimeType: string, displayName: string);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.InlineData.Internal;
					}
					export module InlineData {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.InlineData.Internal>;
							public copy(mimeType: string, data: string, displayName: string): com.google.firebase.ai.type.InlineData.Internal;
							public constructor(mimeType: string, data: string, displayName: string);
							public component2(): string;
							public getData(): string;
							public getMimeType(): string;
							public hashCode(): number;
							public equals(other: any): boolean;
							public toString(): string;
							public component3(): string;
							public getDisplayName(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InlineDataPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.InlineDataPart>;
						public constructor(inlineData: androidNative.Array<number>, mimeType: string);
						public getDisplayName(): string;
						public constructor(inlineData: androidNative.Array<number>, mimeType: string, displayName: string);
						public getThoughtSignature(): string;
						public getInlineData(): androidNative.Array<number>;
						public getMimeType(): string;
						public constructor(inlineData: androidNative.Array<number>, mimeType: string, displayName: string, isThought: boolean, thoughtSignature: string);
						public isThought(): boolean;
						public static createWithThinking(inlineData: androidNative.Array<number>, mimeType: string, displayName: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.InlineDataPart;
					}
					export module InlineDataPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.InlineDataPart.Companion>;
							public createWithThinking(inlineData: androidNative.Array<number>, mimeType: string, displayName: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.InlineDataPart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.InlineDataPart.Internal>;
							public component1(): com.google.firebase.ai.type.InlineData.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getInlineData(): com.google.firebase.ai.type.InlineData.Internal;
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public constructor(inlineData: com.google.firebase.ai.type.InlineData.Internal, thought: java.lang.Boolean, thoughtSignature: string);
							public copy(inlineData: com.google.firebase.ai.type.InlineData.Internal, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.InlineDataPart.Internal;
							public getThought(): java.lang.Boolean;
							public component3(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InternalLiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.InternalLiveServerMessage>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.InternalLiveServerMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { toPublic(): com.google.firebase.ai.type.LiveServerMessage; '<clinit>'(): void });
						public constructor();
						public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
					}
					export module InternalLiveServerMessage {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.InternalLiveServerMessage.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.InternalLiveServerMessage>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InternalPart {
						public static class: java.lang.Class<com.google.firebase.ai.type.InternalPart>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.InternalPart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { '<clinit>'(): void });
						public constructor();
					}
					export module InternalPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.InternalPart.Companion>;
							public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.InternalPart>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InvalidAPIKeyException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.InvalidAPIKeyException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InvalidLocationException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.InvalidLocationException>;
						public constructor(location: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class InvalidStateException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.InvalidStateException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class JsonSchema<T> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.ai.type.JsonSchema<any>>;
						public getMaxItems(): java.lang.Integer;
						public static numDouble(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string): com.google.firebase.ai.type.JsonSchema<any>;
						public static enumeration(values: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<string>;
						public static numLong(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static obj(properties: java.util.Map<any, any>, clazz: any): com.google.firebase.ai.type.JsonSchema<any>;
						public getMinItems(): java.lang.Integer;
						public static numDouble(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public static numDouble(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public getEnum(): java.util.List<string>;
						public static numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public static numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
						public static bool(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
						public getMaximum(): java.lang.Double;
						public static bool(): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
						public static numLong(): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static enumeration(values: java.util.List<any>, clazz: any, description: string): com.google.firebase.ai.type.JsonSchema<any>;
						public static obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string): com.google.firebase.ai.type.JsonSchema<any>;
						public static string(description: string): com.google.firebase.ai.type.JsonSchema<string>;
						public static obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>): com.google.firebase.ai.type.JsonSchema<any>;
						public getAnyOf(): java.util.List<com.google.firebase.ai.type.JsonSchema<any>>;
						public static string(): com.google.firebase.ai.type.JsonSchema<string>;
						public getProperties(): java.util.Map<string, com.google.firebase.ai.type.JsonSchema<any>>;
						public static obj(properties: java.util.Map<string, any>): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
						public toInternalJson$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Schema.InternalJson;
						public static numDouble(): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public static obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
						public static enumeration(values: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<string>;
						public getNullable(): java.lang.Boolean;
						public getDescription(): string;
						public static obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
						public static bool(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
						public constructor(type: string, clazz: any, description: string, format: string, nullable: java.lang.Boolean, enum_: java.util.List<string>, properties: java.util.Map<string, any>, required: java.util.List<string>, items: com.google.firebase.ai.type.JsonSchema<any>, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<any>);
						public getClazz(): any;
						public static numLong(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
						public getMinimum(): java.lang.Double;
						public static obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
						public static numFloat(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
						public static obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
						public static enumeration(values: java.util.List<string>, description: string): com.google.firebase.ai.type.JsonSchema<string>;
						public static string(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat, title: string): com.google.firebase.ai.type.JsonSchema<string>;
						public getType(): string;
						public getSerializer(): kotlinx.serialization.KSerializer<T>;
						public getItems(): com.google.firebase.ai.type.JsonSchema<any>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer): com.google.firebase.ai.type.JsonSchema<any>;
						public static numInt(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public static numInt(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public getRequired(): java.util.List<string>;
						public static numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
						public static obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
						public static string(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat): com.google.firebase.ai.type.JsonSchema<string>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>): com.google.firebase.ai.type.JsonSchema<any>;
						public static numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
						public getFormat(): string;
						public static numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public static numLong(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static anyOf(schemas: java.util.List<any>): com.google.firebase.ai.type.JsonSchema<string>;
						public static numInt(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public static enumeration(values: java.util.List<any>, clazz: any, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
						public static string(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<string>;
						public static numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static numInt(): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public static numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						public static numFloat(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
						public getTitle(): string;
						public static enumeration(values: java.util.List<any>, clazz: any, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
						public static enumeration(values: java.util.List<string>): com.google.firebase.ai.type.JsonSchema<string>;
						public static numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
						public static numFloat(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
						public static enumeration(values: java.util.List<any>, clazz: any): com.google.firebase.ai.type.JsonSchema<any>;
						public static bool(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
						public static array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string, minItems: java.lang.Integer): com.google.firebase.ai.type.JsonSchema<any>;
						public static numFloat(): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
					}
					export module JsonSchema {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.JsonSchema.Companion>;
							public numFloat(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public numInt(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public enumeration(values: java.util.List<string>): com.google.firebase.ai.type.JsonSchema<string>;
							public obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>): com.google.firebase.ai.type.JsonSchema<any>;
							public bool(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
							public numInt(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
							public bool(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
							public numLong(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
							public numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public anyOf(schemas: java.util.List<any>): com.google.firebase.ai.type.JsonSchema<string>;
							public numFloat(): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
							public enumeration(values: java.util.List<any>, clazz: any, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
							public numFloat(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public obj(properties: java.util.Map<any, any>, clazz: any): com.google.firebase.ai.type.JsonSchema<any>;
							public enumeration(values: java.util.List<any>, clazz: any): com.google.firebase.ai.type.JsonSchema<any>;
							public numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public string(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat): com.google.firebase.ai.type.JsonSchema<string>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string, minItems: java.lang.Integer): com.google.firebase.ai.type.JsonSchema<any>;
							public string(): com.google.firebase.ai.type.JsonSchema<string>;
							public numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public bool(): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
							public obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
							public obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
							public numDouble(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public numLong(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
							public obj(properties: java.util.Map<string, any>): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
							public enumeration(values: java.util.List<any>, clazz: any, description: string): com.google.firebase.ai.type.JsonSchema<any>;
							public enumeration(values: java.util.List<string>, description: string): com.google.firebase.ai.type.JsonSchema<string>;
							public enumeration(values: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<string>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer): com.google.firebase.ai.type.JsonSchema<any>;
							public numDouble(): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
							public numFloat(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Float>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>): com.google.firebase.ai.type.JsonSchema<any>;
							public numLong(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
							public string(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<string>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string): com.google.firebase.ai.type.JsonSchema<any>;
							public numDouble(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public enumeration(values: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<string>;
							public numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public string(description: string): com.google.firebase.ai.type.JsonSchema<string>;
							public numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
							public obj(properties: java.util.Map<string, any>, optionalProperties: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<kotlinx.serialization.json.JsonObject>;
							public numInt(description: string): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string): com.google.firebase.ai.type.JsonSchema<any>;
							public string(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat, title: string): com.google.firebase.ai.type.JsonSchema<string>;
							public numDouble(description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public array(items: com.google.firebase.ai.type.JsonSchema<any>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
							public numInt(): com.google.firebase.ai.type.JsonSchema<java.lang.Integer>;
							public numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Double>;
							public numLong(): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
							public bool(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<java.lang.Boolean>;
							public obj(properties: java.util.Map<any, any>, clazz: any, optionalProperties: java.util.List<any>, description: string, nullable: boolean): com.google.firebase.ai.type.JsonSchema<any>;
							public enumeration(values: java.util.List<any>, clazz: any, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.JsonSchema<any>;
							public numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.JsonSchema<java.lang.Long>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LatLng {
						public static class: java.lang.Class<com.google.firebase.ai.type.LatLng>;
						public getLatitude(): number;
						public getLongitude(): number;
						public component2(): number;
						public equals(other: any): boolean;
						public copy(latitude: number, longitude: number): com.google.firebase.ai.type.LatLng;
						public hashCode(): number;
						public constructor(latitude: number, longitude: number);
						public component1(): number;
						public toString(): string;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.LatLng.Internal;
					}
					export module LatLng {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LatLng.Internal>;
							public component1(): number;
							public constructor(latitude: number, longitude: number);
							public getLongitude(): number;
							public hashCode(): number;
							public component2(): number;
							public copy(latitude: number, longitude: number): com.google.firebase.ai.type.LatLng.Internal;
							public equals(other: any): boolean;
							public toPublic(): com.google.firebase.ai.type.LatLng;
							public toString(): string;
							public getLatitude(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveAudioConversationConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveAudioConversationConfig>;
						public getTranscriptHandler$com_google_firebase_ai_logic_firebase_ai(): any;
						public getFunctionCallHandler$com_google_firebase_ai_logic_firebase_ai(): any;
						public getEnableInterruptions$com_google_firebase_ai_logic_firebase_ai(): boolean;
						public getInitializationHandler$com_google_firebase_ai_logic_firebase_ai(): any;
						public getGoAwayHandler$com_google_firebase_ai_logic_firebase_ai(): any;
					}
					export module LiveAudioConversationConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveAudioConversationConfig.Builder>;
							public functionCallHandler: any;
							public initializationHandler: any;
							public transcriptHandler: any;
							public goAwayHandler: any;
							public enableInterruptions: boolean;
							public constructor();
							public setFunctionCallHandler($this$setFunctionCallHandler_u24lambda_u240: any): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
							public setInitializationHandler($this$setInitializationHandler_u24lambda_u241: any): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
							public setEnableInterruptions($this$setEnableInterruptions_u24lambda_u244: boolean): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
							public setGoAwayHandler($this$setGoAwayHandler_u24lambda_u243: any): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
							public build(): com.google.firebase.ai.type.LiveAudioConversationConfig;
							public setTranscriptHandler($this$setTranscriptHandler_u24lambda_u242: any): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveAudioConversationConfig.Companion>;
							public builder(): com.google.firebase.ai.type.LiveAudioConversationConfig.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveClientSetupMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveClientSetupMessage>;
						public getSystemInstruction(): com.google.firebase.ai.type.Content.Internal;
						public getOutputAudioTranscription(): com.google.firebase.ai.type.AudioTranscriptionConfig.Internal;
						public getGenerationConfig(): com.google.firebase.ai.type.LiveGenerationConfig.Internal;
						public getSessionResumption(): com.google.firebase.ai.type.SessionResumptionConfig.Internal;
						public getContextWindowCompression(): com.google.firebase.ai.type.ContextWindowCompressionConfig.Internal;
						public getTools(): java.util.List<com.google.firebase.ai.type.Tool.Internal>;
						public getRealtimeInputConfig(): com.google.firebase.ai.type.RealtimeInputConfig.Internal;
						public toInternal(): com.google.firebase.ai.type.LiveClientSetupMessage.Internal;
						public getInputAudioTranscription(): com.google.firebase.ai.type.AudioTranscriptionConfig.Internal;
						public constructor(
							model: string,
							generationConfig: com.google.firebase.ai.type.LiveGenerationConfig.Internal,
							tools: java.util.List<com.google.firebase.ai.type.Tool.Internal>,
							systemInstruction: com.google.firebase.ai.type.Content.Internal,
							inputAudioTranscription: com.google.firebase.ai.type.AudioTranscriptionConfig.Internal,
							outputAudioTranscription: com.google.firebase.ai.type.AudioTranscriptionConfig.Internal,
							sessionResumption: com.google.firebase.ai.type.SessionResumptionConfig.Internal,
							contextWindowCompression: com.google.firebase.ai.type.ContextWindowCompressionConfig.Internal,
							realtimeInputConfig: com.google.firebase.ai.type.RealtimeInputConfig.Internal
						);
						public getModel(): string;
					}
					export module LiveClientSetupMessage {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveClientSetupMessage.Internal>;
							public constructor(setup: com.google.firebase.ai.type.LiveClientSetupMessage.Internal.LiveClientSetup);
							public getSetup(): com.google.firebase.ai.type.LiveClientSetupMessage.Internal.LiveClientSetup;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveGenerationConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveGenerationConfig>;
						public getFrequencyPenalty$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.LiveGenerationConfig.Internal;
						public getResponseModality$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ResponseModality;
						public getContextWindowCompression$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ContextWindowCompressionConfig;
						public getSpeechConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SpeechConfig;
						public getPresencePenalty$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getOutputAudioTranscription$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.AudioTranscriptionConfig;
						public getInputAudioTranscription$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.AudioTranscriptionConfig;
						public getMaxOutputTokens$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public getTopK$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
						public getRealtimeInputConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RealtimeInputConfig;
						public getTemperature$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
						public getTopP$com_google_firebase_ai_logic_firebase_ai(): java.lang.Float;
					}
					export module LiveGenerationConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveGenerationConfig.Builder>;
							public temperature: java.lang.Float;
							public topK: java.lang.Integer;
							public topP: java.lang.Float;
							public maxOutputTokens: java.lang.Integer;
							public presencePenalty: java.lang.Float;
							public frequencyPenalty: java.lang.Float;
							public responseModality: com.google.firebase.ai.type.ResponseModality;
							public speechConfig: com.google.firebase.ai.type.SpeechConfig;
							public inputAudioTranscription: com.google.firebase.ai.type.AudioTranscriptionConfig;
							public outputAudioTranscription: com.google.firebase.ai.type.AudioTranscriptionConfig;
							public contextWindowCompression: com.google.firebase.ai.type.ContextWindowCompressionConfig;
							public realtimeInputConfig: com.google.firebase.ai.type.RealtimeInputConfig;
							public constructor();
							public setContextWindowCompression($this$setContextWindowCompression_u24lambda_u2410: com.google.firebase.ai.type.ContextWindowCompressionConfig): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setTopK($this$setTopK_u24lambda_u241: java.lang.Integer): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setPresencePenalty($this$setPresencePenalty_u24lambda_u244: java.lang.Float): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setRealtimeInputConfig($this$setRealtimeInputConfig_u24lambda_u2411: com.google.firebase.ai.type.RealtimeInputConfig): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public build(): com.google.firebase.ai.type.LiveGenerationConfig;
							public setSpeechConfig($this$setSpeechConfig_u24lambda_u247: com.google.firebase.ai.type.SpeechConfig): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setFrequencyPenalty($this$setFrequencyPenalty_u24lambda_u245: java.lang.Float): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setResponseModality($this$setResponseModality_u24lambda_u246: com.google.firebase.ai.type.ResponseModality): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setMaxOutputTokens($this$setMaxOutputTokens_u24lambda_u243: java.lang.Integer): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setOutputAudioTranscription($this$setOutputAudioTranscription_u24lambda_u249: com.google.firebase.ai.type.AudioTranscriptionConfig): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setTopP($this$setTopP_u24lambda_u242: java.lang.Float): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setTemperature($this$setTemperature_u24lambda_u240: java.lang.Float): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
							public setInputAudioTranscription($this$setInputAudioTranscription_u24lambda_u248: com.google.firebase.ai.type.AudioTranscriptionConfig): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveGenerationConfig.Companion>;
							public builder(): com.google.firebase.ai.type.LiveGenerationConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveGenerationConfig.Internal>;
							public constructor(temperature: java.lang.Float, topP: java.lang.Float, topK: java.lang.Integer, maxOutputTokens: java.lang.Integer, presencePenalty: java.lang.Float, frequencyPenalty: java.lang.Float, speechConfig: com.google.firebase.ai.type.SpeechConfig.Internal, responseModalities: java.util.List<string>);
							public component1(): java.lang.Float;
							public component5(): java.lang.Float;
							public hashCode(): number;
							public getResponseModalities(): java.util.List<string>;
							public component3(): java.lang.Integer;
							public getMaxOutputTokens(): java.lang.Integer;
							public toString(): string;
							public getTopK(): java.lang.Integer;
							public component2(): java.lang.Float;
							public getTemperature(): java.lang.Float;
							public copy(temperature: java.lang.Float, topP: java.lang.Float, topK: java.lang.Integer, maxOutputTokens: java.lang.Integer, presencePenalty: java.lang.Float, frequencyPenalty: java.lang.Float, speechConfig: com.google.firebase.ai.type.SpeechConfig.Internal, responseModalities: java.util.List<string>): com.google.firebase.ai.type.LiveGenerationConfig.Internal;
							public getPresencePenalty(): java.lang.Float;
							public getSpeechConfig(): com.google.firebase.ai.type.SpeechConfig.Internal;
							public component8(): java.util.List<string>;
							public getTopP(): java.lang.Float;
							public component7(): com.google.firebase.ai.type.SpeechConfig.Internal;
							public equals(other: any): boolean;
							public component4(): java.lang.Integer;
							public component6(): java.lang.Float;
							public getFrequencyPenalty(): java.lang.Float;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerContent extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerContent>;
						public getOutputTranscription(): com.google.firebase.ai.type.Transcription;
						public getTurnComplete(): boolean;
						public getInterrupted(): boolean;
						public getGenerationComplete(): boolean;
						public getInputTranscription(): com.google.firebase.ai.type.Transcription;
						/** @deprecated */
						public constructor(content: com.google.firebase.ai.type.Content, interrupted: boolean, turnComplete: boolean, generationComplete: boolean, inputTranscription: com.google.firebase.ai.type.Transcription, outputTranscription: com.google.firebase.ai.type.Transcription);
						public getContent(): com.google.firebase.ai.type.Content;
					}
					export module LiveServerContent {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerContent.Internal>;
							public copy(modelTurn: com.google.firebase.ai.type.Content.Internal, interrupted: java.lang.Boolean, turnComplete: java.lang.Boolean, generationComplete: java.lang.Boolean, inputTranscription: com.google.firebase.ai.type.Transcription.Internal, outputTranscription: com.google.firebase.ai.type.Transcription.Internal): com.google.firebase.ai.type.LiveServerContent.Internal;
							public hashCode(): number;
							public constructor(modelTurn: com.google.firebase.ai.type.Content.Internal, interrupted: java.lang.Boolean, turnComplete: java.lang.Boolean, generationComplete: java.lang.Boolean, inputTranscription: com.google.firebase.ai.type.Transcription.Internal, outputTranscription: com.google.firebase.ai.type.Transcription.Internal);
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getInputTranscription(): com.google.firebase.ai.type.Transcription.Internal;
							public getOutputTranscription(): com.google.firebase.ai.type.Transcription.Internal;
							public component4(): java.lang.Boolean;
							public component5(): com.google.firebase.ai.type.Transcription.Internal;
							public getModelTurn(): com.google.firebase.ai.type.Content.Internal;
							public getTurnComplete(): java.lang.Boolean;
							public getGenerationComplete(): java.lang.Boolean;
							public component6(): com.google.firebase.ai.type.Transcription.Internal;
							public equals(other: any): boolean;
							public getInterrupted(): java.lang.Boolean;
							public component3(): java.lang.Boolean;
							public component1(): com.google.firebase.ai.type.Content.Internal;
						}
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerContent.InternalWrapper>;
							public constructor(serverContent: com.google.firebase.ai.type.LiveServerContent.Internal);
							public getServerContent(): com.google.firebase.ai.type.LiveServerContent.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public component1(): com.google.firebase.ai.type.LiveServerContent.Internal;
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public toString(): string;
							public toPublic(): com.google.firebase.ai.type.LiveServerContent;
							public copy(serverContent: com.google.firebase.ai.type.LiveServerContent.Internal): com.google.firebase.ai.type.LiveServerContent.InternalWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerGoAway extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerGoAway>;
						public 'getTimeLeft-FghU774'(): any;
					}
					export module LiveServerGoAway {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerGoAway.Internal>;
							public constructor();
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(timeLeft: string);
							public getTimeLeft(): string;
							public toString(): string;
							public copy(timeLeft: string): com.google.firebase.ai.type.LiveServerGoAway.Internal;
							public component1(): string;
						}
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerGoAway.InternalWrapper>;
							public component1(): com.google.firebase.ai.type.LiveServerGoAway.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(goAway: com.google.firebase.ai.type.LiveServerGoAway.Internal);
							public getGoAway(): com.google.firebase.ai.type.LiveServerGoAway.Internal;
							public copy(goAway: com.google.firebase.ai.type.LiveServerGoAway.Internal): com.google.firebase.ai.type.LiveServerGoAway.InternalWrapper;
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public toString(): string;
							public toPublic(): com.google.firebase.ai.type.LiveServerGoAway;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerMessage>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.LiveServerMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerMessageSerializer extends kotlinx.serialization.json.JsonContentPolymorphicSerializer<com.google.firebase.ai.type.InternalLiveServerMessage> {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerMessageSerializer>;
						public static INSTANCE: com.google.firebase.ai.type.LiveServerMessageSerializer;
						public selectDeserializer(this_: kotlinx.serialization.json.JsonElement): kotlinx.serialization.DeserializationStrategy<com.google.firebase.ai.type.InternalLiveServerMessage>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerSetupComplete extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerSetupComplete>;
						public constructor();
					}
					export module LiveServerSetupComplete {
						export class Internal extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerSetupComplete.Internal>;
							public toPublic(): com.google.firebase.ai.type.LiveServerSetupComplete;
							public hashCode(): number;
							public copy(setupComplete: kotlinx.serialization.json.JsonObject): com.google.firebase.ai.type.LiveServerSetupComplete.Internal;
							public getSetupComplete(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public constructor(setupComplete: kotlinx.serialization.json.JsonObject);
							public component1(): kotlinx.serialization.json.JsonObject;
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerToolCall extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCall>;
						public getFunctionCalls(): java.util.List<com.google.firebase.ai.type.FunctionCallPart>;
						public constructor(functionCalls: java.util.List<com.google.firebase.ai.type.FunctionCallPart>);
					}
					export module LiveServerToolCall {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCall.Internal>;
							public constructor();
							public hashCode(): number;
							public copy(functionCalls: java.util.List<com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall>): com.google.firebase.ai.type.LiveServerToolCall.Internal;
							public equals(other: any): boolean;
							public toString(): string;
							public getFunctionCalls(): java.util.List<com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall>;
							public component1(): java.util.List<com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall>;
							public constructor(functionCalls: java.util.List<com.google.firebase.ai.type.FunctionCallPart.Internal.FunctionCall>);
						}
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCall.InternalWrapper>;
							public toPublic(): com.google.firebase.ai.type.LiveServerToolCall;
							public getToolCall(): com.google.firebase.ai.type.LiveServerToolCall.Internal;
							public hashCode(): number;
							public constructor(toolCall: com.google.firebase.ai.type.LiveServerToolCall.Internal);
							public equals(other: any): boolean;
							public copy(toolCall: com.google.firebase.ai.type.LiveServerToolCall.Internal): com.google.firebase.ai.type.LiveServerToolCall.InternalWrapper;
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public component1(): com.google.firebase.ai.type.LiveServerToolCall.Internal;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerToolCallCancellation extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCallCancellation>;
						public constructor(functionIds: java.util.List<string>);
						public getFunctionIds(): java.util.List<string>;
					}
					export module LiveServerToolCallCancellation {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal>;
							public constructor();
							public constructor(functionIds: java.util.List<string>);
							public component1(): java.util.List<string>;
							public hashCode(): number;
							public copy(functionIds: java.util.List<string>): com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal;
							public equals(other: any): boolean;
							public toString(): string;
							public getFunctionIds(): java.util.List<string>;
						}
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerToolCallCancellation.InternalWrapper>;
							public getToolCallCancellation(): com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal;
							public toPublic(): com.google.firebase.ai.type.LiveServerToolCallCancellation;
							public component1(): com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(toolCallCancellation: com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal);
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public toString(): string;
							public copy(toolCallCancellation: com.google.firebase.ai.type.LiveServerToolCallCancellation.Internal): com.google.firebase.ai.type.LiveServerToolCallCancellation.InternalWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveServerUnknownMessage extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerUnknownMessage>;
					}
					export module LiveServerUnknownMessage {
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveServerUnknownMessage.InternalWrapper>;
							public constructor();
							public toPublic(): com.google.firebase.ai.type.LiveServerUnknownMessage;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(unused: any);
							public copy(unused: any): com.google.firebase.ai.type.LiveServerUnknownMessage.InternalWrapper;
							public getUnused(): any;
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public toString(): string;
							public component1(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveSession {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession>;
						public resumeSession(this_: com.google.firebase.ai.type.SessionResumptionConfig, this_: any): any;
						public resumeSession($completion: any): any;
						public stopAudioConversation(): void;
						public startAudioConversation(functionCallHandler: any, transcriptHandler: any, enableInterruptions: boolean, $completion: any): any;
						public startAudioConversation(functionCallHandler: any, enableInterruptions: boolean, $completion: any): any;
						public isClosed(): boolean;
						public send(content: com.google.firebase.ai.type.Content, $completion: any): any;
						/** @deprecated */
						public sendMediaStream(it: java.util.List<com.google.firebase.ai.type.MediaData>, item$iv$iv: any): any;
						public send(this_$iv: com.google.firebase.ai.type.Content, data$iv: boolean, this_: any): any;
						public constructor(session: io.ktor.client.plugins.websocket.DefaultClientWebSocketSession, blockingDispatcher: any, audioHelper: com.google.firebase.ai.type.AudioHelper, firebaseApp: com.google.firebase.FirebaseApp, connectionFactory: any, hasFunction: any, executeFunction: any);
						public send(text: string, turnComplete: boolean, $completion: any): any;
						public isAudioConversationActive(): boolean;
						public startAudioConversation(functionCallHandler: any, $completion: any): any;
						public startAudioConversation(this_: com.google.firebase.ai.type.LiveAudioConversationConfig, liveAudioConversationConfig: any): any;
						public sendStopActivityRealtime(this_$iv: any): any;
						public send(text: string, $completion: any): any;
						public startAudioConversation(functionCallHandler: any, transcriptHandler: any, goAwayHandler: any, enableInterruptions: boolean, $completion: any): any;
						public sendTextRealtime(this_$iv: string, data$iv: any): any;
						public sendStartActivityRealtime(this_$iv: any): any;
						public stopReceiving(): void;
						public receive(): kotlinx.coroutines.flow.Flow<com.google.firebase.ai.type.LiveServerMessage>;
						public close($completion: any): any;
						public sendAudioRealtime(this_$iv: com.google.firebase.ai.type.InlineData, data$iv: any): any;
						public sendVideoRealtime(this_$iv: com.google.firebase.ai.type.InlineData, data$iv: any): any;
						public sendFunctionResponse(it: java.util.List<com.google.firebase.ai.type.FunctionResponsePart>, item$iv$iv: any): any;
					}
					export module LiveSession {
						export class BidiGenerateContentClientContentSetup {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentClientContentSetup>;
							public getTurns(): java.util.List<com.google.firebase.ai.type.Content.Internal>;
							public toInternal(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentClientContentSetup.Internal;
							public getTurnComplete(): boolean;
							public constructor(turns: java.util.List<com.google.firebase.ai.type.Content.Internal>, turnComplete: boolean);
						}
						export module BidiGenerateContentClientContentSetup {
							export class Internal {
								public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentClientContentSetup.Internal>;
								public getClientContent(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentClientContentSetup.Internal.BidiGenerateContentClientContent;
								public constructor(clientContent: com.google.firebase.ai.type.LiveSession.BidiGenerateContentClientContentSetup.Internal.BidiGenerateContentClientContent);
							}
						}
						export class BidiGenerateContentRealtimeInputSetup {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup>;
							public getActivityStart(): boolean;
							public constructor();
							public getVideo(): com.google.firebase.ai.type.InlineData;
							public getText(): string;
							public getActivityEnd(): boolean;
							public getMediaChunks(): java.util.List<com.google.firebase.ai.type.InlineData>;
							public getAudio(): com.google.firebase.ai.type.InlineData;
							public toInternal(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.Internal;
							public constructor(mediaChunks: java.util.List<com.google.firebase.ai.type.InlineData>, audio: com.google.firebase.ai.type.InlineData, video: com.google.firebase.ai.type.InlineData, text: string, activityStart: boolean, activityEnd: boolean);
						}
						export module BidiGenerateContentRealtimeInputSetup {
							export class ActivityEnd {
								public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.ActivityEnd>;
								public constructor();
							}
							export class ActivityStart {
								public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.ActivityStart>;
								public constructor();
							}
							export class Internal {
								public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.Internal>;
								public constructor(realtimeInput: com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.Internal.BidiGenerateContentRealtimeInput);
								public getRealtimeInput(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentRealtimeInputSetup.Internal.BidiGenerateContentRealtimeInput;
							}
						}
						export class BidiGenerateContentToolResponseSetup {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup>;
							public constructor(functionResponses: java.util.List<com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse>);
							public getFunctionResponses(): java.util.List<com.google.firebase.ai.type.FunctionResponsePart.Internal.FunctionResponse>;
							public toInternal(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal;
						}
						export module BidiGenerateContentToolResponseSetup {
							export class Internal {
								public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal>;
								public toString(): string;
								public copy(toolResponse: com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal.BidiGenerateContentToolResponse): com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal;
								public getToolResponse(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal.BidiGenerateContentToolResponse;
								public constructor(toolResponse: com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal.BidiGenerateContentToolResponse);
								public component1(): com.google.firebase.ai.type.LiveSession.BidiGenerateContentToolResponseSetup.Internal.BidiGenerateContentToolResponse;
								public hashCode(): number;
								public equals(other: any): boolean;
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSession.Companion>;
							public getTAG(): string;
							public getMIN_BUFFER_SIZE(): number;
							public getAudioDispatcher(): kotlinx.coroutines.ExecutorCoroutineDispatcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class LiveSessionResumptionUpdate extends com.google.firebase.ai.type.LiveServerMessage {
						public static class: java.lang.Class<com.google.firebase.ai.type.LiveSessionResumptionUpdate>;
						public constructor();
						public getNewHandle(): string;
						public getResumable(): java.lang.Boolean;
						public getLastConsumedClientMessageIndex(): java.lang.Integer;
						public constructor(newHandle: string, resumable: java.lang.Boolean, lastConsumedClientMessageIndex: java.lang.Integer);
					}
					export module LiveSessionResumptionUpdate {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal>;
							public getResumable(): java.lang.Boolean;
							public constructor();
							public constructor(newHandle: string, resumable: java.lang.Boolean, lastConsumedClientMessageIndex: java.lang.Integer);
							public hashCode(): number;
							public equals(other: any): boolean;
							public component3(): java.lang.Integer;
							public getNewHandle(): string;
							public toString(): string;
							public getLastConsumedClientMessageIndex(): java.lang.Integer;
							public component2(): java.lang.Boolean;
							public copy(newHandle: string, resumable: java.lang.Boolean, lastConsumedClientMessageIndex: java.lang.Integer): com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal;
							public component1(): string;
						}
						export class InternalWrapper extends com.google.firebase.ai.type.InternalLiveServerMessage {
							public static class: java.lang.Class<com.google.firebase.ai.type.LiveSessionResumptionUpdate.InternalWrapper>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(sessionResumptionUpdate: com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal);
							public toPublic(): com.google.firebase.ai.type.LiveServerMessage;
							public copy(sessionResumptionUpdate: com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal): com.google.firebase.ai.type.LiveSessionResumptionUpdate.InternalWrapper;
							public toString(): string;
							public component1(): com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal;
							public toPublic(): com.google.firebase.ai.type.LiveSessionResumptionUpdate;
							public getSessionResumptionUpdate(): com.google.firebase.ai.type.LiveSessionResumptionUpdate.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class MediaData {
						public static class: java.lang.Class<com.google.firebase.ai.type.MediaData>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.MediaData.Internal;
						public getMimeType(): string;
						public constructor(data: androidNative.Array<number>, mimeType: string);
						public getData(): androidNative.Array<number>;
					}
					export module MediaData {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.MediaData.Internal>;
							public getData(): string;
							public getMimeType(): string;
							public constructor(data: string, mimeType: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ModalityTokenCount {
						public static class: java.lang.Class<com.google.firebase.ai.type.ModalityTokenCount>;
						public component1(): com.google.firebase.ai.type.ContentModality;
						public getModality(): com.google.firebase.ai.type.ContentModality;
						public component2(): number;
						public getTokenCount(): number;
					}
					export module ModalityTokenCount {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public component1(): com.google.firebase.ai.type.ContentModality.Internal;
							public hashCode(): number;
							public getTokenCount(): java.lang.Integer;
							public equals(other: any): boolean;
							public constructor(modality: com.google.firebase.ai.type.ContentModality.Internal, tokenCount: java.lang.Integer);
							public getModality(): com.google.firebase.ai.type.ContentModality.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ModalityTokenCount;
							public component2(): java.lang.Integer;
							public toString(): string;
							public copy(modality: com.google.firebase.ai.type.ContentModality.Internal, tokenCount: java.lang.Integer): com.google.firebase.ai.type.ModalityTokenCount.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class MultiSpeakerVoiceConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.MultiSpeakerVoiceConfig>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal;
						public constructor(speakerVoiceConfigs: java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig>);
						public getSpeakerVoiceConfigs(): java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig>;
					}
					export module MultiSpeakerVoiceConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal>;
							public component1(): java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig.Internal>;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getSpeakerVoiceConfigs(): java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig.Internal>;
							public copy(speakerVoiceConfigs: java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig.Internal>): com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal;
							public constructor(speakerVoiceConfigs: java.util.List<com.google.firebase.ai.type.SpeakerVoiceConfig.Internal>);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.Part>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { isThought(): boolean });
						public constructor();
						public isThought(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PartSerializer extends kotlinx.serialization.json.JsonContentPolymorphicSerializer<com.google.firebase.ai.type.InternalPart> {
						public static class: java.lang.Class<com.google.firebase.ai.type.PartSerializer>;
						public static INSTANCE: com.google.firebase.ai.type.PartSerializer;
						public selectDeserializer(this_: kotlinx.serialization.json.JsonElement): kotlinx.serialization.DeserializationStrategy<com.google.firebase.ai.type.InternalPart>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PermissionMissingException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.PermissionMissingException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PrebuiltVoiceInternal {
						public static class: java.lang.Class<com.google.firebase.ai.type.PrebuiltVoiceInternal>;
						public equals(other: any): boolean;
						public getVoiceName(): string;
						public component1(): string;
						public hashCode(): number;
						public copy(voiceName: string): com.google.firebase.ai.type.PrebuiltVoiceInternal;
						public constructor(voiceName: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PromptBlockedException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.PromptBlockedException>;
						public getResponse(): com.google.firebase.ai.type.GenerateContentResponse;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(response: com.google.firebase.ai.type.GenerateContentResponse, cause: java.lang.Throwable, message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PromptFeedback {
						public static class: java.lang.Class<com.google.firebase.ai.type.PromptFeedback>;
						public getSafetyRatings(): java.util.List<com.google.firebase.ai.type.SafetyRating>;
						public getBlockReasonMessage(): string;
						public getBlockReason(): com.google.firebase.ai.type.BlockReason;
						public constructor(blockReason: com.google.firebase.ai.type.BlockReason, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating>, blockReasonMessage: string);
					}
					export module PromptFeedback {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.PromptFeedback.Internal>;
							public constructor();
							public hashCode(): number;
							public component1(): com.google.firebase.ai.type.BlockReason.Internal;
							public getBlockReasonMessage(): string;
							public constructor(blockReason: com.google.firebase.ai.type.BlockReason.Internal, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>, blockReasonMessage: string);
							public toString(): string;
							public getBlockReason(): com.google.firebase.ai.type.BlockReason.Internal;
							public component3(): string;
							public equals(other: any): boolean;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.PromptFeedback;
							public copy(blockReason: com.google.firebase.ai.type.BlockReason.Internal, safetyRatings: java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>, blockReasonMessage: string): com.google.firebase.ai.type.PromptFeedback.Internal;
							public getSafetyRatings(): java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>;
							public component2(): java.util.List<com.google.firebase.ai.type.SafetyRating.Internal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class PublicPreviewAPI {
						public static class: java.lang.Class<com.google.firebase.ai.type.PublicPreviewAPI>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.PublicPreviewAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class QuotaExceededException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.QuotaExceededException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class RealtimeInputConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig>;
						public getAutomaticActivityDetection$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ActivityDetectionConfig;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RealtimeInputConfig.Internal;
						public static builder(): com.google.firebase.ai.type.RealtimeInputConfig.Builder;
						public getTurnCoverage$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage;
						public getActivityHandling$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling;
					}
					export module RealtimeInputConfig {
						export class ActivityHandling {
							public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling>;
							public static INTERRUPT: com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling;
							public static NO_INTERRUPT: com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling;
							public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
						}
						export module ActivityHandling {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling.Companion>;
							}
						}
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.Builder>;
							public automaticActivityDetection: com.google.firebase.ai.type.ActivityDetectionConfig;
							public activityHandling: com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling;
							public turnCoverage: com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage;
							public constructor();
							public build(): com.google.firebase.ai.type.RealtimeInputConfig;
							public setTurnCoverage($this$setTurnCoverage_u24lambda_u242: com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage): com.google.firebase.ai.type.RealtimeInputConfig.Builder;
							public setAutomaticActivityDetection($this$setAutomaticActivityDetection_u24lambda_u240: com.google.firebase.ai.type.ActivityDetectionConfig): com.google.firebase.ai.type.RealtimeInputConfig.Builder;
							public setActivityHandling($this$setActivityHandling_u24lambda_u241: com.google.firebase.ai.type.RealtimeInputConfig.ActivityHandling): com.google.firebase.ai.type.RealtimeInputConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.Companion>;
							public builder(): com.google.firebase.ai.type.RealtimeInputConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.Internal>;
							public constructor();
							public component2(): string;
							public getTurnCoverage(): string;
							public hashCode(): number;
							public equals(other: any): boolean;
							public component1(): com.google.firebase.ai.type.ActivityDetectionConfig.Internal;
							public getActivityHandling(): string;
							public copy(automaticActivityDetection: com.google.firebase.ai.type.ActivityDetectionConfig.Internal, activityHandling: string, turnCoverage: string): com.google.firebase.ai.type.RealtimeInputConfig.Internal;
							public constructor(automaticActivityDetection: com.google.firebase.ai.type.ActivityDetectionConfig.Internal, activityHandling: string, turnCoverage: string);
							public toString(): string;
							public getAutomaticActivityDetection(): com.google.firebase.ai.type.ActivityDetectionConfig.Internal;
							public component3(): string;
						}
						export class TurnCoverage {
							public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage>;
							public static ONLY_ACTIVITY: com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage;
							public static ALL_INPUT: com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage;
							public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
						}
						export module TurnCoverage {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.RealtimeInputConfig.TurnCoverage.Companion>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class RequestOptions {
						public static class: java.lang.Class<com.google.firebase.ai.type.RequestOptions>;
						public constructor();
						public 'getTimeout-UwyO8pc$com_google_firebase_ai_logic_firebase_ai'(): number;
						public getEndpoint$com_google_firebase_ai_logic_firebase_ai(): string;
						public getAutoFunctionCallingTurnLimit$com_google_firebase_ai_logic_firebase_ai(): number;
						public constructor(timeoutInMillis: number);
						public getApiVersion$com_google_firebase_ai_logic_firebase_ai(): string;
						public constructor(timeoutInMillis: number, autoFunctionCallingTurnLimit: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class RequestTimeoutException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.RequestTimeoutException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable, history: java.util.List<com.google.firebase.ai.type.Content>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Response {
						public static class: java.lang.Class<com.google.firebase.ai.type.Response>;
						/**
						 * Constructs a new instance of the com.google.firebase.ai.type.Response interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ResponseModality {
						public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality>;
						public static TEXT: com.google.firebase.ai.type.ResponseModality;
						public static IMAGE: com.google.firebase.ai.type.ResponseModality;
						public static AUDIO: com.google.firebase.ai.type.ResponseModality;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module ResponseModality {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality.Internal>;
							public static TEXT: com.google.firebase.ai.type.ResponseModality.Internal;
							public static IMAGE: com.google.firebase.ai.type.ResponseModality.Internal;
							public static AUDIO: com.google.firebase.ai.type.ResponseModality.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ResponseModality;
							public static valueOf(value: string): com.google.firebase.ai.type.ResponseModality.Internal;
							public static getEntries(): any;
							public static values(): androidNative.Array<com.google.firebase.ai.type.ResponseModality.Internal>;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.ResponseModality.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.ResponseModality.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.ResponseModality.Internal.Serializer;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.ResponseModality.Internal;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.ResponseModality.Internal): void;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.ResponseModality.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ResponseStoppedException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.ResponseStoppedException>;
						public constructor(response: com.google.firebase.ai.type.GenerateContentResponse, cause: java.lang.Throwable);
						public getResponse(): com.google.firebase.ai.type.GenerateContentResponse;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class RetrievalConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.RetrievalConfig>;
						public constructor();
						public getLatLng$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.LatLng;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RetrievalConfig.Internal;
						public getLanguageCode$com_google_firebase_ai_logic_firebase_ai(): string;
						public static builder(): com.google.firebase.ai.type.RetrievalConfig.Builder;
						public constructor(latLng: com.google.firebase.ai.type.LatLng, languageCode: string);
					}
					export module RetrievalConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.RetrievalConfig.Builder>;
							public latLng: com.google.firebase.ai.type.LatLng;
							public languageCode: string;
							public constructor();
							public build(): com.google.firebase.ai.type.RetrievalConfig;
							public setLanguageCode($this$setLanguageCode_u24lambda_u241: string): com.google.firebase.ai.type.RetrievalConfig.Builder;
							public setLatLng($this$setLatLng_u24lambda_u240: com.google.firebase.ai.type.LatLng): com.google.firebase.ai.type.RetrievalConfig.Builder;
						}
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.RetrievalConfig.Companion>;
							public builder(): com.google.firebase.ai.type.RetrievalConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.RetrievalConfig.Internal>;
							public constructor();
							public getLatLng(): com.google.firebase.ai.type.LatLng.Internal;
							public constructor(latLng: com.google.firebase.ai.type.LatLng.Internal, languageCode: string);
							public getLanguageCode(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SafetyRating {
						public static class: java.lang.Class<com.google.firebase.ai.type.SafetyRating>;
						public constructor(category: com.google.firebase.ai.type.HarmCategory, probability: com.google.firebase.ai.type.HarmProbability, probabilityScore: number, blocked: java.lang.Boolean, severity: com.google.firebase.ai.type.HarmSeverity, severityScore: java.lang.Float);
						public getSeverityScore(): java.lang.Float;
						public getCategory(): com.google.firebase.ai.type.HarmCategory;
						public getSeverity(): com.google.firebase.ai.type.HarmSeverity;
						public getBlocked(): java.lang.Boolean;
						public getProbability(): com.google.firebase.ai.type.HarmProbability;
						public getProbabilityScore(): number;
					}
					export module SafetyRating {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SafetyRating.Internal>;
							public component1(): com.google.firebase.ai.type.HarmCategory.Internal;
							public constructor();
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SafetyRating;
							public hashCode(): number;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal, blocked: java.lang.Boolean, probabilityScore: java.lang.Float);
							public getBlocked(): java.lang.Boolean;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal, blocked: java.lang.Boolean);
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal);
							public getSeverityScore(): java.lang.Float;
							public toString(): string;
							public getSeverity(): com.google.firebase.ai.type.HarmSeverity.Internal;
							public component2(): com.google.firebase.ai.type.HarmProbability.Internal;
							public copy(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal, blocked: java.lang.Boolean, probabilityScore: java.lang.Float, severity: com.google.firebase.ai.type.HarmSeverity.Internal, severityScore: java.lang.Float): com.google.firebase.ai.type.SafetyRating.Internal;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal, blocked: java.lang.Boolean, probabilityScore: java.lang.Float, severity: com.google.firebase.ai.type.HarmSeverity.Internal, severityScore: java.lang.Float);
							public equals(other: any): boolean;
							public component4(): java.lang.Float;
							public component5(): com.google.firebase.ai.type.HarmSeverity.Internal;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal);
							public getProbabilityScore(): java.lang.Float;
							public component3(): java.lang.Boolean;
							public getCategory(): com.google.firebase.ai.type.HarmCategory.Internal;
							public getProbability(): com.google.firebase.ai.type.HarmProbability.Internal;
							public component6(): java.lang.Float;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, probability: com.google.firebase.ai.type.HarmProbability.Internal, blocked: java.lang.Boolean, probabilityScore: java.lang.Float, severity: com.google.firebase.ai.type.HarmSeverity.Internal);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SafetySetting {
						public static class: java.lang.Class<com.google.firebase.ai.type.SafetySetting>;
						public constructor(harmCategory: com.google.firebase.ai.type.HarmCategory, threshold: com.google.firebase.ai.type.HarmBlockThreshold, method: com.google.firebase.ai.type.HarmBlockMethod);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SafetySetting.Internal;
						public getThreshold$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmBlockThreshold;
						public getMethod$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmBlockMethod;
						public getHarmCategory$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.HarmCategory;
					}
					export module SafetySetting {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SafetySetting.Internal>;
							public component1(): com.google.firebase.ai.type.HarmCategory.Internal;
							public getMethod(): com.google.firebase.ai.type.HarmBlockMethod.Internal;
							public copy(category: com.google.firebase.ai.type.HarmCategory.Internal, threshold: com.google.firebase.ai.type.HarmBlockThreshold.Internal, method: com.google.firebase.ai.type.HarmBlockMethod.Internal): com.google.firebase.ai.type.SafetySetting.Internal;
							public hashCode(): number;
							public constructor(category: com.google.firebase.ai.type.HarmCategory.Internal, threshold: com.google.firebase.ai.type.HarmBlockThreshold.Internal, method: com.google.firebase.ai.type.HarmBlockMethod.Internal);
							public equals(other: any): boolean;
							public getThreshold(): com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public getCategory(): com.google.firebase.ai.type.HarmCategory.Internal;
							public toString(): string;
							public component2(): com.google.firebase.ai.type.HarmBlockThreshold.Internal;
							public component3(): com.google.firebase.ai.type.HarmBlockMethod.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Schema {
						public static class: java.lang.Class<com.google.firebase.ai.type.Schema>;
						public getMaxItems(): java.lang.Integer;
						public static numFloat(description: string): com.google.firebase.ai.type.Schema;
						public getMinItems(): java.lang.Integer;
						public static array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string, minItems: java.lang.Integer): com.google.firebase.ai.type.Schema;
						public static obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>): com.google.firebase.ai.type.Schema;
						public static numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public getEnum(): java.util.List<string>;
						public static str(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public getProperties(): java.util.Map<string, com.google.firebase.ai.type.Schema>;
						public static enumeration(values: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public getMaximum(): java.lang.Double;
						public static numDouble(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public static str(description: string): com.google.firebase.ai.type.Schema;
						public static numInt(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public constructor(type: string, description: string, format: string, nullable: java.lang.Boolean, enum_: java.util.List<string>, properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<com.google.firebase.ai.type.Schema>);
						public static enumeration(values: java.util.List<string>, description: string): com.google.firebase.ai.type.Schema;
						public static numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numLong(description: string): com.google.firebase.ai.type.Schema;
						public static array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public toInternalJson$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Schema.InternalJson;
						public getNullable(): java.lang.Boolean;
						public toInternalOpenApi$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
						public getDescription(): string;
						public getMinimum(): java.lang.Double;
						public static numLong(): com.google.firebase.ai.type.Schema;
						public static numFloat(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static str(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat): com.google.firebase.ai.type.Schema;
						public getType(): string;
						public static array(items: com.google.firebase.ai.type.Schema): com.google.firebase.ai.type.Schema;
						public static str(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat, title: string): com.google.firebase.ai.type.Schema;
						public static boolean(description: string): com.google.firebase.ai.type.Schema;
						public getRequired(): java.util.List<string>;
						public static boolean(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numDouble(): com.google.firebase.ai.type.Schema;
						public static obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>): com.google.firebase.ai.type.Schema;
						public getFormat(): string;
						public static numInt(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public getItems(): com.google.firebase.ai.type.Schema;
						public static anyOf(schemas: java.util.List<com.google.firebase.ai.type.Schema>): com.google.firebase.ai.type.Schema;
						public static numDouble(description: string): com.google.firebase.ai.type.Schema;
						public static numFloat(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public static array(items: com.google.firebase.ai.type.Schema, description: string): com.google.firebase.ai.type.Schema;
						public static boolean(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public static numLong(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public static boolean(): com.google.firebase.ai.type.Schema;
						public static numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numInt(description: string): com.google.firebase.ai.type.Schema;
						public static obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string): com.google.firebase.ai.type.Schema;
						public static str(): com.google.firebase.ai.type.Schema;
						public getTitle(): string;
						public static numFloat(): com.google.firebase.ai.type.Schema;
						public getAnyOf(): java.util.List<com.google.firebase.ai.type.Schema>;
						public static array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer): com.google.firebase.ai.type.Schema;
						public static enumeration(values: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static numInt(): com.google.firebase.ai.type.Schema;
						public static numDouble(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
						public static obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
						public static numLong(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
						public static enumeration(values: java.util.List<string>): com.google.firebase.ai.type.Schema;
					}
					export module Schema {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.Schema.Companion>;
							public anyOf(schemas: java.util.List<com.google.firebase.ai.type.Schema>): com.google.firebase.ai.type.Schema;
							public numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public numFloat(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numFloat(): com.google.firebase.ai.type.Schema;
							public boolean(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema): com.google.firebase.ai.type.Schema;
							public numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public numDouble(description: string): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema, description: string): com.google.firebase.ai.type.Schema;
							public numLong(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numInt(): com.google.firebase.ai.type.Schema;
							public enumeration(values: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public boolean(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public enumeration(values: java.util.List<string>): com.google.firebase.ai.type.Schema;
							public obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string): com.google.firebase.ai.type.Schema;
							public boolean(): com.google.firebase.ai.type.Schema;
							public numInt(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public str(description: string): com.google.firebase.ai.type.Schema;
							public numLong(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numDouble(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public boolean(description: string): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public numFloat(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public str(): com.google.firebase.ai.type.Schema;
							public numLong(description: string): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>): com.google.firebase.ai.type.Schema;
							public enumeration(values: java.util.List<string>, description: string): com.google.firebase.ai.type.Schema;
							public numInt(description: string): com.google.firebase.ai.type.Schema;
							public numDouble(description: string, nullable: boolean, title: string, minimum: java.lang.Double, maximum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public str(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string, minItems: java.lang.Integer): com.google.firebase.ai.type.Schema;
							public numInt(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public enumeration(values: java.util.List<string>, description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numInt(description: string, nullable: boolean): com.google.firebase.ai.type.Schema;
							public numFloat(description: string): com.google.firebase.ai.type.Schema;
							public obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>, optionalProperties: java.util.List<string>, description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public numDouble(): com.google.firebase.ai.type.Schema;
							public str(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat): com.google.firebase.ai.type.Schema;
							public numDouble(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public numLong(description: string, nullable: boolean, title: string, minimum: java.lang.Double): com.google.firebase.ai.type.Schema;
							public numFloat(description: string, nullable: boolean, title: string): com.google.firebase.ai.type.Schema;
							public str(description: string, nullable: boolean, format: com.google.firebase.ai.type.StringFormat, title: string): com.google.firebase.ai.type.Schema;
							public array(items: com.google.firebase.ai.type.Schema, description: string, nullable: boolean, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer): com.google.firebase.ai.type.Schema;
							public numLong(): com.google.firebase.ai.type.Schema;
							public obj(properties: java.util.Map<string, com.google.firebase.ai.type.Schema>): com.google.firebase.ai.type.Schema;
						}
						export class InternalJson {
							public static class: java.lang.Class<com.google.firebase.ai.type.Schema.InternalJson>;
							/**
							 * Constructs a new instance of the com.google.firebase.ai.type.Schema$InternalJson interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { '<clinit>'(): void });
							public constructor();
						}
						export module InternalJson {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.Schema.InternalJson.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.Schema.InternalJson>;
							}
						}
						export class InternalJsonNonNull extends com.google.firebase.ai.type.Schema.InternalJson {
							public static class: java.lang.Class<com.google.firebase.ai.type.Schema.InternalJsonNonNull>;
							public component12(): java.lang.Double;
							public getMaxItems(): java.lang.Integer;
							public getAnyOf(): java.util.List<com.google.firebase.ai.type.Schema.InternalJson>;
							public hashCode(): number;
							public getItems(): com.google.firebase.ai.type.Schema.InternalJson;
							public toString(): string;
							public getDescription(): string;
							public getProperties(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalJson>;
							public component3(): string;
							public component1(): string;
							public getFormat(): string;
							public component10(): java.lang.Integer;
							public equals(other: any): boolean;
							public component11(): java.lang.Double;
							public getMinItems(): java.lang.Integer;
							public copy(type: string, description: string, format: string, enum_: java.util.List<string>, properties: java.util.Map<string, any>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalJson, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<any>): com.google.firebase.ai.type.Schema.InternalJsonNonNull;
							public getType(): string;
							public constructor();
							public component2(): string;
							public component4(): java.util.List<string>;
							public component13(): java.util.List<com.google.firebase.ai.type.Schema.InternalJson>;
							public getTitle(): string;
							public getEnum(): java.util.List<string>;
							public getMaximum(): java.lang.Double;
							public getMinimum(): java.lang.Double;
							public component8(): string;
							public component5(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalJson>;
							public constructor(type: string, description: string, format: string, enum_: java.util.List<string>, properties: java.util.Map<string, any>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalJson, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<any>);
							public component6(): java.util.List<string>;
							public getRequired(): java.util.List<string>;
							public component7(): com.google.firebase.ai.type.Schema.InternalJson;
							public component9(): java.lang.Integer;
						}
						export class InternalJsonNullable extends com.google.firebase.ai.type.Schema.InternalJson {
							public static class: java.lang.Class<com.google.firebase.ai.type.Schema.InternalJsonNullable>;
							public component12(): java.lang.Double;
							public copy(type: java.util.List<string>, description: string, format: string, enum_: java.util.List<string>, properties: java.util.Map<string, any>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalJson, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<any>): com.google.firebase.ai.type.Schema.InternalJsonNullable;
							public getMaxItems(): java.lang.Integer;
							public getAnyOf(): java.util.List<com.google.firebase.ai.type.Schema.InternalJson>;
							public hashCode(): number;
							public getItems(): com.google.firebase.ai.type.Schema.InternalJson;
							public toString(): string;
							public getDescription(): string;
							public getProperties(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalJson>;
							public component3(): string;
							public getFormat(): string;
							public component10(): java.lang.Integer;
							public component1(): java.util.List<string>;
							public equals(other: any): boolean;
							public component11(): java.lang.Double;
							public getMinItems(): java.lang.Integer;
							public constructor();
							public component2(): string;
							public component4(): java.util.List<string>;
							public component13(): java.util.List<com.google.firebase.ai.type.Schema.InternalJson>;
							public getTitle(): string;
							public getEnum(): java.util.List<string>;
							public getMaximum(): java.lang.Double;
							public constructor(type: java.util.List<string>, description: string, format: string, enum_: java.util.List<string>, properties: java.util.Map<string, any>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalJson, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<any>);
							public getType(): java.util.List<string>;
							public getMinimum(): java.lang.Double;
							public component8(): string;
							public component5(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalJson>;
							public component6(): java.util.List<string>;
							public getRequired(): java.util.List<string>;
							public component7(): com.google.firebase.ai.type.Schema.InternalJson;
							public component9(): java.lang.Integer;
						}
						export class InternalOpenAPI {
							public static class: java.lang.Class<com.google.firebase.ai.type.Schema.InternalOpenAPI>;
							public component11(): java.lang.Integer;
							public component12(): java.lang.Double;
							public component14(): java.util.List<com.google.firebase.ai.type.Schema.InternalOpenAPI>;
							public getMaxItems(): java.lang.Integer;
							public component8(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public hashCode(): number;
							public component7(): java.util.List<string>;
							public toString(): string;
							public getDescription(): string;
							public component3(): string;
							public component1(): string;
							public component4(): java.lang.Boolean;
							public getFormat(): string;
							public component10(): java.lang.Integer;
							public equals(other: any): boolean;
							public component6(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalOpenAPI>;
							public getProperties(): java.util.Map<string, com.google.firebase.ai.type.Schema.InternalOpenAPI>;
							public component13(): java.lang.Double;
							public getMinItems(): java.lang.Integer;
							public getType(): string;
							public constructor();
							public component2(): string;
							public getItems(): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public component9(): string;
							public getNullable(): java.lang.Boolean;
							public getTitle(): string;
							public constructor(type: string, description: string, format: string, nullable: java.lang.Boolean, enum_: java.util.List<string>, properties: java.util.Map<string, com.google.firebase.ai.type.Schema.InternalOpenAPI>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalOpenAPI, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<com.google.firebase.ai.type.Schema.InternalOpenAPI>);
							public getEnum(): java.util.List<string>;
							public component5(): java.util.List<string>;
							public getMaximum(): java.lang.Double;
							public getMinimum(): java.lang.Double;
							public getRequired(): java.util.List<string>;
							public copy(type: string, description: string, format: string, nullable: java.lang.Boolean, enum_: java.util.List<string>, properties: java.util.Map<string, com.google.firebase.ai.type.Schema.InternalOpenAPI>, required: java.util.List<string>, items: com.google.firebase.ai.type.Schema.InternalOpenAPI, title: string, minItems: java.lang.Integer, maxItems: java.lang.Integer, minimum: java.lang.Double, maximum: java.lang.Double, anyOf: java.util.List<com.google.firebase.ai.type.Schema.InternalOpenAPI>): com.google.firebase.ai.type.Schema.InternalOpenAPI;
							public getAnyOf(): java.util.List<com.google.firebase.ai.type.Schema.InternalOpenAPI>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SearchEntryPoint {
						public static class: java.lang.Class<com.google.firebase.ai.type.SearchEntryPoint>;
						public getRenderedContent(): string;
						public getSdkBlob(): string;
						public constructor(renderedContent: string, sdkBlob: string);
					}
					export module SearchEntryPoint {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SearchEntryPoint.Internal>;
							public component2(): string;
							public getSdkBlob(): string;
							public hashCode(): number;
							public copy(renderedContent: string, sdkBlob: string): com.google.firebase.ai.type.SearchEntryPoint.Internal;
							public equals(other: any): boolean;
							public toString(): string;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SearchEntryPoint;
							public constructor(renderedContent: string, sdkBlob: string);
							public getRenderedContent(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Segment {
						public static class: java.lang.Class<com.google.firebase.ai.type.Segment>;
						public getPartIndex(): number;
						public getStartIndex(): number;
						public getText(): string;
						public constructor(startIndex: number, endIndex: number, partIndex: number, text: string);
						public getEndIndex(): number;
					}
					export module Segment {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Segment.Internal>;
							public getEndIndex(): java.lang.Integer;
							public getText(): string;
							public hashCode(): number;
							public getStartIndex(): java.lang.Integer;
							public component3(): java.lang.Integer;
							public toString(): string;
							public component1(): java.lang.Integer;
							public constructor(startIndex: java.lang.Integer, endIndex: java.lang.Integer, partIndex: java.lang.Integer, text: string);
							public getPartIndex(): java.lang.Integer;
							public copy(startIndex: java.lang.Integer, endIndex: java.lang.Integer, partIndex: java.lang.Integer, text: string): com.google.firebase.ai.type.Segment.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(part: com.google.firebase.ai.type.Content): com.google.firebase.ai.type.Segment;
							public equals(other: any): boolean;
							public component2(): java.lang.Integer;
							public component4(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SerializationException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.SerializationException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ServerException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.ServerException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ServiceConnectionHandshakeFailedException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.ServiceConnectionHandshakeFailedException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ServiceDisabledException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.ServiceDisabledException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SessionAlreadyReceivingException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.SessionAlreadyReceivingException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SessionResumptionConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.SessionResumptionConfig>;
						public getHandle$com_google_firebase_ai_logic_firebase_ai(): string;
						public constructor();
						public constructor(handle: string);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SessionResumptionConfig.Internal;
					}
					export module SessionResumptionConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SessionResumptionConfig.Internal>;
							public constructor();
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(handle: string);
							public toString(): string;
							public copy(handle: string): com.google.firebase.ai.type.SessionResumptionConfig.Internal;
							public component1(): string;
							public getHandle(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SlidingWindow {
						public static class: java.lang.Class<com.google.firebase.ai.type.SlidingWindow>;
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SlidingWindow.Internal;
						public constructor(targetTokens: java.lang.Integer);
						public getTargetTokens(): java.lang.Integer;
					}
					export module SlidingWindow {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SlidingWindow.Internal>;
							public constructor();
							public getTargetTokens(): java.lang.Integer;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(targetTokens: java.lang.Integer);
							public copy(targetTokens: java.lang.Integer): com.google.firebase.ai.type.SlidingWindow.Internal;
							public toString(): string;
							public component1(): java.lang.Integer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SpeakerVoiceConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.SpeakerVoiceConfig>;
						public getVoice(): com.google.firebase.ai.type.Voice;
						public getSpeaker(): string;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SpeakerVoiceConfig.Internal;
						public constructor(speaker: string, voice: com.google.firebase.ai.type.Voice);
					}
					export module SpeakerVoiceConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SpeakerVoiceConfig.Internal>;
							public component2(): com.google.firebase.ai.type.VoiceConfigInternal;
							public copy(speaker: string, voiceConfig: com.google.firebase.ai.type.VoiceConfigInternal): com.google.firebase.ai.type.SpeakerVoiceConfig.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getVoiceConfig(): com.google.firebase.ai.type.VoiceConfigInternal;
							public toString(): string;
							public constructor(speaker: string, voiceConfig: com.google.firebase.ai.type.VoiceConfigInternal);
							public getSpeaker(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class SpeechConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.SpeechConfig>;
						public getLanguageCode(): string;
						public constructor(multiSpeakerVoiceConfig: com.google.firebase.ai.type.MultiSpeakerVoiceConfig);
						public constructor(multiSpeakerVoiceConfig: com.google.firebase.ai.type.MultiSpeakerVoiceConfig, languageCode: string);
						public getVoice(): com.google.firebase.ai.type.Voice;
						public constructor(voice: com.google.firebase.ai.type.Voice);
						public constructor(voice: com.google.firebase.ai.type.Voice, languageCode: string);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.SpeechConfig.Internal;
						public getMultiSpeakerVoiceConfig(): com.google.firebase.ai.type.MultiSpeakerVoiceConfig;
					}
					export module SpeechConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.SpeechConfig.Internal>;
							public copy(voiceConfig: com.google.firebase.ai.type.VoiceConfigInternal, multiSpeakerVoiceConfig: com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal, languageCode: string): com.google.firebase.ai.type.SpeechConfig.Internal;
							public constructor();
							public hashCode(): number;
							public equals(other: any): boolean;
							public component1(): com.google.firebase.ai.type.VoiceConfigInternal;
							public component2(): com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal;
							public getMultiSpeakerVoiceConfig(): com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal;
							public getVoiceConfig(): com.google.firebase.ai.type.VoiceConfigInternal;
							public toString(): string;
							public getLanguageCode(): string;
							public component3(): string;
							public constructor(voiceConfig: com.google.firebase.ai.type.VoiceConfigInternal, multiSpeakerVoiceConfig: com.google.firebase.ai.type.MultiSpeakerVoiceConfig.Internal, languageCode: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export abstract class StringFormat {
						public static class: java.lang.Class<com.google.firebase.ai.type.StringFormat>;
						public getValue$com_google_firebase_ai_logic_firebase_ai(): string;
					}
					export module StringFormat {
						export class Custom extends com.google.firebase.ai.type.StringFormat {
							public static class: java.lang.Class<com.google.firebase.ai.type.StringFormat.Custom>;
							public constructor(value: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class TemplateAutoFunctionDeclaration<I, O> extends java.lang.Object {
						public static class: java.lang.Class<com.google.firebase.ai.type.TemplateAutoFunctionDeclaration<any, any>>;
						public getOutputSchema(): com.google.firebase.ai.type.JsonSchema<O>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal;
						public getFunctionReference(): any;
						public constructor(name: string, inputSchema: com.google.firebase.ai.type.JsonSchema<I>, outputSchema: com.google.firebase.ai.type.JsonSchema<O>, functionReference: any);
						public getName(): string;
						public getInputSchema(): com.google.firebase.ai.type.JsonSchema<I>;
					}
					export module TemplateAutoFunctionDeclaration {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.TemplateAutoFunctionDeclaration.Companion>;
							public create(functionName: string, inputSchema: com.google.firebase.ai.type.JsonSchema<any>, outputSchema: com.google.firebase.ai.type.JsonSchema<any>, functionReference: any): com.google.firebase.ai.type.TemplateAutoFunctionDeclaration<any, any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class TemplateFunctionDeclaration {
						public static class: java.lang.Class<com.google.firebase.ai.type.TemplateFunctionDeclaration>;
						public getOutputSchema(): com.google.firebase.ai.type.JsonSchema<any>;
						public constructor(name: string, inputSchema: com.google.firebase.ai.type.JsonSchema<any>, outputSchema: com.google.firebase.ai.type.JsonSchema<any>);
						public getInputSchema(): com.google.firebase.ai.type.JsonSchema<any>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal;
						public getName(): string;
					}
					export module TemplateFunctionDeclaration {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal>;
							public constructor(name: string, inputSchema: com.google.firebase.ai.type.Schema.InternalJson, outputSchema: com.google.firebase.ai.type.Schema.InternalJson);
							public component3(): com.google.firebase.ai.type.Schema.InternalJson;
							public getInputSchema(): com.google.firebase.ai.type.Schema.InternalJson;
							public hashCode(): number;
							public getName(): string;
							public component2(): com.google.firebase.ai.type.Schema.InternalJson;
							public equals(other: any): boolean;
							public copy(name: string, inputSchema: com.google.firebase.ai.type.Schema.InternalJson, outputSchema: com.google.firebase.ai.type.Schema.InternalJson): com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal;
							public toString(): string;
							public getOutputSchema(): com.google.firebase.ai.type.Schema.InternalJson;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class TemplateTool {
						public static class: java.lang.Class<com.google.firebase.ai.type.TemplateTool>;
						public getAutoFunctionDeclarations$com_google_firebase_ai_logic_firebase_ai(): java.util.List<com.google.firebase.ai.type.TemplateAutoFunctionDeclaration<any, any>>;
						public static functionDeclarations(functionDeclarations: java.util.List<any>, autoFunctionDeclarations: java.util.List<any>): com.google.firebase.ai.type.TemplateTool;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.TemplateTool.Internal;
						public static googleMaps(googleMaps: com.google.firebase.ai.type.GoogleMaps): com.google.firebase.ai.type.TemplateTool;
						public getFunctionDeclarations$com_google_firebase_ai_logic_firebase_ai(): java.util.List<com.google.firebase.ai.type.TemplateFunctionDeclaration>;
						public getGoogleMaps$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GoogleMaps;
						public constructor(functionDeclarations: java.util.List<any>, autoFunctionDeclarations: java.util.List<any>, googleMaps: com.google.firebase.ai.type.GoogleMaps);
						public static googleMaps(): com.google.firebase.ai.type.TemplateTool;
					}
					export module TemplateTool {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.TemplateTool.Companion>;
							public googleMaps(): com.google.firebase.ai.type.TemplateTool;
							public functionDeclarations(functionDeclarations: java.util.List<any>, autoFunctionDeclarations: java.util.List<any>): com.google.firebase.ai.type.TemplateTool;
							public googleMaps(googleMaps: com.google.firebase.ai.type.GoogleMaps): com.google.firebase.ai.type.TemplateTool;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.TemplateTool.Internal>;
							public constructor();
							public constructor(templateFunctions: java.util.List<com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal>, googleMaps: com.google.firebase.ai.type.GoogleMaps.Internal);
							public component2(): com.google.firebase.ai.type.GoogleMaps.Internal;
							public copy(templateFunctions: java.util.List<com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal>, googleMaps: com.google.firebase.ai.type.GoogleMaps.Internal): com.google.firebase.ai.type.TemplateTool.Internal;
							public hashCode(): number;
							public getTemplateFunctions(): java.util.List<com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal>;
							public equals(other: any): boolean;
							public toString(): string;
							public getGoogleMaps(): com.google.firebase.ai.type.GoogleMaps.Internal;
							public component1(): java.util.List<com.google.firebase.ai.type.TemplateFunctionDeclaration.Internal>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class TemplateToolConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.TemplateToolConfig>;
						public constructor(retrievalConfig: com.google.firebase.ai.type.RetrievalConfig);
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ToolConfig.Internal;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class TextPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.TextPart>;
						public constructor(text: string, isThought: boolean, thoughtSignature: string);
						public getThoughtSignature(): string;
						public static createWithThinking(text: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.TextPart;
						public isThought(): boolean;
						public constructor(text: string);
						public getText(): string;
					}
					export module TextPart {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.TextPart.Companion>;
							public createWithThinking(text: string, isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.TextPart;
						}
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.TextPart.Internal>;
							public getText(): string;
							public copy(text: string, thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.TextPart.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(text: string, thought: java.lang.Boolean, thoughtSignature: string);
							public getThoughtSignature(): string;
							public toString(): string;
							public component2(): java.lang.Boolean;
							public getThought(): java.lang.Boolean;
							public component3(): string;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ThinkingConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingConfig>;
						public getThinkingLevel$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ThinkingLevel;
						public getIncludeThoughts$com_google_firebase_ai_logic_firebase_ai(): java.lang.Boolean;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ThinkingConfig.Internal;
						public getThinkingBudget$com_google_firebase_ai_logic_firebase_ai(): java.lang.Integer;
					}
					export module ThinkingConfig {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingConfig.Builder>;
							public thinkingBudget: java.lang.Integer;
							public includeThoughts: java.lang.Boolean;
							public thinkingLevel: com.google.firebase.ai.type.ThinkingLevel;
							public constructor();
							public setThinkingLevel($this$setThinkingLevel_u24lambda_u241: com.google.firebase.ai.type.ThinkingLevel): com.google.firebase.ai.type.ThinkingConfig.Builder;
							public build(): com.google.firebase.ai.type.ThinkingConfig;
							public setThinkingBudget($this$setThinkingBudget_u24lambda_u240: number): com.google.firebase.ai.type.ThinkingConfig.Builder;
							public setIncludeThoughts($this$setIncludeThoughts_u24lambda_u242: boolean): com.google.firebase.ai.type.ThinkingConfig.Builder;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingConfig.Internal>;
							public constructor();
							public component3(): com.google.firebase.ai.type.ThinkingLevel.Internal;
							public copy(thinkingBudget: java.lang.Integer, includeThoughts: java.lang.Boolean, thinkingLevel: com.google.firebase.ai.type.ThinkingLevel.Internal): com.google.firebase.ai.type.ThinkingConfig.Internal;
							public constructor(thinkingBudget: java.lang.Integer, includeThoughts: java.lang.Boolean, thinkingLevel: com.google.firebase.ai.type.ThinkingLevel.Internal);
							public hashCode(): number;
							public getThinkingBudget(): java.lang.Integer;
							public equals(other: any): boolean;
							public toString(): string;
							public getThinkingLevel(): com.google.firebase.ai.type.ThinkingLevel.Internal;
							public component1(): java.lang.Integer;
							public component2(): java.lang.Boolean;
							public getIncludeThoughts(): java.lang.Boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ThinkingLevel {
						public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingLevel>;
						public static MINIMAL: com.google.firebase.ai.type.ThinkingLevel;
						public static LOW: com.google.firebase.ai.type.ThinkingLevel;
						public static MEDIUM: com.google.firebase.ai.type.ThinkingLevel;
						public static HIGH: com.google.firebase.ai.type.ThinkingLevel;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ThinkingLevel.Internal;
					}
					export module ThinkingLevel {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingLevel.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingLevel.Internal>;
							public static UNSPECIFIED: com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static MINIMAL: com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static LOW: com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static MEDIUM: com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static HIGH: com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static values(): androidNative.Array<com.google.firebase.ai.type.ThinkingLevel.Internal>;
							public static valueOf(value: string): com.google.firebase.ai.type.ThinkingLevel.Internal;
							public static getEntries(): any;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.ThinkingLevel.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.ThinkingLevel.Internal>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Tool {
						public static class: java.lang.Class<com.google.firebase.ai.type.Tool>;
						public static codeExecution(): com.google.firebase.ai.type.Tool;
						public static googleSearch(): com.google.firebase.ai.type.Tool;
						public getUrlContext$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UrlContext;
						public static googleMaps(googleMaps: com.google.firebase.ai.type.GoogleMaps): com.google.firebase.ai.type.Tool;
						public getCodeExecution$com_google_firebase_ai_logic_firebase_ai(): kotlinx.serialization.json.JsonObject;
						public static googleMaps(): com.google.firebase.ai.type.Tool;
						public constructor(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration>, autoFunctionDeclarations: java.util.List<any>, googleSearch: com.google.firebase.ai.type.GoogleSearch, codeExecution: kotlinx.serialization.json.JsonObject, urlContext: com.google.firebase.ai.type.UrlContext, googleMaps: com.google.firebase.ai.type.GoogleMaps);
						public getAutoFunctionDeclarations$com_google_firebase_ai_logic_firebase_ai(): java.util.List<com.google.firebase.ai.type.AutoFunctionDeclaration<any, any>>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Tool.Internal;
						public static urlContext(urlContext: com.google.firebase.ai.type.UrlContext): com.google.firebase.ai.type.Tool;
						public static googleSearch(googleSearch: com.google.firebase.ai.type.GoogleSearch): com.google.firebase.ai.type.Tool;
						public getGoogleMaps$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GoogleMaps;
						public static urlContext(): com.google.firebase.ai.type.Tool;
						public getGoogleSearch$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.GoogleSearch;
						public static functionDeclarations(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration>, autoFunctionDeclarations: java.util.List<any>): com.google.firebase.ai.type.Tool;
						public static functionDeclarations(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration>): com.google.firebase.ai.type.Tool;
						public getFunctionDeclarations$com_google_firebase_ai_logic_firebase_ai(): java.util.List<com.google.firebase.ai.type.FunctionDeclaration>;
					}
					export module Tool {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.Tool.Companion>;
							public functionDeclarations(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration>, autoFunctionDeclarations: java.util.List<any>): com.google.firebase.ai.type.Tool;
							public codeExecution(): com.google.firebase.ai.type.Tool;
							public googleSearch(googleSearch: com.google.firebase.ai.type.GoogleSearch): com.google.firebase.ai.type.Tool;
							public getCodeExecutionInstance$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Tool;
							public urlContext(): com.google.firebase.ai.type.Tool;
							public googleSearch(): com.google.firebase.ai.type.Tool;
							public googleMaps(): com.google.firebase.ai.type.Tool;
							public functionDeclarations(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration>): com.google.firebase.ai.type.Tool;
							public googleMaps(googleMaps: com.google.firebase.ai.type.GoogleMaps): com.google.firebase.ai.type.Tool;
							public urlContext(urlContext: com.google.firebase.ai.type.UrlContext): com.google.firebase.ai.type.Tool;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Tool.Internal>;
							public constructor();
							public getUrlContext(): com.google.firebase.ai.type.UrlContext.Internal;
							public getCodeExecution(): kotlinx.serialization.json.JsonObject;
							public component1(): java.util.List<com.google.firebase.ai.type.FunctionDeclaration.Internal>;
							public constructor(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration.Internal>, googleSearch: com.google.firebase.ai.type.GoogleSearch.Internal, codeExecution: kotlinx.serialization.json.JsonObject, urlContext: com.google.firebase.ai.type.UrlContext.Internal, googleMaps: com.google.firebase.ai.type.GoogleMaps.Internal);
							public component4(): com.google.firebase.ai.type.UrlContext.Internal;
							public hashCode(): number;
							public toString(): string;
							public getGoogleMaps(): com.google.firebase.ai.type.GoogleMaps.Internal;
							public component5(): com.google.firebase.ai.type.GoogleMaps.Internal;
							public getFunctionDeclarations(): java.util.List<com.google.firebase.ai.type.FunctionDeclaration.Internal>;
							public copy(functionDeclarations: java.util.List<com.google.firebase.ai.type.FunctionDeclaration.Internal>, googleSearch: com.google.firebase.ai.type.GoogleSearch.Internal, codeExecution: kotlinx.serialization.json.JsonObject, urlContext: com.google.firebase.ai.type.UrlContext.Internal, googleMaps: com.google.firebase.ai.type.GoogleMaps.Internal): com.google.firebase.ai.type.Tool.Internal;
							public component3(): kotlinx.serialization.json.JsonObject;
							public equals(other: any): boolean;
							public getGoogleSearch(): com.google.firebase.ai.type.GoogleSearch.Internal;
							public component2(): com.google.firebase.ai.type.GoogleSearch.Internal;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class ToolConfig {
						public static class: java.lang.Class<com.google.firebase.ai.type.ToolConfig>;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.ToolConfig.Internal;
						public constructor(functionCallingConfig: com.google.firebase.ai.type.FunctionCallingConfig, retrievalConfig: com.google.firebase.ai.type.RetrievalConfig);
						public constructor();
						public getRetrievalConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.RetrievalConfig;
						public constructor(functionCallingConfig: com.google.firebase.ai.type.FunctionCallingConfig);
						public getFunctionCallingConfig$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.FunctionCallingConfig;
					}
					export module ToolConfig {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.ToolConfig.Internal>;
							public copy(functionCallingConfig: com.google.firebase.ai.type.FunctionCallingConfig.Internal, retrievalConfig: com.google.firebase.ai.type.RetrievalConfig.Internal): com.google.firebase.ai.type.ToolConfig.Internal;
							public getRetrievalConfig(): com.google.firebase.ai.type.RetrievalConfig.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public constructor(functionCallingConfig: com.google.firebase.ai.type.FunctionCallingConfig.Internal, retrievalConfig: com.google.firebase.ai.type.RetrievalConfig.Internal);
							public component2(): com.google.firebase.ai.type.RetrievalConfig.Internal;
							public toString(): string;
							public getFunctionCallingConfig(): com.google.firebase.ai.type.FunctionCallingConfig.Internal;
							public component1(): com.google.firebase.ai.type.FunctionCallingConfig.Internal;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.google.firebase.ai.type.ToolConfig.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Transcription {
						public static class: java.lang.Class<com.google.firebase.ai.type.Transcription>;
						public constructor(text: string);
						public getText(): string;
					}
					export module Transcription {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Transcription.Internal>;
							public getText(): string;
							public constructor(text: string);
							public hashCode(): number;
							public equals(other: any): boolean;
							public toPublic(): com.google.firebase.ai.type.Transcription;
							public toString(): string;
							public copy(text: string): com.google.firebase.ai.type.Transcription.Internal;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UnknownException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.UnknownException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UnknownPart extends com.google.firebase.ai.type.Part {
						public static class: java.lang.Class<com.google.firebase.ai.type.UnknownPart>;
						public equals(other: any): boolean;
						public constructor();
						public getThoughtSignature(): string;
						public component2(): string;
						public isThought(): boolean;
						public hashCode(): number;
						public constructor(isThought: boolean, thoughtSignature: string);
						public component1(): boolean;
						public copy(isThought: boolean, thoughtSignature: string): com.google.firebase.ai.type.UnknownPart;
						public toString(): string;
					}
					export module UnknownPart {
						export class Internal extends com.google.firebase.ai.type.InternalPart {
							public static class: java.lang.Class<com.google.firebase.ai.type.UnknownPart.Internal>;
							public copy(thought: java.lang.Boolean, thoughtSignature: string): com.google.firebase.ai.type.UnknownPart.Internal;
							public constructor();
							public component2(): string;
							public hashCode(): number;
							public equals(other: any): boolean;
							public component1(): java.lang.Boolean;
							public constructor(thought: java.lang.Boolean, thoughtSignature: string);
							public getThoughtSignature(): string;
							public toString(): string;
							public getThought(): java.lang.Boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UnsupportedUserLocationException extends com.google.firebase.ai.type.FirebaseAIException {
						public static class: java.lang.Class<com.google.firebase.ai.type.UnsupportedUserLocationException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UrlContext {
						public static class: java.lang.Class<com.google.firebase.ai.type.UrlContext>;
						public constructor();
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UrlContext.Internal;
					}
					export module UrlContext {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.UrlContext.Internal>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UrlContextMetadata {
						public static class: java.lang.Class<com.google.firebase.ai.type.UrlContextMetadata>;
						public constructor(urlMetadata: java.util.List<com.google.firebase.ai.type.UrlMetadata>);
						public getUrlMetadata(): java.util.List<com.google.firebase.ai.type.UrlMetadata>;
					}
					export module UrlContextMetadata {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.UrlContextMetadata.Internal>;
							public getUrlMetadata(): java.util.List<com.google.firebase.ai.type.UrlMetadata.Internal>;
							public component1(): java.util.List<com.google.firebase.ai.type.UrlMetadata.Internal>;
							public hashCode(): number;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UrlContextMetadata;
							public equals(other: any): boolean;
							public constructor(urlMetadata: java.util.List<com.google.firebase.ai.type.UrlMetadata.Internal>);
							public copy(urlMetadata: java.util.List<com.google.firebase.ai.type.UrlMetadata.Internal>): com.google.firebase.ai.type.UrlContextMetadata.Internal;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UrlMetadata {
						public static class: java.lang.Class<com.google.firebase.ai.type.UrlMetadata>;
						public constructor(retrievedUrl: string, urlRetrievalStatus: com.google.firebase.ai.type.UrlRetrievalStatus);
						public getRetrievedUrl(): string;
						public getUrlRetrievalStatus(): com.google.firebase.ai.type.UrlRetrievalStatus;
					}
					export module UrlMetadata {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.UrlMetadata.Internal>;
							public getUrlRetrievalStatus(): com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UrlMetadata;
							public hashCode(): number;
							public equals(other: any): boolean;
							public component2(): com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public constructor(retrievedUrl: string, urlRetrievalStatus: com.google.firebase.ai.type.UrlRetrievalStatus.Internal);
							public getRetrievedUrl(): string;
							public toString(): string;
							public copy(retrievedUrl: string, urlRetrievalStatus: com.google.firebase.ai.type.UrlRetrievalStatus.Internal): com.google.firebase.ai.type.UrlMetadata.Internal;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UrlRetrievalStatus {
						public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus>;
						public static UNSPECIFIED: com.google.firebase.ai.type.UrlRetrievalStatus;
						public static SUCCESS: com.google.firebase.ai.type.UrlRetrievalStatus;
						public static ERROR: com.google.firebase.ai.type.UrlRetrievalStatus;
						public static PAYWALL: com.google.firebase.ai.type.UrlRetrievalStatus;
						public static UNSAFE: com.google.firebase.ai.type.UrlRetrievalStatus;
						public getOrdinal(): number;
						public getName(): string;
					}
					export module UrlRetrievalStatus {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus.Internal>;
							public static UNSPECIFIED: com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public static SUCCESS: com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public static ERROR: com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public static PAYWALL: com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public static UNSAFE: com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UrlRetrievalStatus;
							public static valueOf(value: string): com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
							public static getEntries(): any;
							public static values(): androidNative.Array<com.google.firebase.ai.type.UrlRetrievalStatus.Internal>;
						}
						export module Internal {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus.Internal.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.UrlRetrievalStatus.Internal>;
							}
							export class Serializer extends kotlinx.serialization.KSerializer<com.google.firebase.ai.type.UrlRetrievalStatus.Internal> {
								public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus.Internal.Serializer>;
								public static INSTANCE: com.google.firebase.ai.type.UrlRetrievalStatus.Internal.Serializer;
								public getDescriptor(): kotlinx.serialization.descriptors.SerialDescriptor;
								public deserialize(decoder: kotlinx.serialization.encoding.Decoder): com.google.firebase.ai.type.UrlRetrievalStatus.Internal;
								public serialize(encoder: kotlinx.serialization.encoding.Encoder, value: com.google.firebase.ai.type.UrlRetrievalStatus.Internal): void;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.UrlRetrievalStatus.Internal.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class UsageMetadata {
						public static class: java.lang.Class<com.google.firebase.ai.type.UsageMetadata>;
						public getPromptTokenCount(): number;
						public getTotalTokenCount(): number;
						public getCandidatesTokenCount(): java.lang.Integer;
						public getThoughtsTokenCount(): number;
						public getCacheTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						/** @deprecated */
						public constructor(promptTokenCount: number, candidatesTokenCount: java.lang.Integer, totalTokenCount: number, promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>, candidatesTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>, thoughtsTokenCount: number);
						public getCachedContentTokenCount(): number;
						public getPromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						public getCandidatesTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						public getToolUsePromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount>;
						public getToolUsePromptTokenCount(): number;
						public constructor(promptTokenCount: number, candidatesTokenCount: java.lang.Integer, totalTokenCount: number, cachedContentTokenCount: number, promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>, candidatesTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>, cacheTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>, thoughtsTokenCount: number, toolUsePromptTokenCount: number, toolUsePromptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount>);
					}
					export module UsageMetadata {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.UsageMetadata.Internal>;
							public hashCode(): number;
							public getToolUsePromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public toString(): string;
							public component1(): java.lang.Integer;
							public component8(): java.lang.Integer;
							public component7(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public getPromptTokenCount(): java.lang.Integer;
							public getThoughtsTokenCount(): java.lang.Integer;
							public equals(other: any): boolean;
							public constructor(
								promptTokenCount: java.lang.Integer,
								candidatesTokenCount: java.lang.Integer,
								totalTokenCount: java.lang.Integer,
								cachedContentTokenCount: java.lang.Integer,
								promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								candidatesTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								cacheTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								thoughtsTokenCount: java.lang.Integer,
								toolUsePromptTokenCount: java.lang.Integer,
								toolUsePromptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>
							);
							public component6(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public component2(): java.lang.Integer;
							public getCachedContentTokenCount(): java.lang.Integer;
							public getCandidatesTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public getCacheTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public getPromptTokensDetails(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public constructor();
							public component3(): java.lang.Integer;
							public copy(
								promptTokenCount: java.lang.Integer,
								candidatesTokenCount: java.lang.Integer,
								totalTokenCount: java.lang.Integer,
								cachedContentTokenCount: java.lang.Integer,
								promptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								candidatesTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								cacheTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>,
								thoughtsTokenCount: java.lang.Integer,
								toolUsePromptTokenCount: java.lang.Integer,
								toolUsePromptTokensDetails: java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>
							): com.google.firebase.ai.type.UsageMetadata.Internal;
							public component5(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public getTotalTokenCount(): java.lang.Integer;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.UsageMetadata;
							public getToolUsePromptTokenCount(): java.lang.Integer;
							public component4(): java.lang.Integer;
							public getCandidatesTokenCount(): java.lang.Integer;
							public component10(): java.util.List<com.google.firebase.ai.type.ModalityTokenCount.Internal>;
							public component9(): java.lang.Integer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Voice {
						public static class: java.lang.Class<com.google.firebase.ai.type.Voice>;
						public getVoiceName(): string;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.PrebuiltVoiceInternal;
						public constructor(voiceName: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class VoiceConfigInternal {
						public static class: java.lang.Class<com.google.firebase.ai.type.VoiceConfigInternal>;
						public copy(prebuiltVoiceConfig: com.google.firebase.ai.type.PrebuiltVoiceInternal): com.google.firebase.ai.type.VoiceConfigInternal;
						public equals(other: any): boolean;
						public constructor(prebuiltVoiceConfig: com.google.firebase.ai.type.PrebuiltVoiceInternal);
						public hashCode(): number;
						public getPrebuiltVoiceConfig(): com.google.firebase.ai.type.PrebuiltVoiceInternal;
						public component1(): com.google.firebase.ai.type.PrebuiltVoiceInternal;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class Voices {
						public static class: java.lang.Class<com.google.firebase.ai.type.Voices>;
						public static UNSPECIFIED: com.google.firebase.ai.type.Voices;
						public static CHARON: com.google.firebase.ai.type.Voices;
						public static AOEDE: com.google.firebase.ai.type.Voices;
						public static FENRIR: com.google.firebase.ai.type.Voices;
						public static KORE: com.google.firebase.ai.type.Voices;
						public static PUCK: com.google.firebase.ai.type.Voices;
						public getOrdinal(): number;
						public toInternal$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Voices.Internal;
					}
					export module Voices {
						export class Companion {
							public static class: java.lang.Class<com.google.firebase.ai.type.Voices.Companion>;
						}
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.Voices.Internal>;
							public copy(voiceName: string): com.google.firebase.ai.type.Voices.Internal;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getVoiceName(): string;
							public toString(): string;
							public constructor(voiceName: string);
							public component1(): string;
						}
						export class InternalEnum {
							public static class: java.lang.Class<com.google.firebase.ai.type.Voices.InternalEnum>;
							public static CHARON: com.google.firebase.ai.type.Voices.InternalEnum;
							public static AOEDE: com.google.firebase.ai.type.Voices.InternalEnum;
							public static FENRIR: com.google.firebase.ai.type.Voices.InternalEnum;
							public static KORE: com.google.firebase.ai.type.Voices.InternalEnum;
							public static PUCK: com.google.firebase.ai.type.Voices.InternalEnum;
							public static valueOf(value: string): com.google.firebase.ai.type.Voices.InternalEnum;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.Voices;
							public static values(): androidNative.Array<com.google.firebase.ai.type.Voices.InternalEnum>;
							public static getEntries(): any;
						}
						export module InternalEnum {
							export class Companion {
								public static class: java.lang.Class<com.google.firebase.ai.type.Voices.InternalEnum.Companion>;
								public serializer(): kotlinx.serialization.KSerializer<com.google.firebase.ai.type.Voices.InternalEnum>;
							}
							export class WhenMappings {
								public static class: java.lang.Class<com.google.firebase.ai.type.Voices.InternalEnum.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ai {
				export module type {
					export class WebGroundingChunk {
						public static class: java.lang.Class<com.google.firebase.ai.type.WebGroundingChunk>;
						public getDomain(): string;
						public getUri(): string;
						public constructor(uri: string, title: string, domain: string);
						public getTitle(): string;
					}
					export module WebGroundingChunk {
						export class Internal {
							public static class: java.lang.Class<com.google.firebase.ai.type.WebGroundingChunk.Internal>;
							public component2(): string;
							public hashCode(): number;
							public equals(other: any): boolean;
							public getDomain(): string;
							public getTitle(): string;
							public toPublic$com_google_firebase_ai_logic_firebase_ai(): com.google.firebase.ai.type.WebGroundingChunk;
							public copy(uri: string, title: string, domain: string): com.google.firebase.ai.type.WebGroundingChunk.Internal;
							public toString(): string;
							public getUri(): string;
							public component3(): string;
							public component1(): string;
							public constructor(uri: string, title: string, domain: string);
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.firebase.ai.common.util.FirstOrdinalSerializer:1
//com.google.firebase.ai.type.AutoFunctionDeclaration:2
//com.google.firebase.ai.type.GenerateObjectResponse:1
//com.google.firebase.ai.type.JsonSchema:1
//com.google.firebase.ai.type.TemplateAutoFunctionDeclaration:2
