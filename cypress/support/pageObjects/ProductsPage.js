class ProductsPage {
    hoverOnProducts() {
        cy.get('nav').contains("Products").trigger("mouseover");
    }

    verifyAllProducts() {
        const productNames = [
            "Symphony CTRM",
            "Alchemy CTRM",
            "VaR Module" // Adjust based on the required productsw
        ];

        productNames.forEach((product) => {
            cy.contains(product).click();
            cy.url().should("include", product.toLowerCase().replace(/\s+/g, "-"));
            cy.go("back");
        });
    }
}

export default ProductsPage;
