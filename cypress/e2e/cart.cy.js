describe('Cart Tests', () => {

  beforeEach(() => {
  });

  it('Ajouter un produit au panier', () => {
    cy.contains('Ajouter au panier').click();

    cy.contains('Panier').click();

    cy.get('.cart-item').should('have.length.greaterThan', 0);
  });

});