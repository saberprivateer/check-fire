import { Component } from '@angular/core';

@Component({
	selector: 'parent-note',
	templateUrl: './parent-note.html',
})
export class ParentNote {
	mother = 'Kristin';
	father = 'Dan';
	parent_note = 'Lorem ipsum dolor sit amet, leo facilisis. Maecenas velit proin tellus, vel ipsum mollis.';
	child = 'Dustin';
}
