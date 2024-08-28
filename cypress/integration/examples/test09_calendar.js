/// <reference types="Cypress" />
 
import 'cypress-iframe'

describe('Frames Test', () => {
    it('Demo example', () => {
        
        let year = "2022"
        let month = "3"
        let day = "21"
        let expectedList = [month,day,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".cart-header-navlink").eq(1).invoke('removeAttr','target').click()

    
        cy.get(".react-date-picker__inputGroup").click();
        cy.get('.react-calendar__navigation__label').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click()
        cy.contains("button",day).click()

        // Assertion 1 
        cy.get(".react-date-picker__inputGroup input[type*='date']").should('have.attr', 'value', '2022-03-21');
        // Assertion 2 
        cy.get(".react-date-picker__inputGroup__input").each(($el, index)=>
        
        { cy.wrap($el).invoke('val').should('eq',expectedList[index])
            
        })
    });
});
  