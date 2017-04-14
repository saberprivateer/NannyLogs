import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { DailyLogComponent } from './daily-log.component';
import { ActivityCard } from './components/activity-card.component';
import { ParentNote } from './components/parent-note.component';
import { LogToolbar } from './components/log-toolbar.component';
import { DailyNotes } from './components/daily-notes.component';

@NgModule(
  {
    imports:
    [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
    ],
    declarations: [
      AppComponent,
      DailyLogComponent,
      ActivityCard,
      ParentNote,
      LogToolbar,
      DailyNotes,
    ],
    bootstrap: [
      AppComponent,
      DailyLogComponent,
      ActivityCard,
      ParentNote,
      LogToolbar,
      DailyNotes,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  })

export class AppModule { }
