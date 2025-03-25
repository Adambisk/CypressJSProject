Here's a structured Cypress project implementing your requirements using **Cucumber (BDD)**, **Page Object Model (POM)**, and best practices. I'll provide the file structure and sample test implementations.

---

### 🚀 Project Structure

```
cypress-project/
│── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   ├── features/
│   │   │   │   ├── products.feature
│   │   │   │   ├── newsletter.feature
│   │   │   ├── step-definitions/
│   │   │   │   ├── products.js
│   │   │   │   ├── newsletter.js
│   │   ├── api/
│   │   │   ├── features/
│   │   │   │   ├── petstore.feature
│   │   │   ├── step-definitions/
│   │   │   │   ├── petstore.js
│   ├── support/
│   │   ├── pageObjects/
│   │   │   ├── ProductsPage.js
│   │   │   ├── NewsletterPage.js
│   │   │   ├── APIRequests.js
│── cypress.config.js
│── package.json
│── cypress/support/e2e.js
│── reports/
│── videos/
│── screenshots/
```

---

## **1️⃣ UI Test Implementation**

### **Feature File (BDD) - `products.feature`**
```gherkin
Feature: Products Page Validation

Scenario: Verify all products open correctly
  Given I visit the Amphora homepage
  When I navigate to the Products dropdown
  Then I should be able to click on each product and verify the page loads
```

### **Step Definition - `products.js`**
```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../support/pageObjects/ProductsPage";

const productsPage = new ProductsPage();

Given("I visit the Amphora homepage", () => {
  cy.visit("https://www.amphora.net");
});

When("I navigate to the Products dropdown", () => {
  productsPage.hoverOnProducts();
});

Then("I should be able to click on each product and verify the page loads", () => {
  productsPage.verifyAllProducts();
});
```

### **Page Object - `ProductsPage.js`**
```javascript
class ProductsPage {
  hoverOnProducts() {
    cy.get('nav').contains("Products").trigger("mouseover");
  }

  verifyAllProducts() {
    const productNames = [
      "Product 1",
      "Product 2",
      "Product 3" // Adjust based on actual product names
    ];

    productNames.forEach((product) => {
      cy.contains(product).click();
      cy.url().should("include", product.toLowerCase().replace(/\s+/g, "-"));
      cy.go("back");
    });
  }
}

export default ProductsPage;
```

---

### **Feature File - `newsletter.feature`**
```gherkin
Feature: Newsletter Signup

Scenario: Verify successful newsletter signup
  Given I visit the Amphora homepage
  When I navigate to the Resources dropdown
  And I sign up for the newsletter
  Then I should see a confirmation message "Thank you for signing up for our newsletter"
```

### **Step Definition - `newsletter.js`**
```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NewsletterPage from "../../support/pageObjects/NewsletterPage";

const newsletterPage = new NewsletterPage();

When("I navigate to the Resources dropdown", () => {
  newsletterPage.hoverOnResources();
});

When("I sign up for the newsletter", () => {
  newsletterPage.signupForNewsletter();
});

Then("I should see a confirmation message {string}", (message) => {
  newsletterPage.verifySuccessMessage(message);
});
```

### **Page Object - `NewsletterPage.js`**
```javascript
class NewsletterPage {
  hoverOnResources() {
    cy.get('nav').contains("Resources").trigger("mouseover");
  }

  signupForNewsletter() {
    cy.get("#newsletter-email").type("testuser@example.com");
    cy.get("#newsletter-submit").click();
  }

  verifySuccessMessage(message) {
    cy.contains(message).should("be.visible");
  }
}

export default NewsletterPage;
```

---

## **2️⃣ API Test Implementation**

### **Feature File - `petstore.feature`**
```gherkin
Feature: Petstore API Tests

Scenario: Perform CRUD operations on pet API
  Given I create a new pet with ID "12345"
  When I update the pet name to "Buddy"
  Then I should be able to fetch the updated pet
  And I delete the pet successfully
```

### **Step Definition - `petstore.js`**
```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import APIRequests from "../../support/pageObjects/APIRequests";

const api = new APIRequests();

Given("I create a new pet with ID {string}", (petId) => {
  api.createPet(petId);
});

When("I update the pet name to {string}", (newName) => {
  api.updatePet(newName);
});

Then("I should be able to fetch the updated pet", () => {
  api.getPet();
});

Then("I delete the pet successfully", () => {
  api.deletePet();
});
```

### **API Requests Helper - `APIRequests.js`**
```javascript
class APIRequests {
  createPet(petId) {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: petId,
      name: "Rex",
      status: "available",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("Rex");
    });
  }

  updatePet(newName) {
    cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
      id: "12345",
      name: newName,
      status: "available",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(newName);
    });
  }

  getPet() {
    cy.request("GET", "https://petstore.swagger.io/v2/pet/12345").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.be.oneOf(["Buddy", "Rex"]);
    });
  }

  deletePet() {
    cy.request("DELETE", "https://petstore.swagger.io/v2/pet/12345").then((response) => {
      expect(response.status).to.eq(200);
    });
  }
}

export default APIRequests;
```

---

## **3️⃣ Configuration & Reporting**

### **Cypress Configuration - `cypress.config.js`**
```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amphora.net",
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
```

---

## **4️⃣ Running the Tests**
### **Run UI Tests**
```bash
npx cypress run --spec "cypress/e2e/ui/**"
```

### **Run API Tests**
```bash
npx cypress run --spec "cypress/e2e/api/**"
```

### **Generate Test Report**
```bash
npx cypress run --reporter mochawesome
```

---

## **📌 Submission**
1. **GitHub**: Push the project to GitHub and share the repo link.
2. **ZIP File**: Zip the `cypress-project` and upload to Google Drive or Dropbox.

---

### **🔥 Key Features**
✅ **Cypress + Cucumber (BDD)**  
✅ **Page Object Model (POM) for UI Tests**  
✅ **CRUD API Tests with Assertions**  
✅ **Screenshots & Video Capture**  
✅ **Automated Reporting with Mochawesome**  
