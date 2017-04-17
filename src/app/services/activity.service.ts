import { Injectable } from '@angular/core';

import { Activity } from '../components/activity';
import { ACTIVITIES } from '../data/mock-activity';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFire, AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ActivityService {
/*	items: FirebaseObjectObservable<any[]>;
	constructor(public af: AngularFire) {
		this.items = af.database.object('/Activities', { preserveSnapshot: true });
	}*/

		items: FirebaseListObservable<any[]>;
	constructor(public af: AngularFire) {
		this.items = af.database.list('/Activities');
		this.items.$ref
		.on('value', snapshot => {
			console.log(snapshot.val());
		});

	}

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
