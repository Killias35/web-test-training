describe('Page utilisateurs - Mock API JSONPlaceholder', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/mock.html');
  });

  it('affiche la liste des utilisateurs depuis une fixture', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      fixture: 'mock.json'
    }).as('getUsers');

    cy.get('#loadUsersBtn').click();

    cy.wait('@getUsers');

    cy.contains('Jean Dupont');
    cy.contains('Marie Martin');
    cy.contains('Paul Bernard');
    cy.contains('Paris');
    cy.contains('Lyon');
    cy.contains('Marseille');
  });

  it('affiche un état vide si aucun utilisateur', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      statusCode: 200,
      body: []
    }).as('getEmptyUsers');

    cy.get('#loadUsersBtn').click();

    cy.wait('@getEmptyUsers');

    cy.get('#userList li').should('have.length', 0);
  });

  it('affiche une erreur si l’API retourne 500', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      statusCode: 500,
      body: {
        error: 'Internal Server Error'
      }
    }).as('getUsersError');

    cy.get('#loadUsersBtn').click();

    cy.wait('@getUsersError');

    cy.get('#error').should('be.visible');
    cy.contains('Erreur lors du chargement des données.');
  });

  it('affiche le loader pendant le chargement', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', (req) => {
      req.reply((res) => {
        res.delay = 1000;
        res.send({
          fixture: 'mock.json'
        });
      });
    }).as('getDelayedUsers');

    cy.get('#loadUsersBtn').click();

    cy.get('#loading').should('be.visible');

    cy.wait('@getDelayedUsers');

    cy.get('#loading').should('not.be.visible');
    cy.contains('Jean Dupont');
  });

  it('valide la structure de la réponse API', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      fixture: 'mock.json'
    }).as('getUsers');

    cy.get('#loadUsersBtn').click();

    cy.wait('@getUsers')
      .its('response.body')
      .should((body) => {
        expect(body).to.be.an('array');
        expect(body[0]).to.have.property('name');
        expect(body[0]).to.have.property('email');
        expect(body[0]).to.have.property('address');
        expect(body[0].address).to.have.property('city');
      });
  });

});