import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card, CardDetailsItem } from '../cards/cards.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() card: Card;
  @Output() cardItemClick = new EventEmitter<[Card, CardDetailsItem]>();

  constructor() {}

  ngOnInit() {}

  selectCardItem(card: Card, cardItem: CardDetailsItem) {
    this.cardItemClick.next([card, cardItem]);
  }
}
