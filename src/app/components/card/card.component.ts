import { BackendconnectorService } from './../../services/backendconnector.service';
import { Cardable } from './../../models/cardable';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from './../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public data: Cardable;

  public card: Card;

  constructor(private backendconnectorService: BackendconnectorService) {
   }

  ngOnInit() {
    this.data = this.data;
    this.card = this.data.toCard();
  }

  star() {
    this.card.starred = !this.card.starred;
    this.backendconnectorService.flip(this.card.time);
  }

}
