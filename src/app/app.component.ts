import { Component, OnInit } 		from '@angular/core';
import { Activity }					from './activity';
import { ActivityService }			from './services/activity.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	providers: [ActivityService]
})
export class AppComponent  {

}
