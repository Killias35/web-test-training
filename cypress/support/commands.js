Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://127.0.0.1:8080/login.html');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('#loginBtn').click();
});