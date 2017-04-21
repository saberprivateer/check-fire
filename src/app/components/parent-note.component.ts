import { Component, OnInit } from '@angular/core';
import { parentNoteService } from '../services/parent-note.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'parent-note',
	templateUrl: './parent-note.html',
	providers: [ parentNoteService ]
})
export class ParentNote implements OnInit {

	parentNote: Observable<any[]>;

	constructor(private parentNoteService: parentNoteService) { }

	//mother = 'Kristin';
	//father = 'Dan';

	parent_note = 'Lorem ipsum dolor sit amet, leo facilisis. Maecenas velit proin tellus, vel ipsum mollis.';
	child = 'Dustin';

	getParentNote(): void {
		this.parentNote = this.parentNoteService.getParentNote();
	}

	ngOnInit(): void {
		this.getParentNote();
	}
}
