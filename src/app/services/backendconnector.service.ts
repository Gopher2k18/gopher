import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BackendconnectorService {

  slackMessagesUrl = 'http://localhost:3000/slack'

  constructor(private http: HttpClient) { }


  public getSlackMessages(){
    return this.http.get(this.slackMessagesUrl);
  }
}
