import { Card } from './../../models/card';
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


  cards: Card[] = [];

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router) { }

  ngOnInit() {
    this.cards = this.backendconnectorService.getStarred();
  }
}
