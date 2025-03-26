class NewsletterPage {
    hoverOnResources() {
      cy.get('nav').contains("Resources").trigger("mouseover");
    }
  
    signupForNewsletter() {
      cy.get("#newsletter-email").type("testuser@example.com");
      cy.get("#newsletter-submit").click();
    }
  
    verifySuccessMessage(message) {
      cy.contains(message).should("be.visible");
    }
  }
  
  export default NewsletterPage;
  