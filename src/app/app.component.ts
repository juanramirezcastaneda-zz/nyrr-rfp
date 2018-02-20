import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMenuActive = false;
  openMenu() {
    this.isMenuActive = true;
  }
}
