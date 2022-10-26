import { Component, OnInit } from '@angular/core';

export interface Card {
  title: string;
  subtitle: string;
  image: string;
  items: CardItem[];
  price: number;
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
  cards: Card[] = [
    {
      title: 'Hicking',
      subtitle: 'Hicking',
      image: '../../../assets/img/image1.jpg',
      price: 100,
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
      title: 'Sea',
      subtitle: 'Sea',
      image: '../../../assets/img/image2.jpg',
      price: 250,
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
      title: 'Camp',
      subtitle: 'Camp',
      image: '../../../assets/img/image3.jpg',
      price: 385,
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
}
