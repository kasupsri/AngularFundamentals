import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './shared/index'


@Component({
    template: `
    <div>
        <h1>Upcomming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `,
    styles:[`
    .well div { color: red; }
    `]
})
export class EventListComponent implements OnInit{
    events: IEvent[] = []; 
    
    constructor(private eventSerice: EventService, private route:ActivatedRoute){
        
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
}