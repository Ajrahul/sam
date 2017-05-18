import { ProductManagementPage } from './app.po';

describe('product-management App', () => {
  let page: ProductManagementPage;

  beforeEach(() => {
    page = new ProductManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
