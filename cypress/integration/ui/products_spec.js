import ProductPage from '../../page_objects/productPage';

const productPage = new ProductPage();

Given('I visit the amphora website', () => {
  productPage.visit();
});

When('I click on all the products from the products dropdown', () => {
  productPage.clickProductsDropdown();
});

Then('I should be able to click on each product and verify its page', () => {
  const products = ['Product 1', 'Product 2', 'Product 3']; // List of products
  products.forEach(product => {
    productPage.clickProduct(product);
    productPage.verifyProductPage(product);
  });
});
