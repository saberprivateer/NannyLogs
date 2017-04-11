import { Injectable } from '@angular/core';

import { Activity } from '../activity';
import { ACTIVITIES } from '../data/mock-activity';

@Injectable()
export class ActivityService {
	getActivities(): Activity[] {
		return ACTIVITIES;
	}
//	getActivities(): Promise<Activity[]> {
//		return Promise.resolve(ACTIVITIES);
	}
}