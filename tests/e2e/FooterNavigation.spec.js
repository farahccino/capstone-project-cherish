///<reference types="Cypress" />

describe('Use Navigation', () => {
    it('Visits the Today Page', () => {
      cy.visit('/');
    });
  
    it('changes to Goals page', () => {
      cy.visit('/');
      cy.get('[href="/goals"]').click();
      cy.get('h1').contains('goals');
    });
  
    it('changes to Plus page', () => {
      cy.visit('/');
      cy.get('[href="/add-goal"]').click();
      cy.get('h1').contains('plus');
    });
  });