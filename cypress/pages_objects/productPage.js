class ProductPage {
  visit() {
    cy.visit('https://www.amphora.net');
  }

  clickProductsDropdown() {
    cy.get('[data-testid="products-dropdown"]').click(); // Adjust selectors as necessary
  }

  clickProduct(productName) {
    cy.contains(productName).click();  // Assume each product name is clickable
  }

  verifyProductPage(productName) {
    cy.url().should('include', productName.toLowerCase()); // Example assertion
  }
}

export default ProductPage;
