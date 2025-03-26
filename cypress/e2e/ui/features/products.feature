Feature: Products Page Validation

Scenario: Verify all products open correctly
  Given I visit the Amphora homepage
  When I navigate to the Products dropdown
  Then I should be able to click on each product and verify the page loads