import { browser, by, element, until, WebElementPromise } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '#test');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .header_title')).getText();
  }

  setNewLocation(name: string) {
    element(by.id('name')).sendKeys(name);
  }

  clickSaveLocationButton(): void {
    element(by.css('app-root .google-map_button_save-pos')).click();
  }

  waitBeforeDialogWillBeDisplayed(): WebElementPromise {
    return browser.wait(
      until.elementLocated(by.id('name')),
      5000,
      'Element taking too long to appear in the DOM'
    );
  }

  clickSaveDialogLocationButton(): void {
    element(by.css('#save-dialog_save')).click();
  }

  waitBeforeListWillBeUpdated(): WebElementPromise {
    return browser.wait(
      until.elementLocated(by.css('app-iss-item .iss-item_name')),
      5000,
      'Element taking too long to appear in the DOM'
    );
  }

  getLocationsList() {
    return element.all(by.css('app-iss-item .iss-item_name')).getText();
  }
}
