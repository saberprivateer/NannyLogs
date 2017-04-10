import { Component } from '@angular/core';
import { MaterialExample } from './material-example';

@Component({
  selector: 'my-app',
  template: `
  <log-toolbar></log-toolbar>
  <h1>Hello {{name}}</h1>
  <material-example></material-example>
  `,
})
export class AppComponent  { name = 'Angular'; }
