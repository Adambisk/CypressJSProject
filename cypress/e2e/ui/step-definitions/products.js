import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/pageObjects/ProductsPage";

const productsPage = new ProductsPage();

Given("I visit the Amphora homepage", () => {
  cy.visit("https://www.amphora.net");
});

When("I navigate to the Products dropdown", () => {
  productsPage.hoverOnProducts();
});

Then("I should be able to click on each product and verify the page loads", () => {
  productsPage.verifyAllProducts();
});
