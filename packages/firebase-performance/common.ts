import { FirebaseApp } from '@nativescript/firebase-core';

export enum HttpMethod {
	GET = 'GET',
	HEAD = 'HEAD',
	PUT = 'PUT',
	POST = 'POST',
	PATCH = 'PATCH',
	TRACE = 'TRACE',
	DELETE = 'DELETE',
	CONNECT = 'CONNECT',
	OPTIONS = 'OPTIONS',
}

export interface ITrace {
	getAttribute(attribute: string): string | null;
	getMetric(metricName: string): number;
	getMetrics(): { [key: string]: number };
	incrementMetric(metricName: string, incrementBy: number): void;
	putAttribute(attribute: string, value: string): void;
	putMetric(metricName: string, value: number): void;
	removeMetric(metricName: string): void;
	start();
	stop();
}

export interface IHttpMetric {
	getAttribute(attribute: string): string | null;
	getAttributes(): { [key: string]: string };
	putAttribute(attribute: string, value: string): void;
	removeAttribute(attribute: string): void;
	setHttpResponseCode(code: number | null): void;
	setRequestPayloadSize(bytes: number | null): void;
	setResponseContentType(contentType: string | null): void;
	setResponsePayloadSize(bytes: number | null): void;
	start();
	stop();
}

export interface IPerformance {
	app: FirebaseApp;
	isPerformanceCollectionEnabled: boolean;
	newHttpMetric(url: string, httpMethod: HttpMethod): IHttpMetric;
	newTrace(identifier: string): ITrace;
	startTrace(identifier: string): ITrace;
}
