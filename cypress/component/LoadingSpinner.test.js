import React from 'react';
import { mount } from 'cypress/react';
import LoadingSpinner from '../../src/components/LoadingSpinner';

describe('Loading Spinner component test', () => {

    beforeEach(() => {
        mount(<LoadingSpinner></LoadingSpinner>);
    });

    it('should Loading be visible and contains "Loading..." text', () => {
        const spinnerSelector = '.visually-hidden';
        cy.get(spinnerSelector)
            .should('be.visible')
            .contains('Loading...');
    });

})