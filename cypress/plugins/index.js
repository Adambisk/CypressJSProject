// cypress/plugins/index.js
module.exports = (on, config) => {
  // This is where you would register any Cypress plugins
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config);
  return config;
};