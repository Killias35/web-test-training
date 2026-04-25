describe('Cart Tests', () => {

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password);
    });
  });

  it('Ajouter un produit au panier', () => {
    cy.contains('Ajouter au panier').click();

    cy.contains('Panier panio').click();

    cy.get('.cart-item').should('have.length.greaterThan', 0);
  });

});