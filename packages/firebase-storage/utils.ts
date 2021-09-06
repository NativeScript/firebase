export function b64WithoutPrefix(b64) {
	return b64.split(',')[1];
}

export function getMIMEforBase64String(b64) {
	return b64.split(',')[0]?.replace(';base64', '')?.replace('data:', '') ?? 'application/octet-stream';
}
