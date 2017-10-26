import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PeopleModule } from './domain/people/people.module';

import { AppComponent } from './app.component';

import { peopleReducer } from './domain/people/people.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({people: peopleReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
