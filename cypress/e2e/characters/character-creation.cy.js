describe('Character Creation', () => {
  beforeEach(function () {
    // Load fixtures
    cy.fixture('characters').then((characters) => {
      this.characters = characters
    })
    cy.fixture('users').then((users) => {
      this.users = users
      // Login after fixtures are loaded
      const user = this.users.validUser
      cy.login(user.username, user.password)
    })
  })

  it('Creates a character successfully', function () {
    const char = this.characters.characterA
    cy.createCharacter(char)

    cy.contains(char.name).should('be.visible')
  })
})