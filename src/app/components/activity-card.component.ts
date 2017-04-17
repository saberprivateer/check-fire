import { Component, OnInit } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from '../services/activity.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
	selector: 'activity-card',
	templateUrl: './activity-card.component.html',
	providers: [ActivityService]
})

export class ActivityCard implements OnInit {
	// activities: FirebaseObjectObservable<any[]>;
	activities: Activity[];
	constructor(private activityService: ActivityService) { }

	getActivities(): void {
		this.activities = this.activityService.getActivities();
	}

	ngOnInit(): void {
		this.getActivities();
	}

}
