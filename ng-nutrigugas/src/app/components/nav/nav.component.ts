import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  mobile_menu: boolean;

  constructor() {
    this.mobile_menu = false;
  }

  toggleBtn(): void {
    this.mobile_menu = !this.mobile_menu;
  }
}
