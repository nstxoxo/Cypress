import { locators } from "../locators/locators";

Cypress.Commands.add("login", (email: string, password: string): void => {
    cy.get(locators.loginButton).click();
    cy.get(locators.username).type(email);
    cy.get(locators.password).type(password);
    cy.get(locators.loginButtonField).within(() => {
        cy.get(locators.loginButtonOnPage).click();
    });
    cy.get(locators.validationError).should("be.visible");
});

Cypress.Commands.add("searchField", (inputFieldQuery: string): void => {
    cy.get(locators.inputField).type(inputFieldQuery);
    cy.get(locators.findAnAnswer).click();
});

Cypress.Commands.add("checkSearchResult", (text: string): void => {
    cy.get(locators.carResult).should("be.visible").should("contain", text);
});

Cypress.Commands.add("signUp", (text: string): void => {
    cy.get(locators.signUpButton).click();
    cy.get(locators.signUpWindow).should("contain", text);
});

Cypress.Commands.add("carСhoice", (): void => {
    cy.get(locators.allCarsButton).click();
    cy.get(locators.cars.infinity).click();
    cy.get(locators.title).should("be.visible");
});

Cypress.Commands.add("communitiesPage", (): void => {
    cy.get(locators.menuCommunities).click();
    cy.get(locators.contentHeader).should("be.visible");
});
