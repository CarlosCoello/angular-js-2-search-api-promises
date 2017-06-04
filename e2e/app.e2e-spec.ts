import { ApipromisePage } from './app.po';

describe('apipromise App', () => {
  let page: ApipromisePage;

  beforeEach(() => {
    page = new ApipromisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
