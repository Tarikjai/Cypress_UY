/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('Does not do much!', () => {
      //check boxes
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#alertbtn").click()
      cy.get("#confirmbtn").click()
      // Windows alert
      cy.on('window:alert',(str) =>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
      })
      // Windows Confirm 
      cy.on('window:confirm',(str) =>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
      })
  });
});
 

