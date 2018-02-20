import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenu() {
    return element(by.tagName('Header')).getText();
  }
  getLogo(){
    return element(by.className('nyrr-logo'));
  }
}
