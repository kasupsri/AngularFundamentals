import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventResolver,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { 
  IToastr, 
  TOASTR_TOKEN, 
  JQ_TOKEN, 
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective 
} from './common/index';
import { appRoutes } from '../routes';
import { Error404Component } from './errors/404.components';
import { AuthService } from './user/auth.service';

declare let toastr:IToastr
const jQuery:any = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator,
    ModalTriggerDirective,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules}),
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide:TOASTR_TOKEN, useValue:toastr }, 
    { provide:JQ_TOKEN, useValue:jQuery },
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
} 