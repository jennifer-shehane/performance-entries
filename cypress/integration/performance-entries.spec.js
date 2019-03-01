/// <reference types="Cypress" />

it('does not call cy.clock', () => {
  // PASSES
  cy.visit('index.html')
})
  
it('calls cy.clock', () => {
  // FAILS
  cy.clock()
  cy.visit('index.html')
})