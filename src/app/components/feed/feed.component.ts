import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message'
//import {Slack} from '../../../../../json-server'
import {BackendconnectorService} from '../../services/backendconnector.service'
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    time_send: '',
    favourite: false
  };

  text: any;
  //favourite:boolean = false;

 // toggle():void{
 //   this.favourite = !this.favourite;
 // }

  messages: Message[] = [];
  filteredmessages: Message[] = [];

  constructor(private backendconnectorService: BackendconnectorService) { }


  applyFilters(filtered: Message[]){
    for(let mes in this.messages){
        //this.filteredmessages.push(mes);
    }
  }
  
  selectedMessage: Message;

  onSelect(message: Message): void {
    this.selectedMessage = message;
    this.selectedMessage.favourite = !this.selectedMessage.favourite;
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
