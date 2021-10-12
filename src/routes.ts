import { Routes } from '@angular/router'
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent
} from './app/events/index'
import { Error404Component } from './app/errors/404.components'


export const appRoutes:Routes = [
    { path: 'events/new', component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event:EventResolver} },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { 
        path: 'user', 
        loadChildren: () => import('./app/user/user.module')
        .then(m => m.UserModule) 
    }
]