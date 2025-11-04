describe('Noveli Registration Flow', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('Registers a new user successfully', function() {
    const newUser = this.users.newUser
    cy.register(newUser.username, newUser.email, newUser.password, newUser.confirmPassword)

    cy.url().should('include', '/verify-email?blocked=true')
    cy.contains('Email Verification Required').should('be.visible')
    // Note: actual email delivery is not tested here
  })

  it('Shows errors when required fields are missing', () => {
    cy.visit('/auth')
    cy.contains('Register').click()
    cy.get('button[type="submit"]').click()

    cy.contains('Username must be at least 3 characters').should('be.visible')
    cy.contains('Please enter a valid email address').should('be.visible')
    cy.contains('Password must be at least 6 characters').should('be.visible')
    cy.contains('Password must be at least 6 characters').should('be.visible')
  })

  it('Shows error for mismatched passwords', function() {
    const newUser = this.users.newUser
    cy.register(newUser.username, newUser.email, newUser.password, 'WrongPassword!')

    cy.contains('Passwords do not match').should('be.visible')
  })

  it('Shows error for duplicate email or username', function() {
    const existingUser = this.users.validUser
    cy.register(existingUser.username, 'qa-tester@example.com', existingUser.password, existingUser.password)

    cy.contains('Registration failed').should('be.visible')
  })
})
