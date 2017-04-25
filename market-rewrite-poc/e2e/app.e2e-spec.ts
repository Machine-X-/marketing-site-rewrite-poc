import { MarketRewritePocPage } from './app.po';

describe('market-rewrite-poc App', () => {
  let page: MarketRewritePocPage;

  beforeEach(() => {
    page = new MarketRewritePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
