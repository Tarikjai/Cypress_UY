/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', () => {
    it('Demo example', () => {
    
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    /*
      cy.get('iframe').should('be.visible').then(($iframe) => {
          const $body = $iframe.contents().find('body')
 
          cy.wrap($body).find('a[href="mentorship"]').eq(0).click()
 
      })
   */
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find('a[href="mentorship"]').eq(0).click();
       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    });
});
  