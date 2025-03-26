Feature: Petstore API Tests

Scenario: Perform CRUD operations on pet API
  Given I create a new pet with ID "12345"
  When I update the pet name to "Buddy"
  Then I should be able to fetch the updated pet
  And I delete the pet successfully