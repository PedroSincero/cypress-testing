export function shouldExist(selector) {
  cy.get(selector).should('exist');
}