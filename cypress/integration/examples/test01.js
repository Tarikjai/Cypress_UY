/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get(".search-keyword").type("ca")
      cy.wait(2000)
      cy.get('.product').should("have.length",5)
      cy.get('.product:visible').should("have.length",4)
      //Parents child chaining
      cy.get('.products').as('productLocator')
      cy.get('@productLocator').find('.product').should("have.length",4);
      cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()


      // Script Cypress pour cliquer sur un bouton pour des produits spécifiques
      cy.get('.products') // Sélectionne tous les éléments avec la classe 'products'
        .find('.product') // Trouve tous les sous-éléments avec la classe 'product' dans chaque élément 'products'
        .each(($el, index, $list) => { // Itère sur chaque élément 'product'
            // $el est un élément jQuery enveloppé, index est la position de l'élément dans la liste, $list est la liste complète des éléments récupérés
            const textVeg = $el.find('h4.product-name').text(); // Trouve l'élément h4 avec la classe 'product-name' et extrait le texte
            if (textVeg.includes('Cashews')) { // Vérifie si le texte contient le mot 'Cucumber'
                cy.wrap($el).find('button').click(); // Si 'Cucumber' est trouvé, clique sur le bouton dans cet élément 'product'
            }
      });

      // To print a log 
      cy.log("test")

      // assert if logo have correct text
      cy.get('.brand').should('have.text', 'GREENKART')
      cy.get('.brand').should('include.text', 'GREENKART');



      cy.get('.brand').then(function(logoelement)   {
        // $logo est un objet jQuery représentant l'élément récupéré avec la classe '.brand'
        const text = logoelement.text(); // Utilise jQuery pour obtenir le texte de l'élément
        cy.log(text); // Affiche le texte de l'élément dans le journal de Cypress

        expect(text).to.include('GREENKART')
        
      });
      
    })
  })