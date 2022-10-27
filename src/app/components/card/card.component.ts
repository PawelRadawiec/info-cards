import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../cards/cards.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card;
  @Output() onClick = new EventEmitter<Card>();

  constructor() {}

  selectVariant(card: Card) {
    this.onClick.next(card);
  }
}
