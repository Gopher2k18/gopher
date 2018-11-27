import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location} from '../models/location';
import {Filter} from '../models/filter';

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

  constructor(private http: HttpClient) { }


  public getSlackMessages(){
    return this.http.get(this.slackMessagesUrl);
  }

  public getLocations(){
    return this.locations;
  }

  public setLocations(new_locations: Location){
    this.locations = new_locations;
  }

  public getFilters(){
    return this.filters;
  }

  public setFilters(new_filters: Filter){
    this.filters = new_filters;
  }


}
