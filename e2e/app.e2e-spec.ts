import { TestpdfPage } from './app.po';

describe('testpdf App', () => {
  let page: TestpdfPage;

  beforeEach(() => {
    page = new TestpdfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
