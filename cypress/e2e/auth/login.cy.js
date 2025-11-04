describe('Noveli Login Flow', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('Logs in successfully with valid credentials', function() {
    const user = this.users.validUser
    cy.login(user.username, user.password)

    cy.url().should('include', '/dashboard')
    cy.contains("Writer's Dashboard").should('be.visible')
  })

  it('Shows error on invalid login', function() {
    const user = this.users.invalidUser
    cy.login(user.username, user.password)

    cy.contains('Login failed').should('be.visible')
  })
})
