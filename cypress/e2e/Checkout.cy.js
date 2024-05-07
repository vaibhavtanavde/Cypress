describe('Cypress Test Case', () => {
    it('Checkout page', () => {
      cy.title().should("eq","Frontend")    
      cy.get('img[src="assets/food-1.jpg"]').click()
      cy.wait(2000)
      
      cy.get('button').contains('Add to Cart').click()
      cy.url().should('include', '/cart-page')
      cy.wait(2000)

      cy.get('a[routerlink="/checkout"]').click();
      cy.url().should('include', '/payment')
    })
  })