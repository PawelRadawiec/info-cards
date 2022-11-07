import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardDetailsItem } from '../components/cards/cards.component';

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
      details: {
        attractions: [
          {
            selected: false,
            price: 50,
            type: 'PARKS',
            description: 'Entertainment parks',
          },
          {
            selected: false,
            price: 25,
            type: 'WILDLIFE',
            description: 'Wildlife attractions',
          },
          {
            selected: false,
            price: 40,
            type: 'MUSEUMS',
            description: 'Museums and art galleries',
          },
          {
            selected: false,
            price: 30,
            type: 'BUILT',
            description: 'Unique built attractions',
          },
          {
            selected: false,
            price: 59,
            type: 'HISTORICAL',
            description: 'Historical or heritage attractions',
          },
        ],
        duration: [
          {
            selected: false,
            price: 100,
            type: 'ONE_DAY',
            description: 'One day',
          },
          {
            selected: false,
            price: 200,
            type: 'TWO_DAY',
            description: 'Two days',
          },
          {
            selected: false,
            price: 300,
            type: 'THREE_DAY',
            description: 'Three days',
          },
          {
            selected: false,
            price: 400,
            type: 'FOUR_DAY',
            description: 'Four days',
          },
          {
            selected: false,
            price: 500,
            type: 'FIVE_DAY',
            description: 'Five days',
          },
        ],
        price: [
          {
            selected: false,
            price: 255,
            type: 'BASIC',
            description: 'Basic',
          },
          {
            selected: false,
            price: 520,
            type: 'MEDMIUM',
            description: 'MEdmium',
          },
          {
            selected: false,
            price: 750,
            type: 'EXCLUSIVE',
            description: 'Exclusive',
          },
        ],
      },
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
      details: {
        attractions: [
          {
            selected: false,
            price: 50,
            type: 'PARKS',
            description: 'Entertainment parks',
          },
          {
            selected: false,
            price: 25,
            type: 'WILDLIFE',
            description: 'Wildlife attractions',
          },
          {
            selected: false,
            price: 40,
            type: 'MUSEUMS',
            description: 'Museums and art galleries',
          },
          {
            selected: false,
            price: 30,
            type: 'BUILT',
            description: 'Unique built attractions',
          },
          {
            selected: false,
            price: 59,
            type: 'HISTORICAL',
            description: 'Historical or heritage attractions',
          },
        ],
        duration: [
          {
            selected: false,
            price: 100,
            type: 'ONE_DAY',
            description: 'One day',
          },
          {
            selected: false,
            price: 200,
            type: 'TWO_DAY',
            description: 'Two days',
          },
          {
            selected: false,
            price: 300,
            type: 'THREE_DAY',
            description: 'Three days',
          },
          {
            selected: false,
            price: 400,
            type: 'FOUR_DAY',
            description: 'Four days',
          },
          {
            selected: false,
            price: 500,
            type: 'FIVE_DAY',
            description: 'Five days',
          },
        ],
        price: [
          {
            selected: false,
            price: 350,
            type: 'BASIC',
            description: 'Basic',
          },
          {
            selected: false,
            price: 650,
            type: 'MEDMIUM',
            description: 'MEdmium',
          },
          {
            selected: false,
            price: 850,
            type: 'EXCLUSIVE',
            description: 'Exclusive',
          },
        ],
      },
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
      details: {
        duration: [
          {
            selected: false,
            price: 100,
            type: 'ONE_DAY',
            description: 'One day',
          },
          {
            selected: false,
            price: 200,
            type: 'TWO_DAY',
            description: 'Two days',
          },
          {
            selected: false,
            price: 300,
            type: 'THREE_DAY',
            description: 'Three days',
          },
          {
            selected: false,
            price: 400,
            type: 'FOUR_DAY',
            description: 'Four days',
          },
          {
            selected: false,
            price: 500,
            type: 'FIVE_DAY',
            description: 'Five days',
          },
        ],
        attractions: [
          {
            selected: false,
            price: 50,
            type: 'PARKS',
            description: 'Entertainment parks',
          },
          {
            selected: false,
            price: 25,
            type: 'WILDLIFE',
            description: 'Wildlife attractions',
          },
          {
            selected: false,
            price: 40,
            type: 'MUSEUMS',
            description: 'Museums and art galleries',
          },
          {
            selected: false,
            price: 30,
            type: 'BUILT',
            description: 'Unique built attractions',
          },
          {
            selected: false,
            price: 59,
            type: 'HISTORICAL',
            description: 'Historical or heritage attractions',
          },
        ],
        price: [
          {
            selected: false,
            price: 455,
            type: 'BASIC',
            description: 'Basic',
          },
          {
            selected: false,
            price: 820,
            type: 'MEDMIUM',
            description: 'MEdmium',
          },
          {
            selected: false,
            price: 1050,
            type: 'EXCLUSIVE',
            description: 'Exclusive',
          },
        ],
      },
    },
  ];

  private cardsSubject = new BehaviorSubject<ReadonlyArray<Card>>(this.cards);
  cards$ = this.cardsSubject.asObservable();

  private selectedCard = new BehaviorSubject<Card>(null);
  selectedCard$ = this.selectedCard.asObservable();

  constructor() {}

  selectCard(card: Readonly<Card>) {
    const cardSelected = { ...card, selected: true };
    const newCards = this.cards.map((item) => ({ ...item, selected: false }));
    newCards[newCards.findIndex((item) => item.id === card.id)] = cardSelected;
    this.cardsSubject.next(newCards);
    this.selectedCard.next(cardSelected);
  }

  selectCardItem([card, cardItem]: [Card, CardDetailsItem]) {
    const cardCopy: Card = {
      ...card,
      details: {
        duration: [...card.details.duration],
        attractions: [...card.details.attractions],
        price: [...card.details.price],
      },
    };

    const cardItemCopy: CardDetailsItem = {
      ...cardItem,
      selected: true,
    };

    cardCopy.details.attractions = this.selectAndReplace(
      cardItemCopy,
      cardCopy.details.attractions
    );
    cardCopy.details.duration = this.selectAndReplace(
      cardItemCopy,
      cardCopy.details.duration
    );
    cardCopy.details.price = this.selectAndReplace(
      cardItemCopy,
      cardCopy.details.price
    );

    const cardsCopy = [...this.cards];
    cardsCopy[cardsCopy.findIndex((item) => item.id === card.id)] = cardCopy;

    this.cardsSubject.next(cardsCopy);
    this.selectedCard.next(cardCopy);
  }

  selectAndReplace(cardItem: CardDetailsItem, items: CardDetailsItem[]) {
    if (!items.find((item) => item.type === cardItem.type)) {
      return items;
    }
    items = items.map((item) => ({
      ...item,
      selected: false,
    }));
    items[items.findIndex((item) => item.type === cardItem.type)] = cardItem;
    return items;
  }
}
