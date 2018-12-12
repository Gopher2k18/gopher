import { Component, OnInit, ViewChild } from '@angular/core';
import { Events } from '../../models/events';
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
  weekView = true;
  CurrentDay = 'empty';

  week1: string[] = ['10', '11', '12', '13', '14', '15', '16'];
  week2: string[] = ['17', '18', '19', '20', '21', '22', '23'];
  week3: string[] = ['24', '25', '26', '27', '28', '29', '30'];

  selectedWeek: string[] = this.week1;

  constructor(private calendarlistService: CalendarListService) { }

  ngOnInit() {
    this.getEvents();


    for (let i = 0; i < this.events.length; i++) {

      for (let j = 0; j < 7; j++) {

        if (this.events[i].day === this.selectedWeek[j]) {

          const dd = '' + j;

          document.getElementById(dd).style.backgroundColor = '#ffff66';

        }
      }
    }
  }

  // switching week with the left and right arrow
  switchWeek(id: string) {

    // switch to pervious week
    if (id === 'left') {
      if (this.selectedWeek == this.week2) {
        this.selectedWeek = this.week1;
      } else if (this.selectedWeek == this.week3) {
        this.selectedWeek = this.week2;
      }
    }

    // switch to next week
    if (id === 'right') {
      if (this.selectedWeek == this.week2) {
        this.selectedWeek = this.week3;
      } else if (this.selectedWeek == this.week1) {
        this.selectedWeek = this.week2;
      }
    }

    // clear the background color to whitesmoke
    for (var i = 0; i < 7; i++) {

      let d = '' + i;
      document.getElementById(d).style.backgroundColor = 'whitesmoke';

    }

    // when there is/are event(s), backgroud color turn to yellow
    for (let i = 0; i < this.events.length; i++) {

      for (let j = 0; j < 7; j++) {

        if (this.events[i].day === this.selectedWeek[j]) {

          const dd = '' + j;

          document.getElementById(dd).style.backgroundColor = '#ffff66';

        }
      }
    }

  }

  // (not used) when seleted, the font will be bold
  select(id: string, d: string) {
    console.log('current id: ' + id);
    console.log('sselected id: ' + this.selectedId);
    this.selectedDay = d;
    document.getElementById(id).style.fontWeight = 'bold';
    document.getElementById(this.selectedId).style.fontWeight = 'normal';
    this.selectedId = id;
    this.weekView = false;
    console.log(this.weekView);
  }

  getEvents(): void {
    this.calendarlistService.getEvents()
      .subscribe(events => this.events = events);
  }

}
