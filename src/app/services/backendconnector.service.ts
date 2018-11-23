import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = 'https://gopher-backend.herokuapp.com/events';

  constructor(private http: HttpClient) { }


  public getSlackMessages(){
    return this.http.get(this.slackMessagesUrl);
  }


}
