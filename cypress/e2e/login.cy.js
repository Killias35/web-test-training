describe('Login Tests', () => {

  it('Connexion valide', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.email, users.validUser.password);

      cy.contains('Connexion réussie').should('be.visible');
    });
  });

  it('Connexion invalide', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidUser.email, users.invalidUser.password);

      cy.contains('Identifiants incorrects').should('be.visible');
    });
  });

});