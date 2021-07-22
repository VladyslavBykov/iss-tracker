import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application name', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('IIS Tracker');
  });

  it('should display save dialog', async () => {
    await page.navigateTo();
    page.clickSaveLocationButton();
    await page.waitBeforeDialogWillBeDisplayed();
    page.setNewLocation('Test');
    page.clickSaveDialogLocationButton();
    await page.waitBeforeListWillBeUpdated();
    const list = await page.getLocationsList();
    expect(list).toContain('test');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
