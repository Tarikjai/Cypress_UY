/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('Does not do much!', () => {
      //check boxes
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
      cy.get("input[type='checkbox']").check(['option2','option1'])

      //static Dropdown
      cy.get('select').select('option3').should('have.value','option3')

      //Dynamic Dropdowns  // autocomplete
      cy.get('#autocomplete').type('ind')
      cy.get('.ui-menu-item div').each(($el, index, $list) => { 
        if ($el.text() === 'India') { // Vérifie si le texte contient le mot 'Cucumber'
             cy.wrap($el).click()
        }
      });
      cy.get('#autocomplete').should('have.value','India')


      //Element Displayed Example
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // Radio Button Example

      cy.get('input[value="radio1"]').check()
      cy.get('input[value="radio1"]').should('be.checked')
      cy.get('input[value="radio3"]').should('not.be.checked')
      

  });
});
 

