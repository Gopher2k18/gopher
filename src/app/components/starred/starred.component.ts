import { DateformatterPipe } from './../../pipes/dateformatter.pipe';
import { Card } from './../../models/card';
import { BackendconnectorService } from './../../services/backendconnector.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {


  messages: Card[] = [];
  empty: Boolean = false;
  prev = null;

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router, public pipeD: DateformatterPipe) { }

  ngOnInit() {
    this.messages = this.backendconnectorService.fetchStars();
    this.empty = this.messages.length ? false : true;

  }

  public checkDate(date: string): boolean {
    const y = this.pipeD.transform(date);
    const x = y !== this.prev;
    this.prev = y;
    return x;
  }
}
