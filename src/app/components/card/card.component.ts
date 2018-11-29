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

  constructor() {
   }

  ngOnInit() {
    this.data = this.data;
    console.log("WHAT");
    console.log(this.data);
    this.card = this.data.toCard()
  }

  star() {
    this.card.starred = !this.card.starred;
    this.data.flip();
  }

}
