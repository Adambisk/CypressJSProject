class APIRequests {
    createPet(petId) {
      cy.request("POST", "https://petstore.swagger.io/v2/pet", {
        id: petId,
        name: "Rex",
        status: "available",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("Rex");
      });
    }
  
    updatePet(newName) {
      cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
        id: "12345",
        name: newName,
        status: "available",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(newName);
      });
    }
  
    getPet() {
      cy.request("GET", "https://petstore.swagger.io/v2/pet/12345").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.be.oneOf(["Buddy", "Rex"]);
      });
    }
  
    deletePet() {
      cy.request("DELETE", "https://petstore.swagger.io/v2/pet/12345").then((response) => {
        expect(response.status).to.eq(200);
      });
    }
  }
  
  export default APIRequests;