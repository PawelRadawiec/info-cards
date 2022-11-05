import { Component } from '@angular/core';
import { DropdownItem } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selected = false;
  options: DropdownItem[] = [
    {
      code: 'ABOUT_US',
      description: 'About us',
    },
    {
      code: 'CONTACT',
      description: 'Contact',
    },
    {
      code: 'LOGIN',
      description: 'Login',
    },
  ];

  constructor() {}
}
