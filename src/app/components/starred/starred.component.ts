import { Message } from './../../models/message';
import { BackendconnectorService } from './../../services/backendconnector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {


  messages: Message[] = [];
  filteredmessages: Message[] = [];

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router) { }

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
