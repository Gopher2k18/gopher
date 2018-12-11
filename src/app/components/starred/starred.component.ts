import { Card } from './../../models/card';
import { BackendconnectorService } from './../../services/backendconnector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {


  messages: Card[] = [];
  empty: Boolean = false;
  date_map = new Map<string, boolean>();

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router) { }

  ngOnInit() {
    this.messages = this.backendconnectorService.fetchStars();
    this.empty = this.messages.length ? false : true;

  }


  }
}
