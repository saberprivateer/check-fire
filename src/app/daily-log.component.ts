import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'daily-log',
	templateUrl: './daily-log.component.html'
})

export class DailyLogComponent {
constructor(
	private route: ActivatedRoute
	) {}
}
