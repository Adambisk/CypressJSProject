import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NewsletterPage from "../../support/pageObjects/NewsletterPage";

const newsletterPage = new NewsletterPage();

When("I navigate to the Resources dropdown", () => {
  newsletterPage.hoverOnResources();
});

When("I sign up for the newsletter", () => {
  newsletterPage.signupForNewsletter();
});

Then("I should see a confirmation message {string}", (message) => {
  newsletterPage.verifySuccessMessage(message);
});
