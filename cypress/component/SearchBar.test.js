import React from 'react';
import { mount } from 'cypress/react';
import SearchBar from '../../src/components/SearchBar';

describe('Loading Spinner component test', () => {
    const inputSelector = 'input';
    const butonSelector = 'button';

    beforeEach(() => {
        mount(<SearchBar></SearchBar>);
    });

    it('should SearchBar h1 be visible and contains the title', () => {
        const titleSelector = 'h1';
        cy.get(titleSelector)
            .should('be.visible')
            .should('have.text', 'Ingrese la noticia que desea buscar');
    });

    it('should SearchBar h2 be visible and contains the expected text', () => {
        const titleSelector = 'h2';
        cy.get(titleSelector)
            .should('be.visible')
            .should('have.text', 'Ingrese la noticia que desea buscar');
    });

    it('should Buscar button be visible and disabled', () => {
        cy.get(butonSelector)
            .should('be.visible')
            .should('have.text', 'Buscar')
            .should('be.disabled');
    });

    it('should Input be visible', () => {
        cy.get(inputSelector)
            .should('be.visible');
    });

    it('should label be visible and contains the expected text', () => {
        const labelSelector = 'label';
        cy.get(labelSelector)
            .should('be.visible')
            .should('have.text', 'Ingrese noticia a buscar');
    });

    it('should button stills disabled after write 3 letters in the input', () => {
        cy.get(inputSelector).type('asd');

        cy.get(butonSelector)
            .should('be.visible')
            .should('have.text', 'Buscar')
            .should('be.disabled');
    });

    it('should button be enabled after write 4 letters in the input', () => {
        cy.get(inputSelector).type('asdf');

        cy.get(butonSelector)
            .should('be.visible')
            .should('have.text', 'Buscar')
            .should('be.enabled');

        cy.get(butonSelector)
            .click();
    });

    it('should an error message be displayed after search for an inexistent notice', () => {
        const h2Selector = 'h2';
        const textToSearch = 'asdf';

        cy.get(inputSelector)
            .type(textToSearch);

        cy.get(butonSelector)
            .should('be.visible')
            .should('have.text', 'Buscar')
            .should('be.enabled');

        cy.get(butonSelector)
            .click();

        cy.get(h2Selector)
            .should('be.visible')
            .should('have.text', `No se encontraron noticias relacionadas al texto que se busco: ${textToSearch}`);        
    });
    
})