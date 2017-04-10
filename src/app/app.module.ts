import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule }                         from '@angular/platform-browser';
import { FormsModule }	                         from '@angular/forms';

import { AppComponent }       	from './app.component';
import { MaterialModule } 	    from '@angular/material';
import { MaterialExample }     	from './material-example';
import { ParentNote }           from './parent-note.component';
import { LogToolbar }	      	  from './log-toolbar.component';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	MaterialModule,
  	FormsModule, 
  ],
  declarations: [ 
  	AppComponent, 
  	MaterialExample,
    ParentNote,
  	LogToolbar,
  ],
  bootstrap:    [ 
  	AppComponent, 
  	MaterialExample,
    ParentNote, 
  	LogToolbar,
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
