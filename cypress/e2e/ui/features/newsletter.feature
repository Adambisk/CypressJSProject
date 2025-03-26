Feature: Newsletter Signup

Scenario: Verify successful newsletter signup
  Given I visit the Amphora homepage
  When I navigate to the Resources dropdown
  And I sign up for the newsletter
  Then I should see a confirmation message "Thank you for signing up for our newsletter"
