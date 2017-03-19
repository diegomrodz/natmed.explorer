import { Natmed.ExplorerPage } from './app.po';

describe('natmed.explorer App', () => {
  let page: Natmed.ExplorerPage;

  beforeEach(() => {
    page = new Natmed.ExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
