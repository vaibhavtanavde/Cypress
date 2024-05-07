describe('Cypress Test Case', () => {
    it('Remove from Cart', () => {

      cy.xpath('//a[@class="logo"]').click()
      cy.title().should("eq","Frontend")   
      cy.get('img[src="assets/food-1.jpg"]').click()
      cy.wait(2000)  
      cy.get('button').contains('Add to Cart').click()
      cy.url().should('include', '/cart-page')
      cy.xpath('//button[@class="remove-button"]').click()
      cy.wait(2000)
      cy.xpath('//a[@class="logo"]').click()
    
    })
  })