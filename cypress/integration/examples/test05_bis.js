/// <reference types="Cypress" />

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      //check boxes
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get("#opentab").then(function(el)
      { 

          cy.origin("https://www.qaclickacademy.com", ()=> {
          cy.get(".nav-item > a[href='about.html']").click()

         
          cy.get(".mt-50 h2").should('contain','Welcome to QAClick Academy')
         })
      
      })


  });
});