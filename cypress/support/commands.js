// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.get(".ml-auto > .ml-2").click();
  if (email) cy.get("#mail").type(email);
  if (password) cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNew", (name, description, author) => {
  cy.get(".p-0 > .btn").click();
  if (name) {
    cy.get("#title").type(name);
  }
  if (description) {
    cy.get("#description").type(description);
  }
  if (author) {
    cy.get("#authors").type(author);
  }
  cy.contains("Submit").click();
  cy.contains("Book").should("be.visible");
});

Cypress.Commands.add("addFavorite", () => {
  cy.get("button").contains("Add to favorite").click();
  cy.get("button").contains("Delete from favorite").should("be.visible");
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
