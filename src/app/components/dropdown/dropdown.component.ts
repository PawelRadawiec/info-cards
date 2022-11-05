import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

export interface DropdownItem {
  code: string;
  description: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() options: DropdownItem[] = [];

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('dropdownIcon') dropdownIcon: ElementRef;
  @ViewChild('dropdownIconUse') dropdownIconUse: ElementRef;

  selected = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.listenOutsideClick();
  }

  selectDropdown() {
    this.selected = !this.selected;
  }

  listenOutsideClick() {
    this.renderer.listen('window', 'click', (e: Event) => {
      const elements = [
        this.dropdown.nativeElement,
        this.dropdownIcon.nativeElement,
        this.dropdownIconUse.nativeElement,
      ];

      if (this.selected && !elements.find((element) => e.target === element)) {
        this.selected = false;
      }
    });
  }
}
