/// <reference types="Cypress" />
 


describe('Hooks', function() {
    before(function () {
        // Load the fixture
        cy.fixture('example').then((data) => {
            this.data = data;  // Assign the fixture data to the test context
        });
    });

    it('Demo example', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get("input[name*='name']").eq(1).type(this.data.name);
        cy.get("input[name*='email']").type(this.data.email);
        cy.get(" #exampleCheck1").check()
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get('.btn-success').click()
    });
});
  