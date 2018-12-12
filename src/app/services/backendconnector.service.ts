import { Blog } from './../models/blog';
import { Card } from './../models/card';
import { Message } from './../models/message';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = 'https://gopher-backend.herokuapp.com/events';
  confluenceUrl = 'https://gopher-backend.herokuapp.com/blogs';

  token = 'faketoken';

  slackMessages: Card[] = [];
  slackFetched = false;
  slackFilter: Map<string, boolean> = new Map();
  confMessages: Card[] = [];
  confFetched = false;
  confFilter: Map<string, boolean> = new Map();

  constructor(private http: HttpClient) { }

  /* Fetches slack messages from the backend in not already
  fetched and store them in memeory after than returns a filtered set of messages
  */
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

  // Fetches slack filter status
  getSlackFilter(): Map<string, boolean> {
    return this.slackFilter;
  }

  /* Same as slack method, fetches data from server, then provides the data from memeory, filtered.
  */
  public getConfMessages() {
    if (this.confFetched) {
      console.log(this.confFilter);
      const banned = [];
      this.confFilter.forEach((val, key, map) => {
        if (!val) {
          banned.push(key);
        }
      });
      console.log(banned);
      const filtered = this.confMessages.filter((val, ind, arr) => {
        return val.searchable.every((tag, index, arra) => {
          return !banned.includes(tag);
        });
      });
      return from(filtered);

    } else {
      console.log(this.confMessages);
      const obs = new Observable((observer) => {
        const msgArray: Card[] = [];
        this.http.get(this.confluenceUrl).subscribe((response: []) => {
          response.forEach(element => {
            const msg = new Blog(element).toCard();
            console.log(msg);
            msg.searchable.forEach((val, ind, arr) => {
              this.confFilter.set(val, true);
            });
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

  // Return filter values
  getConfFilter(): Map<string, boolean> {
    return this.confFilter;
  }

  // Finds a message in the array and switches it's favorite status
  public star(card: Card) {
    if (card.source === 'slack') {
      const ind = this.slackMessages.indexOf(card);
      this.slackMessages[ind].flip();
    } else {
      const ind = this.confMessages.indexOf(card);
      this.confMessages[ind].flip();
    }
  }

  // Return all stared elements from both arrays
  public fetchStars(): Card[] {
    const all = this.confMessages.concat(this.slackMessages);
    const filtered = all.filter((value, index, array) => {
      return value.starred;
    });
    return filtered.sort((a, b) => {
      return (a.time < b.time) ? 1 : -1;
    });

  }

  /*
    Put fake token to local storage so that buttons in top and bottom bars will be shown
  */
  public login() {
    localStorage.setItem('token', this.token);
  }

  /*
    Remove the fake token from local storage, so buttons in top and bottom bars are not shown
  */
  public logout() {
    localStorage.removeItem('token');
  }

  /*
    For html, check wether there is token in localstorage, which means, that
    one is logged in and components in topbar and tabbar are mean to show
  */
  public showOnlyWhenLogged(): boolean {
    if (localStorage.getItem('token') == null) {
      return false;
    } else {
      return true;
    }

  }
}
