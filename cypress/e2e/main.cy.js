describe('As a user, I should be able to start the game from the main page, click through choices and see reactions', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000/story')
  })

    it('should see the title of the app', () => {
        cy.contains('h1', 'A Cat\'s Tail')
    })

      // it('should see the pixel cat on the main page', () => {
      
    // })

    it('should be able to name the cat with the form', () => {
      cy.get("form").within(() => {
      cy.get('input[type="text"]').type("Fluffy")
      cy.root().submit()
    })
  })

    // it('should be able to see the pixel wizard once you adopt your cat', () => {
      
    // })

    it('should be able to click the "start game" button to initialize the game', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.contains('h2', 'DAY 1')
      cy.contains('p', 'You notice that your cat, replaceME, is behaving unusually. replaceME seems to be able to solve puzzles and is listening to you more intently than ever.')
    })

    it('should display what day the user is on', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.contains('h2', 'DAY 1')
    })

    it('should give the user a list of choices', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.get('button').eq(0)
        .should('have.text', 'CONTINUE').click()
      cy.get('button').should('have.length', 4)
      cy.get('button').eq(0)
        .should('have.text', 'Try to teach replaceME new tricks and see how much more intelligent they can become.')
      cy.get('button').eq(1)
        .should('have.text', 'Ignore replaceME\'s behavior and continue your day as usual.')
      cy.get('button').eq(2)
        .should('have.text', 'Take replaceME to the vet to see if there\'s something wrong with them.')
      cy.get('button').last().should('have.text', 'Consult The Cat Fact Book')
    })
  
    it('should be able to make a good choice and display a positive result screen', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Try to teach replaceME new tricks and see how much more intelligent they can become.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/good')
      cy.contains('p', 'replaceME becomes even more intelligent and is able to learn new tricks quickly. You gain replaceME\'s trust and friendship.')
    })

    it('should be able to make a neutral choice and display a neutral result screen', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(1).should('have.text', 'Ignore replaceME\'s behavior and continue your day as usual.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/neutral')
      cy.contains('p', 'replaceME continues to demonstrate slightly enhanced intelligence but nothing significant happens.')
    })
  
    it('should be able to make an evil choice and display a neutral result screen', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(2).should('have.text', 'Take replaceME to the vet to see if there\'s something wrong with them.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/evil')
      cy.contains('p', 'The vet finds nothing wrong with replaceME, and you notice replaceME is cross with you')
    })

    it('should show a final result screen after day 6', () => {
      cy.get('button').eq(1).should('have.text', 'START GAME').click()
      cy.contains('h2', 'DAY 1')
      cy.contains('p', 'You notice that your cat, replaceME, is behaving unusually. replaceME seems to be able to solve puzzles and is listening to you more intently than ever.')
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Try to teach replaceME new tricks and see how much more intelligent they can become.').click()
      cy.url().should('eq', 'http://localhost:3000/story/1/result/good')
      cy.contains('p', 'replaceME becomes even more intelligent and is able to learn new tricks quickly. You gain replaceME\'s trust and friendship.')
      cy.get('button').should('have.text', 'CONTINUE').click()

      cy.contains('h2', 'DAY 2')
      cy.contains('p', 'replaceME has developed the ability to communicate with humans. You are surprised to find that replaceME can now speak to you in perfect English.')
      cy.get('button').should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Use replaceME\'s ability to communicate to your advantage, such as asking for insider trading tips.').click()
      cy.contains('p', 'replaceME chuckles and admires you thinking outside of the box. You both soon realize the stock market is all random anyway.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()

      cy.contains('h2', 'DAY 3')
      cy.contains('p', 'replaceME seems to be able to sense odd things, such as the locations of people or things.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Use replaceME\'s enhanced senses for funsies, like finding hidden treasure or solving mysteries.').click()
      cy.contains('p', 'You and replaceME have a swell time and feel rewarded after a day of fun and helping people.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()

      cy.contains('h2', 'DAY 4')
      cy.contains('p', 'replaceME\'s physical abilities have become even more enhanced, allowing them to run insanely fast and jump to the top of buildings.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'You take replaceMe on a fun adventure, going hiking and then bungee jumping.').click()
      cy.contains('p', 'replaceME has a great time and your bond strengthens.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()

      cy.contains('h2', 'DAY 5')
      cy.contains('p', 'replaceME gains the ability of telekinesis, allowing them to move objects with their mind.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Train replaceME to control their powers and use them for good, starting by helping people in need and stopping small crimes around town.').click()
      cy.contains('p', 'replaceME becomes a neighborhood hero.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()

      cy.contains('h2', 'DAY 6')
      cy.contains('p', 'replaceME gains the ability to teleport, allowing them to instantly transport themselves and others to different locations.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()
      cy.get('button').eq(0).should('have.text', 'Train replaceME to control their powers and use them to help people around the country by teleporting them away from danger and stopping disasters.').click()
      cy.contains('p', 'replaceME becomes a powerful force for good and nationally acclaimed superhero.')
      cy.get('button').eq(0).should('have.text', 'CONTINUE').click()

      cy.contains('p', 'Wow what a week! Frankly, youre exhausted and have no idea what to expect next. As you get out of bed and head into the kitchen you see Fluffy already sitting there, waiting for you. It looks like they have something important to say...')
      cy.get('button').should('have.text', 'Let\'s find out!').click()
      cy.contains('p', 'Fluffy wins the nobel peace prize for solving climate change')
      cy.get('button').eq(0).should('have.text', 'Play Again')
    })
});