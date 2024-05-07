describe('Cypress Test Case', () => {
    it('Add to Cart', () => {
      cy.title().should("eq","Frontend")
    
      cy.get('img[src="assets/food-1.jpg"]').click()
      cy.wait(2000)
      
      cy.get('button').contains('Add to Cart').click()
      cy.url().should('include', '/cart-page')
    })
  })