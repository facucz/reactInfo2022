import React from 'react';
import { mount } from 'cypress/react';
import Notice from '../../src/components/Notice';
import * as dateUtils from '../../src/utils/dateUtils';

describe('Notice component test', () => {
    const mockProps = {
        title: 'Example title',
        description: 'Example description 123456',
        imgUrl: 'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
        publishiedAt: 'Jul-15-2022',
        urlLink: 'https://www.wikipedia.org/',
        source: 'mock source'
    }

    beforeEach(() => {
        mount(<Notice
            title={mockProps.title}
            description={mockProps.description}
            imgUrl={mockProps.imgUrl}
            publishedAt={mockProps.publishiedAt}
            urlLink={mockProps.urlLink}
            source={mockProps.source}
        ></Notice>);
    });

    it('should Notice title be visible', () => {
        cy.contains('Example title').should('be.visible');
    });

    it('should Notice description be visible', () => {
        cy.contains('Example description 123456').should('be.visible');
    });

    it('should Notice image be visible and contains the correct src', () => {
        const imgSelector = 'img[alt="Image not found"]';

        cy.get(imgSelector)
            .should('be.visible')
            .invoke('attr', 'src')
            .should('eq', mockProps.imgUrl);
    });

    it('should Notice published at be visible and contains the correct value', () => {
        cy.contains(`Publicado el: ${dateUtils.getCustomDate(mockProps.publishiedAt)}`)
            .should('be.visible');
    });

    it('should Notice source be visible and contains the correct value', () => {
        cy.contains(`Fuente: ${mockProps.source}`)
            .should('be.visible');
    });

    it('should Notice link be visible and clickable', () => {
        const linkSelector = 'a'
        cy.get(linkSelector)
            .should('be.visible')
            .invoke('attr', 'target')
            .should('eq', '_blank');
        
        cy.get(linkSelector)
            .invoke('attr', 'href')
            .should('eq', mockProps.urlLink);
            
        cy.get(linkSelector)
            .click();
    });    

})