import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message'
import {BackendconnectorService} from '../../services/backendconnector.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  message: Message = {
    id: 0,
    user: '',
    message: '',
    channel: '',
    tags: [],
    time_send: ''
  };

  text: any;

  messages: Message[] = [];

  constructor(private backendconnectorService: BackendconnectorService) { }

  ngOnInit() {
    this.backendconnectorService.getSlackMessages().subscribe(
      (response: Message[]) => {
      this.messages = response;
    });
  }

}
