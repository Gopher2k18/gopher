import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Connection} from '../models/connection';

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = Connection.address;

  constructor(private http: HttpClient) { }


  public getSlackMessages(){
    return this.http.get(this.slackMessagesUrl);
  }


}
