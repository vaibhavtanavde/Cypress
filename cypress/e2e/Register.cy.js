describe('Cypress Test Suite', () => {
  it('Register a new user', () => {
    cy.visit('http://localhost:4200/register',{timeout:7000})
    cy.title().should("eq","Frontend")
    cy.get('input[placeholder="Name"]').should('be.visible').type("Vaibhav")
    
    cy.get('input[placeholder="Email"]').type("payal3866@example.com")
    cy.get('input[placeholder="Password"]').type("password")
    cy.get('input[placeholder="Confirm Password"]').type("password")
    cy.get('input[placeholder="Address"]').type("123 Street, City")
    cy.get('input[placeholder="submit"]').click()
    
  })
})