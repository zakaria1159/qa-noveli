const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://noveli.app',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/commands.js',
    setupNodeEvents(on, config) {
      // You can add custom plugins here
      return config
    }
  }
})