import { Blog } from './../models/blog';
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

  slackMessages: Card[] = [];
  slackFetched = false;
  slackFilter: Map<string, boolean> = new Map();
  confMessages: Card[] = [];
  confFetched = false;
  confFilter = new Map();

  starred = new Set();

  constructor(private http: HttpClient) { }

  public getSlackMessages() {
    if (this.slackFetched) {
      console.log(this.slackFilter);
      const banned = [];
      this.slackFilter.forEach((val, key, map) => {
        if (!val) {
          banned.push(key);
        }
      });
      console.log(banned);
      const filtered = this.slackMessages.filter((val, ind, arr) => {
        return !banned.includes(val.header);
      });
      return from(filtered);
    } else {
      console.log(this.slackMessages);
      const obs = new Observable((observer) => {
        const msgArray: Card[] = [];
        this.http.get(this.slackMessagesUrl).subscribe((response: []) => {
          response.forEach(element => {
            const msg = new Message(element);
            const x = msg.toCard();
            this.slackFilter.set(x.header, true);
            msgArray.push(x);
            observer.next(x);
          });
          this.slackMessages = msgArray;
          observer.complete();
          console.log(this.slackFilter);
          this.slackFetched = true;
          return { unsubscribe() { } };
        });
      });
      return obs;
    }
  }

  getSlackFilter(): Map<string, boolean> {
    return this.slackFilter;
  }

  slackFilterChannel(channel: string) {
    
  }

  public getConfMessages() {
    if (this.confFetched) {
      console.log('OLD ONE conf');
      return from(this.confMessages);
    } else {
      console.log(this.confMessages);
      const obs = new Observable((observer) => {
        const msgArray: Card[] = [];
        this.http.get(this.confluenceUrl).subscribe((response: []) => {
          response.forEach(element => {
            const msg = new Blog(element).toCard();
            console.log(msg);
            msgArray.push(msg);
            observer.next(msg);
          });
          this.confMessages = msgArray;
          this.confFetched = true;
          observer.complete();
          return { unsubscribe() { } };
        });
      });
      return obs;
    }
  }

  public star(card: Card) {
    if (card.source === 'slack') {
      const ind = this.slackMessages.indexOf(card);
      this.slackMessages[ind].flip();
    } else {
      const ind = this.confMessages.indexOf(card);
      this.confMessages[ind].flip();
    }
  }

  public fetchStars(): Card[] {
    const all = this.confMessages.concat(this.slackMessages);
    const filtered = all.filter((value, index, array) => {
      return value.starred;
    });
    return filtered.sort((a, b) => {
      return (a.time < b.time) ? 1 : -1;
    });

  }

  public flip(ts) {
    this.slackMessages.find((msg, idx, obj) => {
      if (msg.time === ts) {
        console.log(`Found it ${idx}, ${msg.starred}`);
        msg.flip();
        obj[idx] = msg;
        return true;
      } else {
        return false;
      }
    });
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

  public showOnlyWhenLogged(): boolean {
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }

  }
}
