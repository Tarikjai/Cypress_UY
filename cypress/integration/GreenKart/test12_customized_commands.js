/// <reference types="Cypress" />
 
// cypressConfig from "../../../cypress.config";
//import Cypress from "cypress";
import HomePage  from "../pageObjects/pageObjects";
import ProductPage from "../pageObjects/Products";

describe('Form submitting and validate the cart', function() {
    before(function () {
        // Load the fixture
        cy.fixture('example').then((data) => {
            this.data = data;  // Assign the fixture data to the test context
        });
    });

    it('Demo example', function() {
        //create object for the class

        const homePage = new HomePage()
        const product = new ProductPage()

        

        cy.visit(Cypress.env('url')+'/angularpractice/');
        homePage.getNameBox().type(this.data.name);
        cy.get("input[name*='email']").type(this.data.email);
        homePage.getCheck().check();
        homePage.getGender().select(this.data.gender);
        //cy.get('.btn-success').click()

        // verify assertion with an other input
        homePage.getTwoWayDataBinding().should("have.value",this.data.name);
        homePage.getNameBox().should("have.attr","minlength","2");
        homePage.getEntrepreneur().should('be.disabled');
        homePage.getShopTab().click()

       // Cypress.config('defaultCommandTimeout')

        //call the command to itirate in an array
        // looping with "forEach"
        this.data.productName.forEach(function (product) {
            cy.selectProduct(product);
        });

        product.checkoutButton().click();

        // verify the total 
        let sum = 0;
        let total = 0
        cy.get("tr td:nth-child(4) > strong").each(function($el,index,$list) {
            let amount = $el.text()
            let res = amount.split(" ");
                res = Number(res[1].trim())
                sum += res;
        })
        
    
        cy.get("td[class='text-right'] h3 strong").then(function(element){

            total =  element.text().split(" ");
            total = Number(total[1].trim())
            expect(total).to.equal(sum)

            
            
        })
        
        //cy.log(`${total} compar ${sum}`)
          

        cy.contains('Checkout').click();
       // cy.get('.btn.btn-success').click();
        Cypress.config('defaultCommandTimeout', 6000); 
        cy.get('#country').type('India');
       // cy.wait(6000);
        cy.get("div[class='suggestions'] ul li a").click();
        cy.get("#checkbox2").click({force: true})
        cy.get("input[value='Purchase']").click();
        cy.get('.alert').should('contain'," Thank you! Your order will be delivered in next few weeks :-).");
        cy.get('.alert').then(function(element)
        {
            const theText = element.text()
            expect(theText.includes('Thank')).to.be.true

        }
        )
    });
});
  