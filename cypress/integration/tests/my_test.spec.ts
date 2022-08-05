import { input } from "../../fixtures/fieldInputs";

describe("drive2.ru testing", () => {
    beforeEach("Open main page", () => {
        cy.visit("/");
    });
    it("Check login page", () => {
        cy.login(input.randomEmail, input.randomPassword);
    });

    it("Check search field", () => {
        cy.searchField(input.cars.mini);
        cy.checkSearchResult(input.searchResultText);
    });

    it("Check sign up", () => {
        cy.signUp(input.signUpBody);
    });

    it("Check auto", () => {
        cy.carСhoice();
    });

    it("Check communities page", () => {
        cy.searchField(input.cars.volvo);
        cy.communitiesPage();
    });
});
