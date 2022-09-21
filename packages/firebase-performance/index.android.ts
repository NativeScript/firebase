import { deserialize, firebase, FirebaseApp } from '@nativescript/firebase-core';
import { HttpMethod, IHttpMetric, IPerformance, ITrace } from './common';

let defaultPerformance: Performance;

const fb = firebase();
Object.defineProperty(fb, 'performance', {
	value: () => {
		if (!defaultPerformance) {
			defaultPerformance = new Performance();
		}
		return defaultPerformance;
	},
	writable: false,
});

export class HttpMetric implements IHttpMetric {
	_native: com.google.firebase.perf.metrics.HttpMetric;

	static fromNative(metric: com.google.firebase.perf.metrics.HttpMetric) {
		if (metric instanceof com.google.firebase.perf.metrics.HttpMetric) {
			const result = new HttpMetric();
			result._native = metric;
			return result;
		}
		return null;
	}

	get native() {
		return this._native;
	}
	get android() {
		return this.native;
	}

	getAttribute(attribute: string): string {
		return this.native.getAttribute(attribute);
	}
	getAttributes(): { [key: string]: string } {
		return deserialize(this.native.getAttributes());
	}
	putAttribute(attribute: string, value: string): void {
		this.native.putAttribute(attribute, value);
	}
	removeAttribute(attribute: string): void {
		this.native.removeAttribute(attribute);
	}
	setHttpResponseCode(code: number): void {
		this.native.setHttpResponseCode(code);
	}
	setRequestPayloadSize(bytes: number): void {
		this.native.setRequestPayloadSize(bytes);
	}
	setResponseContentType(contentType: string): void {
		this.native.setResponseContentType(contentType);
	}
	setResponsePayloadSize(bytes: number): void {
		this.native.setResponsePayloadSize(bytes);
	}
	start() {
		this.native.start();
	}
	stop() {
		this.native.stop();
	}
}

export class Trace implements ITrace {
	_native: com.google.firebase.perf.metrics.Trace;
	static fromNative(trace: com.google.firebase.perf.metrics.Trace) {
		if (trace instanceof com.google.firebase.perf.metrics.Trace) {
			const result = new Trace();
			result._native = trace;
			return result;
		}
		return null;
	}
	get native() {
		return this._native;
	}
	get android() {
		return this.native;
	}

	getAttribute(attribute: string): string {
		return this.native.getAttribute(attribute);
	}
	getMetric(metricName: string): number {
		return this.native.getLongMetric(metricName);
	}
	getMetrics(): { [key: string]: number } {
		return deserialize(this.native.getAttributes());
	}
	incrementMetric(metricName: string, incrementBy: number): void {
		this.native.incrementMetric(metricName, incrementBy);
	}
	putAttribute(attribute: string, value: string): void {
		this.native.putAttribute(attribute, value);
	}
	putMetric(metricName: string, value: number): void {
		this.native.putMetric(metricName, value);
	}
	removeMetric(metricName: string): void {
		this.native.removeAttribute(metricName);
	}
	start() {
		this.native.start();
	}
	stop() {
		this.native.stop();
	}
}

export class Performance implements IPerformance {
	_native: com.google.firebase.perf.FirebasePerformance;
	_app: FirebaseApp;

	constructor() {
		if (defaultPerformance) {
			return defaultPerformance;
		}
		defaultPerformance = this;
		this._native = com.google.firebase.perf.FirebasePerformance.getInstance();
	}

	get isPerformanceCollectionEnabled(): boolean {
		return this.native.isPerformanceCollectionEnabled();
	}

	set isPerformanceCollectionEnabled(value) {
		this.native.setPerformanceCollectionEnabled(value);
	}

	newHttpMetric(url: string, httpMethod: HttpMethod): HttpMetric {
		return HttpMetric.fromNative(this.native.newHttpMetric(url, httpMethod));
	}
	newTrace(identifier: string): Trace {
		return Trace.fromNative(this.native.newTrace(identifier));
	}

	startTrace(identifier: string): Trace {
		const trace = this.newTrace(identifier);
		trace.start();
		return trace;
	}

	get native() {
		return this._native;
	}
	get android() {
		return this.native;
	}

	get app(): FirebaseApp {
		if (!this._app) {
			// @ts-ignore
			this._app = FirebaseApp.fromNative(this.native.app);
		}
		return this._app;
	}
}
