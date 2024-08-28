/// <reference types="Cypress" />

describe('My Second Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get(".search-keyword").type("ca")
      
     
      //Parents child chaining
      cy.get('.products').as('productLocator')

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

      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click();
      cy.get('button').contains('Place Order').click()

    });
  });
 

