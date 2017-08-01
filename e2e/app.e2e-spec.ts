import { NgrxClientPage } from './app.po';

describe('ngrx-client App', () => {
  let page: NgrxClientPage;

  beforeEach(() => {
    page = new NgrxClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
