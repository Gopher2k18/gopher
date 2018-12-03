import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Events} from '../models/events';
import {Activity} from '../mock-events';

@Injectable({
  providedIn: 'root'
})
export class CalendarListService {

  getEvents(): Observable<Events[]> {
    return of(Activity);
  }

  constructor() { }
}
