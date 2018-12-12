import { BackendconnectorService } from './../../services/backendconnector.service';
import { Cardable } from './../../models/cardable';
import { Component, OnInit, Input } from '@angular/core';
import { Card } from './../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
/*
  To show one message as card in feeds (slack , confluence and starred feed)
*/
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
    this.backendconnectorService.star(this.card);
  }

}
