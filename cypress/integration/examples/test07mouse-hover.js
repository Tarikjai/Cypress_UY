/// <reference types="Cypress" />

describe('Handling Child Windows', () => {
  it('Should handle child window', () => {
    //check boxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    

    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click();
    // Force the click
    //cy.contains('Top').click({ force: true});
    cy.url().should('include','top')
      
});
});


