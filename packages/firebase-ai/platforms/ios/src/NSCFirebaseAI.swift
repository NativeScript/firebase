import Foundation
import FirebaseAI
import FirebaseCore

private func toParts(_ raw: Any?) -> [any Part] {
	guard let list = raw as? [[String: Any]] else {
		if let text = raw as? String { return [TextPart(text)] }
		return []
	}

	return list.compactMap { part -> (any Part)? in
		if let text = part["text"] as? String {
			return TextPart(text)
		}
		if let inline = part["inlineData"] as? [String: Any],
		   let base64 = inline["data"] as? String,
		   let mimeType = inline["mimeType"] as? String,
		   let data = Data(base64Encoded: base64) {
			return InlineDataPart(data: data, mimeType: mimeType)
		}
		if let file = part["fileData"] as? [String: Any],
		   let uri = file["fileUri"] as? String,
		   let mimeType = file["mimeType"] as? String {
			return FileDataPart(uri: uri, mimeType: mimeType)
		}
		return nil
	}
}

private func toContent(_ raw: [[String: Any]]) -> [ModelContent] {
	return raw.map { item in
		ModelContent(role: item["role"] as? String ?? "user", parts: toParts(item["parts"]))
	}
}

private func fromJSONValue(_ value: JSONValue) -> Any {
	switch value {
	case .null:
		return NSNull()
	case let .number(number):
		return number
	case let .string(string):
		return string
	case let .bool(bool):
		return bool
	case let .object(object):
		return object.mapValues { fromJSONValue($0) }
	case let .array(array):
		return array.map { fromJSONValue($0) }
	}
}

private func fromResponse(_ response: GenerateContentResponse) -> NSDictionary {
	let result = NSMutableDictionary()
	result["modelVersion"] = response.modelVersion
	if let text = response.text { result["text"] = text }

	let candidates = response.candidates.map { candidate -> NSDictionary in
		let entry = NSMutableDictionary()
		entry["text"] = candidate.content.parts.compactMap { ($0 as? TextPart)?.text }.joined()
		if let reason = candidate.finishReason { entry["finishReason"] = reason.rawValue }
		entry["safetyRatings"] = candidate.safetyRatings.map { rating -> NSDictionary in
			["category": rating.category.rawValue, "probability": rating.probability.rawValue, "blocked": rating.blocked]
		}
		return entry
	}
	result["candidates"] = candidates

	if let usage = response.usageMetadata {
		result["usageMetadata"] = [
			"promptTokenCount": usage.promptTokenCount,
			"candidatesTokenCount": usage.candidatesTokenCount,
			"totalTokenCount": usage.totalTokenCount,
			"thoughtsTokenCount": usage.thoughtsTokenCount,
		] as NSDictionary
	}

	let functionCalls = response.functionCalls.map { call -> NSDictionary in
		["name": call.name, "args": call.args.mapValues { fromJSONValue($0) }] as NSDictionary
	}
	if !functionCalls.isEmpty { result["functionCalls"] = functionCalls }

	return result
}

private func toNSError(_ error: Error) -> NSError {
	let nsError = error as NSError
	if nsError.domain.isEmpty {
		return NSError(domain: "NSCFirebaseAI", code: 0, userInfo: [NSLocalizedDescriptionKey: String(describing: error)])
	}
	return nsError
}

@objc(NSCFirebaseAIChat)
public class NSCFirebaseAIChat: NSObject {
	private let chat: Chat

	init(chat: Chat) {
		self.chat = chat
	}

	@objc public var history: NSArray {
		return chat.history.map { content -> NSDictionary in
			let entry = NSMutableDictionary()
			entry["role"] = content.role ?? "user"
			entry["parts"] = content.parts.compactMap { part -> NSDictionary? in
				if let text = part as? TextPart { return ["text": text.text] }
				if let inline = part as? InlineDataPart {
					return ["inlineData": ["data": inline.data.base64EncodedString(), "mimeType": inline.mimeType]]
				}
				return nil
			}
			return entry
		} as NSArray
	}

	@objc public func sendMessage(_ content: [[String: Any]], completion: @escaping (NSDictionary?, NSError?) -> Void) {
		let messages = toContent(content)
		Task {
			do {
				completion(fromResponse(try await chat.sendMessage(messages)), nil)
			} catch {
				completion(nil, toNSError(error))
			}
		}
	}

	@objc public func sendMessageStream(_ content: [[String: Any]],
	                                    onChunk: @escaping (NSDictionary) -> Void,
	                                    completion: @escaping (NSError?) -> Void) {
		let messages = toContent(content)
		Task {
			do {
				for try await chunk in try chat.sendMessageStream(messages) {
					onChunk(fromResponse(chunk))
				}
				completion(nil)
			} catch {
				completion(toNSError(error))
			}
		}
	}
}

@objc(NSCFirebaseAIModel)
public class NSCFirebaseAIModel: NSObject {
	private let model: GenerativeModel

	init(model: GenerativeModel) {
		self.model = model
	}

	@objc public func generateContent(_ content: [[String: Any]], completion: @escaping (NSDictionary?, NSError?) -> Void) {
		let messages = toContent(content)
		Task {
			do {
				completion(fromResponse(try await model.generateContent(messages)), nil)
			} catch {
				completion(nil, toNSError(error))
			}
		}
	}

	@objc public func generateContentStream(_ content: [[String: Any]],
	                                        onChunk: @escaping (NSDictionary) -> Void,
	                                        completion: @escaping (NSError?) -> Void) {
		let messages = toContent(content)
		Task {
			do {
				for try await chunk in try model.generateContentStream(messages) {
					onChunk(fromResponse(chunk))
				}
				completion(nil)
			} catch {
				completion(toNSError(error))
			}
		}
	}

	@objc public func countTokens(_ content: [[String: Any]], completion: @escaping (NSNumber?, NSError?) -> Void) {
		let messages = toContent(content)
		Task {
			do {
				completion(NSNumber(value: try await model.countTokens(messages).totalTokens), nil)
			} catch {
				completion(nil, toNSError(error))
			}
		}
	}

	@objc public func startChat(_ history: [[String: Any]]) -> NSCFirebaseAIChat {
		return NSCFirebaseAIChat(chat: model.startChat(history: toContent(history)))
	}
}

@objc(NSCFirebaseAI)
public class NSCFirebaseAI: NSObject {
	private static func harmCategory(_ name: String) -> HarmCategory? {
		switch name {
		case "harassment": return .harassment
		case "hateSpeech": return .hateSpeech
		case "sexuallyExplicit": return .sexuallyExplicit
		case "dangerousContent": return .dangerousContent
		case "civicIntegrity": return .civicIntegrity
		default: return nil
		}
	}

	private static func harmThreshold(_ name: String) -> SafetySetting.HarmBlockThreshold {
		switch name {
		case "lowAndAbove": return .blockLowAndAbove
		case "mediumAndAbove": return .blockMediumAndAbove
		case "onlyHigh": return .blockOnlyHigh
		case "none": return .blockNone
		default: return .off
		}
	}

	private static func generationConfig(_ raw: [String: Any]?) -> GenerationConfig? {
		guard let raw = raw else { return nil }
		return GenerationConfig(
			temperature: (raw["temperature"] as? NSNumber)?.floatValue,
			topP: (raw["topP"] as? NSNumber)?.floatValue,
			topK: (raw["topK"] as? NSNumber)?.intValue,
			candidateCount: (raw["candidateCount"] as? NSNumber)?.intValue,
			maxOutputTokens: (raw["maxOutputTokens"] as? NSNumber)?.intValue,
			presencePenalty: (raw["presencePenalty"] as? NSNumber)?.floatValue,
			frequencyPenalty: (raw["frequencyPenalty"] as? NSNumber)?.floatValue,
			stopSequences: raw["stopSequences"] as? [String],
			responseMIMEType: raw["responseMimeType"] as? String
		)
	}

	@objc public static func generativeModel(appName: String?,
	                                         backend: String,
	                                         location: String?,
	                                         modelName: String,
	                                         generationConfig config: [String: Any]?,
	                                         safetySettings: [[String: Any]]?,
	                                         systemInstruction: String?) -> NSCFirebaseAIModel {
		let app = appName.flatMap { FirebaseApp.app(name: $0) }
		let selected: Backend
		switch backend {
		case "agentPlatform":
			selected = Backend.agentPlatform(location: location ?? "global")
		case "vertexAI":
			// Vertex AI was renamed to the Agent Platform; preserve its former default location.
			selected = Backend.agentPlatform(location: location ?? "us-central1")
		default:
			selected = Backend.googleAI()
		}

		let ai = FirebaseAI.firebaseAI(app: app, backend: selected)
		let settings = safetySettings?.compactMap { setting -> SafetySetting? in
			guard let category = (setting["category"] as? String).flatMap({ harmCategory($0) }) else { return nil }
			return SafetySetting(harmCategory: category, threshold: harmThreshold(setting["threshold"] as? String ?? "off"))
		}

		return NSCFirebaseAIModel(model: ai.generativeModel(
			modelName: modelName,
			generationConfig: generationConfig(config),
			safetySettings: settings,
			systemInstruction: systemInstruction.map { ModelContent(role: "system", parts: [TextPart($0)]) }
		))
	}
}
