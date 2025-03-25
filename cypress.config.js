// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: "https://www.amphora.net",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // You can register your plugins here
      // Example: Add cucumber preprocessor plugin
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(
        on,
        config
      );
      return config;
    },
    specPattern: "cypress/integration/**/*.{js,ts,feature}", // Add your test files pattern
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
