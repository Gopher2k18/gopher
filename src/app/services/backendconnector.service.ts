import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location';
import { Filter } from '../models/filter';
import { from, Observable } from 'rxjs';

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = 'https://gopher-backend.herokuapp.com/events';
  locations: Location = {
    helsinki: true,
    tampere: false,
    jyvaskyla: false,
    madrid: false,
    london: false,
    new_york: false
  };

  filters: Filter = {
    meeting: true,
    event: true,
    glt: true,
    club: true
  };

  slackMessages: Message[] = null;

  constructor(private http: HttpClient) { }


  public getSlackMessages() {
    if (!(this.slackMessages === null)) {
      console.log('OLD ONE');
      return from(this.slackMessages);
    } else {
      console.log(this.slackMessages);
      const obs = new Observable((observer) => {
        const msgArray: Message[] = [];
        this.http.get(this.slackMessagesUrl).subscribe((response: []) => {
          response.forEach(element => {
            const msg = new Message(element);
            console.log(element);
            msgArray.push(msg);
            observer.next(msg);
          });
          this.slackMessages = msgArray;
          observer.complete();
          return { unsubscribe() { } };
        });
      });
      return obs;
    }
  }

  public flip(ts) {
    this.slackMessages.find((msg, idx, obj) => {
      if (msg.time_send === ts) {
        console.log(`Found it ${idx}, ${msg.favourite}`);
        msg.flip();
        obj[idx] = msg;
        return true;
      } else {
        return false;
      }
    });
  }

  public getLocations() {
    return this.locations;
  }

  public setLocations(new_locations: Location) {
    this.locations = new_locations;
  }

  public getFilters() {
    return this.filters;
  }

  public setFilters(new_filters: Filter) {
    this.filters = new_filters;
  }


}
