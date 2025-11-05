Cypress.Commands.add('login', (username, password) => {
    cy.visit('/auth')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
    cy.contains("Writer's Dashboard").should('be.visible')
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

Cypress.Commands.add('createCharacter', (character) => {
    cy.visit('/characters/101')
    cy.contains('Create Character').click()

    // Ensure Manual tab is selected
    cy.contains('Create New Character').should('be.visible')

    // Fill Basic Info
    cy.get('input[name="name"]').type(character.name)
    cy.get('input[name="age"]').type(character.age)
    cy.get('input[name="gender"]').type(character.gender)
    cy.get('input[name="occupation"]').type(character.occupation)
    cy.contains('label', 'Roles in Story')
        .parent()
        .find('input[placeholder*="Add role"]')
        .type('Protagonist{enter}')

    // Fill Personality
    cy.contains('label', 'MBTI Type')
        .parent()
        .find('button[role="combobox"]')
        .click()

    cy.get('[role="option"]').should('be.visible') // wait for options to appear
    cy.contains('INTJ: The Architect').click({ force: true })

    cy.get('textarea[name="backstory"]').type(character.backstory)
    cy.get('textarea[name="goals"]').type(character.goals)
    cy.get('textarea[name="appearance"]').type(character.appearance)

    // Submit
    cy.get('button[type="submit"]').click()
})