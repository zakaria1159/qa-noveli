Cypress.Commands.add('login', (username, password) => {
  cy.visit('/auth')
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('register', (username, email, password, confirmPassword) => {
  cy.visit('/auth')
  cy.contains('Register').click()
  
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(password)
  cy.get('input[name="confirmPassword"]').type(confirmPassword)
  cy.get('button[type="submit"]').click()
})