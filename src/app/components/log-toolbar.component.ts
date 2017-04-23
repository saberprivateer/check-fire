import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'log-toolbar',
	templateUrl: './log-toolbar.html',
	// styleUrls: ['./log-toolbar.css'],
})
export class LogToolbar implements OnInit {
	date = 'April 4th';

	constructor(
		private route: ActivatedRoute,
		private location: Location
		) {}

	ngOnInit(): void {
		//this.route.params
		//.switchMap((params: Params) => this.
	}

	goBack(): void {
		this.location.back();
	}
}
