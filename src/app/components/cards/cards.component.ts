import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';

export interface Card {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  loading: boolean;
  items: CardItem[];
  price: number;
  selected: boolean;
  details: CardDetails;
}

export interface CardDetails {
  price: CardDetailsItem[];
  attractions: CardDetailsItem[];
  duration: CardDetailsItem[];
}

export interface CardDetailsItem {
  type: string;
  price: number;
  description: string;
  selected: boolean;
}

export interface CardItem {
  description: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  selectedCardId: number = null;
  selectedCard: Card;

  constructor(public cardData: CardDataService) {}

  ngOnInit() {}

  selectCard(card: Card) {
    this.cardData.selectCard(card);
  }

  selectItem(data: [Card, CardDetailsItem]) {
    this.cardData.selectCardItem(data);
  }
}
