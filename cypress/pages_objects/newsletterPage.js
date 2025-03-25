class NewsletterPage {
  visit() {
    cy.visit('https://www.amphora.net');
  }

  clickResourcesDropdown() {
    cy.get('[data-testid="resources-dropdown"]').click(); // Adjust selectors
  }

  signUpNewsletter(email) {
    cy.get('input[name="email"]').type(email);
    cy.get('button[type="submit"]').click();
  }

  verifySuccessMessage() {
    cy.contains('Thank you for signing up for our newsletter').should('be.visible');
  }
}

export default NewsletterPage;
