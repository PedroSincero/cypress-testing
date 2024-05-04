describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Possuir cor de fundo: rgb(253, 251, 251)', () => {
    cy.get('body')
      .should('have.css', 'backgroundColor', 'rgb(253, 251, 251)');
  });
})