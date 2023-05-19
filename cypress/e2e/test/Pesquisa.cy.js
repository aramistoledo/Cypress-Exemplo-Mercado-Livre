/// <reference types="cypress"/>
context('Caixa de pesquisa do Mercado livre', () => {
    
    beforeEach(() => {
        cy.visit('/');
    });

    it('Camisetas Masculinas', () => {
        cy.get('#cb1-edit').type("Camisetas Masculinas {enter}")
        cy.url().should('include', 'camisetas-masculinas')
        cy.get('.ui-search-breadcrumb__title').contains("Camisetas masculinas").should("be.visible")       
    });

    it('Bolsa feminina', () => {
        cy.get('#cb1-edit').type("Bolsa feminina {enter}")
        cy.url().should('include', 'bolsa-feminina')
        cy.get('.ui-search-breadcrumb__title').contains("Bolsa feminina").should("be.visible")      
    });

    it('Tenis infantil', () => {
        cy.get('#cb1-edit').type("Tenis infantil {enter}")
        cy.url().should('include', 'tenis-infantil')
        cy.get('.ui-search-breadcrumb__title').contains("Tenis infantil").should("be.visible")      
    });

    it('Iphone', () => {
        cy.get('#cb1-edit').type("Iphone {enter}")
        cy.url().should('include', 'iphone')
        cy.get('.ui-search-breadcrumb__title').contains("Iphone").should("be.visible")      
    });

    it('Tv smart', () => {
        cy.get('#cb1-edit').type("Tv smart {enter}")
        cy.url().should('include', 'tv-smart')
        cy.get('.ui-search-breadcrumb__title').contains("Tv smart").should("be.visible")      
    });

});