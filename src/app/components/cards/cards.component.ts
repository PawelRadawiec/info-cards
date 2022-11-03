import { Component, OnInit } from '@angular/core';

export interface Card {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  loading: boolean;
  items: CardItem[];
  price: number;
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

  cards: Card[] = [
    {
      id: 1,
      title: 'Hicking',
      subtitle: 'Hicking',
      image: '../../../assets/img/image1.jpg',
      price: 100,
      loading: false,
      selected: false,
      items: [
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
      ],
    },
    {
      id: 2,
      title: 'Sea',
      subtitle: 'Sea',
      image: '../../../assets/img/image2.jpg',
      price: 250,
      loading: false,
      selected: false,
      items: [
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
      ],
    },
    {
      id: 3,
      title: 'Camp',
      subtitle: 'Camp',
      image: '../../../assets/img/image3.jpg',
      price: 385,
      loading: false,
      selected: false,
      items: [
        {
          description: 'Lorem ipsum dolor sit, amet.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum dolor sit, amet consectetur.',
        },
        {
          description: 'Lorem ipsum sit, amet consectetur.',
        },
        {
          description: 'Lorem dolor sit, amet consectetur.',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}

  selectCard(card: Card) {
    card.loading = true;
    this.cards.forEach((card) => (card.selected = false));

    
    this.selectedCard = card;
    setTimeout(() => {
      card.loading = false;
      card.selected = true;
    }, 5_00);
  }
}
