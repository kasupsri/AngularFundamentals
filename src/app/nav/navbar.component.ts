import { Component } from '@angular/core'
import { ISession } from '../events/shared/event.model';
import { AuthService } from '../user/auth.service';
import { EventService } from '../events/index';

@Component({
    selector:'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles:[`
        .nav.nabbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none;}}
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent{
    searchTerm=""
    foundSessions:ISession[]

    constructor(public authService:AuthService, private eventService:EventService){

    }

    searchSessions(searchTerm:string){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions=>{
                this.foundSessions = sessions
            })
    }
}