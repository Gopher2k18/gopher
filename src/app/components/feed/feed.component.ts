import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {BackendconnectorService} from '../../services/backendconnector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  text: any;
  //favourite:boolean = false;

  // toggle():void{
  //   this.favourite = !this.favourite;
  // }

  messages: Message[] = [];
  filteredmessages: Message[] = [];

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router) { }

    /*
    applyFilters(filtered: Message[]){
    for(let mes in this.messages){
    //this.filteredmessages.push(mes);
  }
}*/

selectedMessage: Message;

onSelect(message: Message): void {
  this.selectedMessage = message;
  this.selectedMessage.favourite = !this.selectedMessage.favourite;
}

ngOnInit() {
  this.backendconnectorService.getSlackMessages().subscribe(
    (response: Message[]) => {
      console.log(response.length);

      response.forEach(element => {
        this.messages.push(new Message(element));
      });
      
      this.messages.reverse();
      console.log(this.messages.length)
      for(let i = 0; i<this.messages.length;++i){
        if(this.messages[i].time_send != undefined){
          //console.log(this.messages[i].time_send);
          const unixarray = this.messages[i].time_send.split('.');
          console.log(unixarray[0]);
          const date = new Date(Number(unixarray[0])*1000);
          console.log('date is' + date);
          this.messages[i].time_send = date.getHours()+':' + date.getMinutes()+ ' ' + date.getDate()+'.'+ date.getMonth()+ '.' +date.getFullYear();
        }

      }

    })

  }
}
