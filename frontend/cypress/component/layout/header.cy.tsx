import Header from "../../../src/layouts/components/header"

describe("<Header />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<header />);
    });
});