import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class FakeforconService {

  confluenceUrl = 'https://gopher-backend.herokuapp.com/blogs';

  constructor(private http: HttpClient) {}

  public getConBlogs() {
    return this.http.get(this.confluenceUrl);
  }
}
