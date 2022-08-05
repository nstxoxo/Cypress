declare namespace Cypress {
    interface Chainable<Subject> {
        login(email: string, password: string): void;

        searchField(request: string): void;

        checkSearchResult(text: string): void;

        signUp(text: string): void;

        carСhoice(): void;

        communitiesPage(): void;
    }
}
