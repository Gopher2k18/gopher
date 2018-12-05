import { Card } from './../../models/card';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { DatePipe } from '@angular/common';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  messages: Card[] = [];
  filteredmessages: Message[] = [];
  date_map = new Map<string, boolean>();
  selectedMessage: Message;


  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router, private datePipe: DatePipe) { }





  onSelect(message: Message): void {
    this.selectedMessage = message;
    this.selectedMessage.favourite = !this.selectedMessage.favourite;
  }

  ngOnInit() {
    this.backendconnectorService.getSlackMessages().subscribe({
      next: (x: Card) => this.messages.push(x),
      complete: () => {
        this.messages.reverse();
        this.collect_date_info();
      }
    });
  }


  show_date(date_to_shown: string): boolean {
    return this.date_map.get(date_to_shown);
  }

  collect_date_info() {
    console.log('---testing function output---');
    let date_before = '';
    let this_date = '';
    console.log(this.messages.length);
    if (this.messages.length > 0) {
      this.date_map.set(this.messages[0].time, true);
    }

    for (let i = 1; i < this.messages.length; ++i) {

      date_before = this.datePipe.transform(new Date(Number(this.messages[i - 1].time) * 1000));
      this_date = this.datePipe.transform(new Date(Number(this.messages[i].time) * 1000));
      if (date_before === this_date) {
        this.date_map.set(this.messages[i].time, false);
      } else {
        this.date_map.set(this.messages[i].time, true);
      }

    }

  }

}
