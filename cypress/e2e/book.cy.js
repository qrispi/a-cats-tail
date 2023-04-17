describe('Cat Fact Book', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/story');
    cy.intercept('GET', 'https://meowfacts.herokuapp.com/', {
      fixture: 'cat-fact.json',
    });
    cy.wait(3000)
  });

  it('should be able open the book by clicking the "Consult The Book of Cat" button', () => {
    cy.get('button').type('Fluffy')
      .should('have.text', '⤏').click()
    cy.get('button').eq(1).should('have.text', "START GAME").click()
      .get('button').should('have.text', 'CONTINUE').click()
    cy.get('button').eq(3).should('have.text', 'CONSULT THE BOOK OF CAT')
  });

  it('should go to a new page when user clicks THE BOOK OF CAT and show a random Cat Fact', () => {
    cy.get('button').type('Fluffy')
      .should('have.text', '⤏').click()
    cy.get('button').eq(1).should('have.text', "START GAME").click()
      .get('button').should('have.text', 'CONTINUE').click()
    cy.get('button').eq(3).should('have.text', 'CONSULT THE BOOK OF CAT').click()
    cy.contains('People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
  })

  it('should save the fact in MY BOOKMARKS when the user clicks BOOKMARK', () => {
    cy.get('button').type('Fluffy')
      .should('have.text', '⤏').click()
    cy.get('button').eq(1).should('have.text', "START GAME").click()
      .get('button').should('have.text', 'CONTINUE').click()
    cy.get('button').eq(3).should('have.text', 'CONSULT THE BOOK OF CAT').click()
    cy.contains('People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
      .get('button').eq(2).should('have.text', 'BOOKMARK').click()
      .get('button').eq(3).should('have.text', 'REMOVE').click()
    cy.contains('p', 'People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
  })

  it('should remove a fact from MY BOOKMARKS when the user clicks REMOVE and inform user the page has been ripped out of the book', () => {
    cy.get('button').type('Fluffy')
      .should('have.text', '⤏').click()
    cy.get('button').eq(1).should('have.text', "START GAME").click()
      .get('button').should('have.text', 'CONTINUE').click()
    cy.get('button').eq(3).should('have.text', 'CONSULT THE BOOK OF CAT').click()
    cy.contains('People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
      .get('button').eq(2).should('have.text', 'BOOKMARK').click()
      .get('button').eq(2).should('have.text', 'MY BOOKMARKS').click()
      .get('button').eq(1).should('have.text', 'REMOVE').click()
    cy.contains('p', 'You ripped out this page!')
  })

  it('should display another random fact when NEW FACT button is clicked', () => {
    cy.get('button').type('Fluffy')
      .should('have.text', '⤏').click()
    cy.get('button').eq(1).should('have.text', "START GAME").click()
      .get('button').should('have.text', 'CONTINUE').click()
    cy.get('button').eq(3).should('have.text', 'CONSULT THE BOOK OF CAT').click()
    cy.contains('p', 'People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
        .get('button').eq(1).should('have.text', 'NEW FACT').click()
  })
});
