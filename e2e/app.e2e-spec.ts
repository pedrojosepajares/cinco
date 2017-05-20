import { CincoPage } from './app.po';

describe('cinco App', () => {
  let page: CincoPage;

  beforeEach(() => {
    page = new CincoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
