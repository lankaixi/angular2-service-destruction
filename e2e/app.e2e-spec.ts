import { AngularMemoryLeakPage } from './app.po';

describe('angular-memory-leak App', function() {
  let page: AngularMemoryLeakPage;

  beforeEach(() => {
    page = new AngularMemoryLeakPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
