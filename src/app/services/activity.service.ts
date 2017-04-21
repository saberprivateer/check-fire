import { Inject, Injectable } from '@angular/core';

import { Activity } from '../components/activity';
import { ACTIVITIES } from '../data/mock-activity';
import { Subject } from 'rxjs/Rx';
import { AngularFire, AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable, FirebaseRef } from 'angularfire2';
import { database } from 'firebase';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivityService {
	// Activity: any;
/*	items: FirebaseObjectObservable<any[]>;
	constructor(public af: AngularFire) {
		this.items = af.database.object('/Activities', { preserveSnapshot: true });
	}*/

// getActivities():Observable<Activity[]> {
	getActivitiesFirebase(): Observable<any[]> {
		//return this.db.list('Activities').map(Activity.fromJsonList);
		return this.db.list('/Activities');
		// .map((response: Response) => <any[]>response.json())
		// .do(data => console.log("data we got is "+JSON.stringify(data)));
	}

	//	items: Observable<Activity[]>;
	constructor(private db: AngularFireDatabase) {}
	//	this.items = this.db.list('Activities')
	//	.do(console.log); }*/

	//.map(response => response.json());
	// 	items: FirebaseListObservable<any[]>;
	// constructor(public af: AngularFire) {
	// 	this.items = af.database.list('/Activities');
	// 	this.items.$ref
	// 	.on('value', snapshot => {
	// 		console.log(snapshot.val());
	// 	});

	// }

/*	getActivities() {
		return this.items;
	}
}
*/
	getActivities(): Activity[] {
		return ACTIVITIES;
	}
	// getActivities(): Promise<Activity[]> {
		// return Promise.resolve(ACTIVITIES);
		// }
	}
