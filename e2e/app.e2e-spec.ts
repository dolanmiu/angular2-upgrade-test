import { UpgradeTestPage } from './app.po';

describe('upgrade-test App', function() {
  let page: UpgradeTestPage;

  beforeEach(() => {
    page = new UpgradeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
