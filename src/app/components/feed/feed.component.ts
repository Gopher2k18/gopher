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
    location: '',
    tags: [],
    time_send: ''
  };

  text: any;

  messages: Message[] = [];
  filteredmessages: Message[] = [];

  constructor(private backendconnectorService: BackendconnectorService) { }


  applyFilters(filtered: Message[]){
    for(let mes in this.messages){
        this.filteredmessages.push(mes);
    }
  }

  ngOnInit() {
    this.backendconnectorService.getSlackMessages().subscribe(
      (response: Message[]) => {
      console.log('see');
      this.messages = response;
      console.log(this.messages.length)
      for(let i = 0; i<this.messages.length;++i){
          if(this.messages[i].location==='Helsinki'){
            console.log(this.messages[i].message);
          }
      }

    })/*.then({
      this.applyFilters(this.messages);
    });*/
  }




}
