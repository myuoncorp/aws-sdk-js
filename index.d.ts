import { ServerResponse, ClientRequest } from 'https'
import { GlobalConfigInstance } from './lib/config';

export * from './lib/core';
export * from './clients/all';
export var config: GlobalConfigInstance

export class NodeHttpClient {
	handleRequest(
		httpRequest: AWS.HttpRequest,
		httpOptions: any,
		callback: (res: ServerResponse) => void,
		errCallback: (err: Error) => void): ClientRequest
}

export namespace Signers {
	export class V4 {
		constructor(req: AWS.HttpRequest, serviceName: string)
		addAuthorization(creds: AWS.EnvironmentCredentials, date: Date): void
	}
}

export as namespace AWS;