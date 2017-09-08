import { FlightSearchWebappNewPage } from './app.po';

describe('flight-search-webapp-new App', function() {
  let page: FlightSearchWebappNewPage;

  beforeEach(() => {
    page = new FlightSearchWebappNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
