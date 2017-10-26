import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PeopleService } from './people.service';
import { PeopleComponent } from './people-list.component';
import { PeopleDetailsComponent } from './people-details.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [PeopleService],
  declarations: [
    PeopleComponent,
    PeopleDetailsComponent
  ],
  exports: [
    PeopleComponent,
    PeopleDetailsComponent
  ]
})
export class PeopleModule { }
