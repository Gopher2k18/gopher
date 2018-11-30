import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

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
    this.backendconnectorService.getSlackMessages().subscribe({
      next: (x: Message) => this.messages.push(x),
      complete: () => {
        this.messages.reverse();
      }
    });
  }
}
