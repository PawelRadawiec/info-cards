import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() text: string;
  @Input() loading = false;
  @Output() onClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  click() {
    if (!this.loading) {
      this.onClick.next(true);
    }
  }
}
