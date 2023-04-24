import { IProvider, IUI } from '.';

export class ProviderBase implements IProvider {
	getNative(ui: IUI): any {
		return null;
	}
}
