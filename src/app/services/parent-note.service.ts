import { Injectable } from '@angular/core';

import { AngularFire, AngularFireDatabase } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class parentNoteService {

	constructor(private db: AngularFireDatabase) {}
	
	getParentNote(): Observable<any[]> {
		//return this.db.list('Activities').map(Activity.fromJsonList);
		return this.db.list('Child/Dustin');
	}

}