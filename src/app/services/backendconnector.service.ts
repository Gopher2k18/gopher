import { Card } from './../models/card';
import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../models/location';
import { Filter } from '../models/filter';
import { from, Observable } from 'rxjs';

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = 'https://gopher-backend.herokuapp.com/events';
  confluenceUrl = 'https://gopher-backend.herokuapp.com/blogs';

  token = 'faketoken';

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

  starred = new Set();

  constructor(private http: HttpClient) { }

  public getConBlogs() {
    return this.http.get(this.confluenceUrl);
  }

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

  public star(card: Card) {
    if (this.starred.has(card)) {
      this.starred.delete(card);
    } else {
      this.starred.add(card);
    }
    console.log(this.starred);
  }

  public getStarred(): Card[] {
    const stard = [];
    this.starred.forEach((val, val2, set) => {
      stard.push(val);
    });
    return stard.sort((a: Card, b: Card) => {
      if (a.time < b.time) {
        return 1;
      } else {
        return -1;
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

  public login() {
    localStorage.setItem('token', this.token);
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public showOnlyWhenLogged(): boolean{
    if(localStorage.getItem('token') == null){
      return false;
    }else{
      return true;
    }

  }
}
