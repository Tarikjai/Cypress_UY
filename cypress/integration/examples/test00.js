/// <reference types="Cypress" />

describe('Visite de Sauce Demo', function() {
    it('Visite la page d\'accueil', function() {
        // Visite la page d'accueil de Sauce Demo
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').contains("Swag Labs")
        
    })
})
