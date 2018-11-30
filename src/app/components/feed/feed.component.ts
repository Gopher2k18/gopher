import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {DatePipe} from '@angular/common';
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
  previous_time: string = '';
  current_day: string = '';
  dates : string[] = [];
  earlier_date: '';



  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router, private datePipe: DatePipe) { }

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
      //this.current_day = this.datePipe.transform(new Date());
      //console.log('today is ' + this.current_day);



    })

  }

  show_date(given_date_string: string): boolean{

    if(given_date_string != undefined){
      const given_date = this.datePipe.transform(new Date(Number(given_date_string)*1000));
      for(let i = 0; i < this.dates.length; ++i){
        if(this.dates[i] == given_date){
          console.log(given_date);
          return false;
        }
      }

      this.dates.push(given_date);
      console.log('date pushed');
      return true;
    }else{
      return false;
    }

  }

}
