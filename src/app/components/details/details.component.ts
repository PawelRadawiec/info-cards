import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../cards/cards.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit() {}
}
