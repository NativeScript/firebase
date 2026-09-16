# @nativescript/firebase-ai

Call Gemini models from a NativeScript app through
[Firebase AI Logic](https://firebase.google.com/docs/ai-logic), which proxies requests so your
API key never ships in the app.

* [Installation](#installation)
* [Prerequisites](#prerequisites)
* [Usage](#usage)
	* [Generate text](#generate-text)
	* [Stream a response](#stream-a-response)
	* [Multi-turn chat](#multi-turn-chat)
	* [Send an image](#send-an-image)
	* [Count tokens](#count-tokens)
	* [Choose a backend](#choose-a-backend)
* [API](#api)

## Installation

```cli
npm install @nativescript/firebase-ai
```

## Prerequisites

- `@nativescript/firebase-core` set up for your app.
- The **Firebase AI Logic** API enabled in the Firebase console, and the Gemini Developer API
  (or Vertex AI) turned on for your project.
- [@nativescript/firebase-app-check](../firebase-app-check/README.md) is strongly recommended —
  without it your Firebase project's AI quota is open to anyone who extracts your config.

## Usage

Import the plugin once, near your app bootstrap, to attach `ai()` to the `firebase()` instance:

```ts
import '@nativescript/firebase-ai';
```

### Generate text

```ts
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-ai';

const model = firebase().ai().generativeModel({ model: 'gemini-2.5-flash' });

const response = await model.generateContent('Write a haiku about mobile apps.');
console.log(response.text);
```

`generateContent()` accepts a plain string, an array of parts for a single user turn, or explicit
multi-turn `Content[]`.

### Stream a response

```ts
await model.generateContentStream('Explain gradient descent.', (chunk) => {
	console.log(chunk.text);
});
```

The promise resolves once the stream completes and rejects if it errors part way through.

### Multi-turn chat

```ts
const chat = model.startChat([
	{ role: 'user', parts: [{ text: 'My name is Ada.' }] },
	{ role: 'model', parts: [{ text: 'Nice to meet you, Ada.' }] },
]);

const reply = await chat.sendMessage('What is my name?');
console.log(reply.text);
console.log(chat.history.length);
```

### Send an image

Inline data is passed as base64:

```ts
import { ImageSource } from '@nativescript/core';

const image = await ImageSource.fromUrl('https://example.com/cat.png');

const response = await model.generateContent([
	{ text: 'What is in this picture?' },
	{ inlineData: { data: image.toBase64String('png'), mimeType: 'image/png' } },
]);
```

### Count tokens

```ts
const tokens = await model.countTokens('How many tokens is this?');
```

### Choose a backend

The Gemini Developer API is used by default. To use the Agent Platform Gemini API (formerly
Vertex AI) instead:

```ts
import { BackendType } from '@nativescript/firebase-ai';

const model = firebase()
	.ai({ backend: BackendType.AgentPlatform, location: 'global' })
	.generativeModel({ model: 'gemini-2.5-flash' });
```

`BackendType.VertexAI` still works and maps to the same backend, keeping the old `us-central1`
default location.

### Model configuration

```ts
import { HarmBlockThreshold, HarmCategory } from '@nativescript/firebase-ai';

const model = firebase().ai().generativeModel({
	model: 'gemini-2.5-flash',
	systemInstruction: 'You answer in one sentence.',
	generationConfig: {
		temperature: 0.2,
		maxOutputTokens: 256,
	},
	safetySettings: [{ category: HarmCategory.DangerousContent, threshold: HarmBlockThreshold.MediumAndAbove }],
});
```

## API

### firebase().ai(options?)

| Option | Type | Description |
| --- | --- | --- |
| `app` | `FirebaseApp` | The app to use. Defaults to the default app. |
| `backend` | `BackendType` | `GoogleAI` (default) or `AgentPlatform`. |
| `location` | `string` | Agent Platform region, defaulting to `global`. Ignored for the Google AI backend. |

### AI

| Method | Returns | Description |
| --- | --- | --- |
| `generativeModel(params)` | `GenerativeModel` | Creates a model. `params.model` is required, for example `gemini-2.5-flash`. |

### GenerativeModel

| Method | Returns | Description |
| --- | --- | --- |
| `generateContent(prompt)` | `Promise<GenerateContentResponse>` | Generates a single response. |
| `generateContentStream(prompt, onChunk)` | `Promise<void>` | Streams a response, calling `onChunk` per chunk. |
| `countTokens(prompt)` | `Promise<number>` | Counts the tokens the prompt would use. |
| `startChat(history?)` | `Chat` | Starts a multi-turn session. |

### Chat

| Member | Type | Description |
| --- | --- | --- |
| `history` | `Content[]` | The turns exchanged so far. |
| `sendMessage(prompt)` | `Promise<GenerateContentResponse>` | Sends a turn and returns the reply. |
| `sendMessageStream(prompt, onChunk)` | `Promise<void>` | Sends a turn and streams the reply. |

### GenerateContentResponse

| Property | Type | Description |
| --- | --- | --- |
| `text` | `string` | The concatenated text of the first candidate, if any. |
| `candidates` | `Candidate[]` | Every candidate with its finish reason and safety ratings. |
| `usageMetadata` | `UsageMetadata` | Prompt, candidate and total token counts. |
| `modelVersion` | `string` | The model version that produced the response. |
| `functionCalls` | `FunctionCall[]` | Function calls requested by the model (iOS). |

## License

Apache License Version 2.0
