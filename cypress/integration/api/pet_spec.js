describe('Pet API Tests', () => {
  let petId;

  it('should create a new pet', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: {
        id: 0,
        name: 'Bobby',
        photoUrls: ['http://example.com/photo.jpg'],
        status: 'available',
      },
    }).then((response) => {
      petId = response.body.id;
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Bobby');
    }); 
  });

  it('should read the created pet', () => {
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Bobby');
    });
  });

  it('should update the created pet', () => {
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/pet`,
      body: {
        id: petId,
        name: 'Bobby Updated',
        photoUrls: ['http://example.com/updated-photo.jpg'],
        status: 'sold',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Bobby Updated');
    });
  });

  it('should delete the created pet', () => {
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
