export const enum TaskState {
	CANCELLED = 'cancelled',
	ERROR = 'error',
	PAUSED = 'paused',
	RUNNING = 'running',
	SUCCESS = 'success',
	UNKNOWN = 'unknown',
}

export const enum TaskEvent {
	STATE_CHANGED = 'state_changed',
}

export const enum StringFormat {
	BASE64 = 'base64',
	BASE64URL = 'base64url',
	DATA_URL = 'data_url',
	RAW = 'raw',
}
