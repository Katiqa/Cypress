const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportHeight: 1600,
    viewportWidth: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
