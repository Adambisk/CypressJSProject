describe("Sample Test", () => {
    it("Visits Amphora homepage", () => {
      cy.visit("https://www.amphora.net");
      cy.title().should("include", "Amphora");
    });
  });
  