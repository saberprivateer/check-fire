import 'rxjs/add/operator/map';

export class Activity {
	activity_icon?: string;
	activity_verb?: string;

	static fromJsonList(array): Activity[] {
		return array.map(Activity.fromJson);
	}

	static fromJson(activity_icon, activity_verb): Activity {
		let act = new Activity();
		act.activity_icon = activity_icon;
		act.activity_verb = activity_verb;
		return act;
		//return;
	}
}
