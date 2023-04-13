describe("Cat Fact Book", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://meowfacts.herokuapp.com/", {
      statusCode: 201,
      fixture: "cat-fact.json",
    });
    cy.visit("http://localhost:3000/story");
  });


  it('As a user, I should be able open the book by clicking the "Get Cat Fact" button', () => {
    
  });

  it('As a user, when I click the Cat Fact Book, I should be taken to a new page that shows me a random Cat Fact', () => {
    // click button, intercept API, 
  })


});
