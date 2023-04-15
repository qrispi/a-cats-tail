Cypress.Commands.add('loadBook', () => {
    cy.intercept(
        'GET', 
        "https://meowfacts.herokuapp.com/", {
        fixture: "cat-fact.json"
        }
    )
});