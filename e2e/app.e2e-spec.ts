import { CheckFirePage } from './app.po';

describe('check-fire App', () => {
  let page: CheckFirePage;

  beforeEach(() => {
    page = new CheckFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
