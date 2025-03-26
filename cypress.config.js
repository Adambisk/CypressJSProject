const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amphora.net",
    supportFile: "cypress/support/e2e.js",  // Make sure this is correct
    video: true,
    screenshotOnRunFailure: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
