const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    setupNodeEvents(on, config) {
      // pas de config avancée nécessaire
    }
  },
  screenshotOnRunFailure: true,
  video: true,
});