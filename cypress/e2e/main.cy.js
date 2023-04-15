describe('As a user, I should be able to start the game from the main page, click through choices and see reactions', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000/story')
  })

    it('should see the title of the app', () => {
        cy.contains('h1', 'A Cat\'s Tail')
    })

      // it('should see the pixel cat on the main page', () => {
      
    // })

    // it('should be able to name the cat', () => {
      
    // })


    // it('should be able to see the pixel wizard once you adopt your cat', () => {
      
    // })

    it('should be able to click the continue button to initialize the game', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.contains('h2', 'DAY 1')
      cy.contains('p', 'You notice that your cat, ${catName}, is behaving unusually. ${catName} seems to be able to solve puzzles and is listening to you more intently than ever. You have three choices:')
    })

    it('should display what day the user is on', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.contains('h2', 'DAY 1')
    })

    it('should give the user a list of choices', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button')
        .should('have.length', 4)
        .first()
        .should('have.text', 'Try to teach ${catName} new tricks and see how much more intelligent they can become.')
      cy.get('button').last().should('have.text', 'Consult The Cat Fact Book')
    })
  
    it('should be able to make a good choice and display a positive result screen', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Try to teach ${catName} new tricks and see how much more intelligent they can become.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/good')
      cy.contains('p', '${catName} becomes even more intelligent and is able to learn new tricks quickly. The owner gains ${catName}\'s trust and friendship, which may come in handy in the future.')
      cy.contains('p', 'Cat\'s Morality is 1')
    })
  
    it('should be able to make a neutral choice and display a neutral result screen', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(1).should('have.text', 'Ignore ${catName}\'s behavior and continue your day as usual.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/neutral')
      cy.contains('p', '${catName} continues to demonstrate slightly enhanced intelligence but nothing significant happens.')
      cy.contains('p', 'Cat\'s Morality is 0')
    })
      
    it('should be able to make a evil choice and display a negative result screen', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(2).should('have.text', 'Take ${catName} to the vet to see if there\'s something wrong with them.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/evil')
      cy.contains('p', 'The vet finds nothing wrong with ${catName}, and you notice ${catName} is cross with you')
      cy.contains('p', 'Cat\'s Morality is -1')
    })

    it('should show a final result screen after day 6, ', () => {
      cy.get('button').should('have.text', 'Continue').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.contains('p', 'Wow what a week! Frankly, youre exhausted and have no idea what to expect next. As you get out of bed and head into the kitchen you see Fluffy already sitting there, waiting for you. It looks like they have something important to say...')
      cy.get('button').should('have.text', 'Let\'s find out!').click()
      cy.contains('p', 'Fluffly wins the nobel peace prize for solving global warming')
      cy.get('button').eq(0).should('have.text', 'Play Again')
    })
});