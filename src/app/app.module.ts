import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { AppComponent } 	from './app.component';
import { MaterialModule } 	from '@angular/material';
import { MaterialExample } 	from './material-example';
import { LogToolbar }		from './log-toolbar.component';

@NgModule({
  imports:      [ 
  	BrowserModule, 
  	MaterialModule,
  	FormsModule, 
  ],
  declarations: [ 
  	AppComponent, 
  	MaterialExample,
  	LogToolbar,
  ],
  bootstrap:    [ 
  	AppComponent, 
  	MaterialExample, 
  	LogToolbar,
  ],
  providers: []
})
export class AppModule { }
