export enum TaskState {
	CANCELLED = 'cancelled',
	ERROR = 'error',
	PAUSED = 'paused',
	RUNNING = 'running',
	SUCCESS = 'success',
	UNKNOWN = 'unknown',
}

export enum TaskEvent {
	STATE_CHANGED = 'state_changed',
}

export enum StringFormat {
	BASE64 = 'base64',
	BASE64URL = 'base64url',
	DATA_URL = 'data_url',
	RAW = 'raw',
}
