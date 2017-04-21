import { Component, OnInit } from '@angular/core';
import { Activity } from './activity';
import { ActivityService } from '../services/activity.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../services/helper.service';

@Component({
	selector: 'activity-card',
	templateUrl: './activity-card.component.html',
	//template: `<h1>{{ (what).activity_verb }}</h1>`,
	providers: [ActivityService]
	//providers: [FirebaseService]
})

export class ActivityCard implements OnInit {
	// activities: FirebaseObjectObservable<any[]>;
	activities: Observable<any[]>;
	// what: Observable<Activity[]>;
	constructor(private activityService: ActivityService) { }
// constructor(private db: AngularFire) {}
			//this.what = db.database.list('/Activities/1');
		//console.log(this.what);

// constructor(private firebaseService:FirebaseService) {}

	/*getActivitiesFirebase(): void {
		this.what = this.activityService.getActivitiesFirebase();
		console.log("fire service: "+this.what);
	}*/

	getActivities(): void {
		//this.activities = this.firebaseService.get('/Activities/3/activity')
		//this.activities = this.db.database.object('/Activities/1');
		//console.log(this.activities);
		// .map(res => res.json());
		//this.activities = this.activityService.getActivities();
		this.activities = this.activityService.getActivitiesFirebase();
	}

	ngOnInit(): void {
		this.getActivities();
		// this.activityService.getActivitiesFirebase();
	}

}
