import Aside from "../../../src/layouts/components/aside"

describe("<Aside />", () => {
    it("renders", () => {
        cy.mount(<Aside />);
        cy.get('[data-cy=logo]').should('have.text', 'Sports Sprint')
    });

    it("onclick it should close the side bar", () => {
        cy.mount(<Aside />);
        cy.get('[data-cy=aside-button-close]').click()
    });

    it("onclick it should open the side bar", () => {
        cy.mount(<Aside />);
        cy.get('[data-cy=aside-button-open]').click()
    });
});