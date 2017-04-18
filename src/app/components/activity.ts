import 'rxjs/add/operator/map';

export class Activity {
	activity_icon?: string;
	activity_verb?: string;

	static fromJsonList(array): Activity[] {
		return array.map(Activity.fromJson);
	}

	static fromJson({activity_icon, activity_verb}): Activity {
		return new Activity('activity_icon': activity_icon, 'activity_verb': activity_verb);
		//return;
	}
}
