describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password);

      cy.contains('Ajouter au panier').click();
      cy.contains('Panier').click();
    });
  });

  it('Parcours complet commande', () => {
    cy.contains('Passer commande').click();

    cy.get('#name').type('John Doe');
    cy.get('#address').type('123 rue test');
    cy.get('#orderBtn').click();

    cy.contains('Commande réussie').should('be.visible');
  });

});