import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/index";

@Component({
    templateUrl: 'create-event.component.html',
    styles:[`
    em { float:right; color:#E05C65; padding-left: 10px; }
    .error input { background-color:#E05C65; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-holder { color: #999; }
  `]
})

export class CreateEventComponent{
    newEvent:any = []
    isDirty = true
    constructor(private rounter:Router, private eventService:EventService){

    }

    saveEvent(fromValues:any){
        this.eventService.saveEvent(fromValues).subscribe(()=>{
            this.isDirty=false
            this.rounter.navigate(['/events'])
        })
    }
 
    cancel(){
        this.rounter.navigate(['/events'])
    }
}