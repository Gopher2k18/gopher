import { Component, OnInit, ViewChild } from '@angular/core';
import {Events} from '../../models/events';
import {Activity} from '../../mock-events';
import { CalendarListService } from '../../services/calendar-list.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {


 events: Events[];


  selectedDay = '';

  constructor(private calendarlistService: CalendarListService) {}

  ngOnInit() {
    this.getEvents();
  }

  select(d: string) {
    this.selectedDay = d;
  }

  getEvents(): void {
    this.calendarlistService.getEvents()
    .subscribe(events => this.events = events);
  }

}
