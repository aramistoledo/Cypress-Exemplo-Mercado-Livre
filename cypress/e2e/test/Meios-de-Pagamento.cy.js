/// <reference types="cypress"/>

context('Meios de pagamento Mercado Livre', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Visualizar meios de pagamento', () => {
        cy.get('img[alt="Meios de pagamento"]').click()
        cy.get('div[class="andes-modal__content"]').should("be.visible")
        cy.get('.andes-modal__header').should("be.visible")
        cy.get('.andes-modal__title').contains("Meios de pagamento").should("be.visible")     
    });
});