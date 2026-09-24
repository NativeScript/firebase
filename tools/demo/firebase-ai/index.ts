import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-ai';
import { DemoSharedBase } from '../utils';

export class DemoSharedFirebaseAi extends DemoSharedBase {
	async testIt() {
		try {
			const model = firebase().ai().generativeModel({ model: 'gemini-2.5-flash' });
			const response = await model.generateContent('Write a haiku about NativeScript.');
			console.log('firebase-ai generateContent:', response.text);
		} catch (error) {
			console.log('firebase-ai error:', error);
		}
	}

	async testStream() {
		try {
			const model = firebase().ai().generativeModel({ model: 'gemini-2.5-flash' });
			await model.generateContentStream('Count to five.', (chunk) => {
				console.log('firebase-ai chunk:', chunk.text);
			});
		} catch (error) {
			console.log('firebase-ai stream error:', error);
		}
	}

	async testChat() {
		try {
			const model = firebase().ai().generativeModel({ model: 'gemini-2.5-flash' });
			const chat = model.startChat();
			console.log('firebase-ai chat:', (await chat.sendMessage('My name is Ada.')).text);
			console.log('firebase-ai chat:', (await chat.sendMessage('What is my name?')).text);
		} catch (error) {
			console.log('firebase-ai chat error:', error);
		}
	}
}
