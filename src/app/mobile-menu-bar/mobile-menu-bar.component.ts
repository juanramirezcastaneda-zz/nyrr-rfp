import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-bar',
  templateUrl: './mobile-menu-bar.component.html',
  styleUrls: ['./mobile-menu-bar.component.css']
})
export class MobileMenuBarComponent {

  @Input('isMenuActive') isMenuActive: boolean;
  @Output() isMenuActiveChange = new EventEmitter<boolean>();
  constructor() { }

  setMenuActive() {
    this.isMenuActiveChange.emit(false);
  }
}
