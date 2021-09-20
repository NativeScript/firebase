export class HttpMetric implements IHttpMetric {
  readonly native: any;
  readonly ios: any;
  readonly android: any;

  getAttribute(attribute: string): string;

  getAttributes(): { [key: string]: string };

  putAttribute(attribute: string, value: string): void;

  removeAttribute(attribute: string): void;

  setHttpResponseCode(code: number): void;

  setRequestPayloadSize(bytes: number): void;

  setResponseContentType(contentType: string): void;

  setResponsePayloadSize(bytes: number): void;

  start();

  stop();
}

export class Trace implements ITrace {
  readonly native: any;
  readonly ios: any;
  readonly android: any;

  getAttribute(attribute: string): string;

  getMetric(metricName: string): number;

  getMetrics(): { [key: string]: number };

  incrementMetric(metricName: string, incrementBy: number): void;

  putAttribute(attribute: string, value: string): void;

  putMetric(metricName: string, value: number): void;

  removeMetric(metricName: string): void;

  start();

  stop();
}

export class Performance implements IPerformance {
  readonly native: any;
  readonly ios: any;
  readonly android: any;
  readonly app: any;

  constructor();

  isPerformanceCollectionEnabled: boolean;

  newHttpMetric(url: string, httpMethod: HttpMethod): HttpMetric;

  newTrace(identifier: string): Trace;

  startTrace(identifier: string): Trace;
}

declare module '@nativescript/firebase-core' {
  class Firebase {
    static performance(): Performance;
  }
}
