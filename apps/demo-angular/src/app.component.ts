import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
	selector: 'demo-app',
	template: `<GridLayout>
		<page-router-outlet></page-router-outlet>
	</GridLayout>`,
})
export class AppComponent {
	constructor(appService: AppService){}
}
