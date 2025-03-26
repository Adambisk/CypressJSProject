import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import APIRequests from "../../support/pageObjects/APIRequests";

const api = new APIRequests();

Given("I create a new pet with ID {string}", (petId) => {
  api.createPet(petId);
});

When("I update the pet name to {string}", (newName) => {
  api.updatePet(newName);
});

Then("I should be able to fetch the updated pet", () => {
  api.getPet();
});

Then("I delete the pet successfully", () => {
  api.deletePet();
});