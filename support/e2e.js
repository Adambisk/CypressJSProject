// e2e.js (or e2e.ts if using TypeScript)
// This file runs before every test, used for global configurations

// Import commands.js to use custom commands
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false prevents Cypress from failing tests on uncaught exceptions
  return false;
});
