import NewsletterPage from '../../page_objects/newsletterPage';

const newsletterPage = new NewsletterPage();

Given('I visit the amphora website', () => {
  newsletterPage.visit();
});

When('I click on the resources dropdown', () => {
  newsletterPage.clickResourcesDropdown();
});

When('I sign up for the newsletter with email {string}', (email) => {
  newsletterPage.signUpNewsletter(email);
});

Then('I should see the success message', () => {
  newsletterPage.verifySuccessMessage();
});
