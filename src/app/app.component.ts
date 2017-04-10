import { Component } 		from '@angular/core';
import { MaterialExample } 	from './material-example';
import { ParentNote } 		from './parent-note.component';

@Component({
  selector: 'my-app',
  template: `
  <log-toolbar></log-toolbar>
  <parent-note></parent-note>
  <material-example></material-example>
  `,
})
export class AppComponent  { name = 'Angular'; }
