describe("Cat Fact Book", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://meowfacts.herokuapp.com/", {
      statusCode: 201,
      fixture: "cat-fact.json",
    });
    cy.visit("http://localhost:3000/story");
  });


  it('should be able open the book by clicking the "Consult The Cat Fact Book" button', () => {
    cy.get('button').should('have.text', 'Continue').click()
      .get('button').should('have.text', 'CONTINUE').click()
      .get('button').eq(3).should('have.text', 'Consult The Cat Fact Book').click()
    cy.contains('h1', 'The Book of Cat')
  });

  it('when the Cat Fact Book is clicked, user should be taken to a new page that shows me a random Cat Fact', () => {
    cy.get('button').should('have.text', 'Continue').click()
      .get('button').should('have.text', 'CONTINUE').click()
      .get('button').eq(3).should('have.text', 'Consult The Cat Fact Book').click()
    cy.contains('h1', 'The Book of Cat')
    cy.contains('People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.')
  })

  it('Bookmarking a fact should save it in My Bookmarks', () => {

  })


});
