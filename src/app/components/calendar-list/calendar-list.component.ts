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
  selectedId = 'empty';

  constructor(private calendarlistService: CalendarListService) {}

  ngOnInit() {
    this.getEvents();
  }

  select(id:string,d: string) {
    console.log('current id: '+id);
    console.log('sselected id: '+ this.selectedId);
    this.selectedDay = d;    
    document.getElementById(id).style.fontWeight = "bold";
    document.getElementById(this.selectedId).style.fontWeight = "normal";
    this.selectedId = id;
  }

  getEvents(): void {
    this.calendarlistService.getEvents()
    .subscribe(events => this.events = events);
  }

}
