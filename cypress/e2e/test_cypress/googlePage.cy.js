

describe('Google Search', () => {
    it('should search for Cypress and verify the first result contains Cypress text', () => {
      // Step 1: Go to Google
      cy.visit('https://www.google.com');
  
      // Step 2: Type Cypress in the search field
      cy.get('#APjFqb').type('Cypress');
  
      // Step 3: Click Enter
      cy.get('#APjFqb').type('{enter}');
  
      // Step 4: Verify that the first search result should contain Cypress text
      cy.get('#search .g').first().should('contain.text', 'Cypress');
    });
  });
  