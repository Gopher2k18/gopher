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

  messages: Message[] = [];
  filteredmessages: Message[] = [];
  date_map = new Map<string,boolean>();



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
  this.backendconnectorService.getSlackMessages().subscribe({
    next: (x: Message) => this.messages.push(x),
    complete: () => {
      this.messages.reverse();
      this.collect_date_info();
    }
  });
}
/*
show_date(given_date_string: string): boolean{

console.log('gimme length: '+this.messages.length);

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
*/

show_date(date_to_shown: string): boolean{
  console.log(this.date_map[date_to_shown]);
  return this.date_map.get(date_to_shown);
}

collect_date_info(){
  console.log('---testing function output---');
  let date_before = '';
  let this_date = '';
  console.log(this.messages.length);
  if(this.messages.length>0){
    this.date_map.set(this.messages[0].time_send,true);
  }

  for(let i = 1; i < this.messages.length; ++i){

    date_before = this.datePipe.transform(new Date(Number(this.messages[i-1].time_send)*1000));
    this_date = this.datePipe.transform(new Date(Number(this.messages[i].time_send)*1000));
    if(date_before == this_date){
      this.date_map.set(this.messages[i].time_send,false);
    }else{
      this.date_map.set(this.messages[i].time_send,true);
    }

  }

}
