import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
// This lets typescript know that toastr is available elsewhere (globally scoped)
// declare let toastr

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <!-- [event] is the @Input parameter -->
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService, private toastr: ToastrService) {

    }
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        console.log('Toastr success');
        // this.toastr.success(eventName);
    }

}
