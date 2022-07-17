import React from 'react';
import { mount } from 'cypress/react';
import Pages from '../../src/components/Pages';

describe('Loading Spinner component test', () => {
    const paginateFunc = () => {
        console.log('Function called!. :)');
    }

    beforeEach(() => {
        mount(<Pages
            paginate={paginateFunc}
        ></Pages>);
    });

    it('should Pagination be visible', () => {
        const paginationSelector = 'ul';
        cy.get(paginationSelector)
            .should('be.visible');
    });
    
    it('should Pagination previous page button be visible', () => {
        const paginationPreviousButtonSelector = 'button[aria-label="Go to previous page"]';
        cy.get(paginationPreviousButtonSelector)
            .should('be.visible');
    });

    it('should Pagination next page button be visible', () => {
        const paginationNextButtonSelector = 'button[aria-label="Go to next page"]';
        cy.get(paginationNextButtonSelector)
            .should('be.visible');
    });

    it('should Pagination page 1 button be visible and clickable', () => {
        const paginationPageOneButtonSelector = 'button[aria-label="page 1"]';
        cy.get(paginationPageOneButtonSelector)
            .should('be.visible')
            .click();
    });
})