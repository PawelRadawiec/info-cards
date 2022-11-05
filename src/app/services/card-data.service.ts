import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { Card } from '../components/cards/cards.component';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  private cards: readonly Card[] = [
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

  private cardsSubject = new BehaviorSubject<ReadonlyArray<Card>>(this.cards);
  cards$ = this.cardsSubject.asObservable()

  private selectedCard = new BehaviorSubject<Card>(null);
  selectedCard$ = this.selectedCard.asObservable();

  constructor() {}

  selectCard(card: Readonly<Card>) {
    const cardSelected = { ...card, selected: true};
    const newCards = this.cards.map(item => ({...item, selected: false}));
    newCards[newCards.findIndex((item) => item.id === card.id)] = cardSelected;
    this.cardsSubject.next(newCards);
    this.selectedCard.next(cardSelected);
  }
}
