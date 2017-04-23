import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { DailyLogComponent } from './daily-log.component';
import { ActivityCard } from './components/activity-card.component';
import { ParentNote } from './components/parent-note.component';
import { LogToolbar } from './components/log-toolbar.component';
import { DailyNotes } from './components/daily-notes.component';
import 'rxjs/add/operator/map'

export const firebaseConfig = {
    apiKey: 'AIzaSyDG6zuWIYXHq2SNpK8KJil10X6g2Pp7pQI',
    authDomain: 'nannylog-6746e.firebaseapp.com',
    databaseURL: 'https://nannylog-6746e.firebaseio.com',
    projectId: 'nannylog-6746e',
    storageBucket: 'nannylog-6746e.appspot.com',
    messagingSenderId: '514646801815'
};

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
      AngularFireModule.initializeApp(firebaseConfig),
      AppRoutingModule
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
/*      DailyLogComponent,
      ActivityCard,
      ParentNote,
      LogToolbar,
      DailyNotes,*/
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

  })

export class AppModule { }
