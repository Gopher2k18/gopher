import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {Events} from '../../models/events';
import {Activity} from '../../mock-events';
import { CalendarListService } from '../../calendar-list.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {

  
  //calendarOptions: Options;
 // @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

 // events: Events[];

  constructor() {}

   // getEvents(): void {
    //  this.CalendarListService.getEvents()
     // .subscribe(events => this.events = events);
   // }

  ngOnInit() {

  }
}
