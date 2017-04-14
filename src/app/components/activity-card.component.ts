import { Component } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from '../services/activity.service';

@Component({
	selector: 'activity-card',
	templateUrl: './activity-card.component.html',
	providers: [ActivityService]
})

export class ActivityCard {
	activities: Activity[];
	constructor(private activityService: ActivityService) { }

	getActivities(): void {
		this.activities = this.activityService.getActivities();
	}

	ngOnInit(): void {
		this.getActivities();
	}

}
