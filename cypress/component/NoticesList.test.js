import React from 'react';
import { mount } from 'cypress/react';
import NoticesLists from '../../src/components/NoticesList';

describe('Loading Spinner component test', () => {

    it('should List title be visible and contains the expected text', () => {
        mount(<NoticesLists></NoticesLists>);

        const titleSelector = 'h2';
        cy.get(titleSelector)
            .should('be.visible')
            .should('have.text', 'Ingrese la noticia que desea buscar');
    });

    it('should first card be visible after a success search', () => {
        const dummyFunction = () => {
            console.log('Hello World');
        }
        const inputText = 'economia';

        mount(<NoticesLists
            input={inputText}
            setLandingPageFooterDisplayFalse={dummyFunction}
            ></NoticesLists>);

        const cardSelector = ':nth-child(1) > .MuiCardContent-root';
        cy.get(cardSelector)
            .should('be.visible');
    });

    it('should error message be visible after an unsuccessfull search', () => {
        const dummyFunction = () => {
            console.log('Hello World');
        }
        const inputText = 'asdasd';

        mount(<NoticesLists
            input={inputText}
            setLandingPageFooterDisplayFalse={dummyFunction}
            ></NoticesLists>);

        const h2Selector = 'h2';
        cy.get(h2Selector)
            .should('be.visible')
            .should('have.text', 'No se encontraron noticias relacionadas al texto que se busco: asdasd');
    });
    
})