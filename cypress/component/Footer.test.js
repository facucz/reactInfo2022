import React from 'react';
import { mount } from 'cypress/react';
import Footer from '../../src/components/Footer';

describe('Footer component test', () => {

  beforeEach(() => {
    mount(<Footer></Footer>);
  });

  it('should contains Copyright', () => {
    cy.contains('Copyright 2022').should('be.visible');
  });

  it('should contains Siguenos', () => {
    cy.contains('Siguenos:').should('be.visible');
  });

  it('should contains Informatio text', () => {
    cy.contains('Hecho para Informatorio - Resistencia - Chaco - 2022').should('be.visible');
  });

  it('should twitter icon be visible', () => {
    const twitterIconSelector = '.bi-twitter';

    cy.get(twitterIconSelector).should('be.visible');
  });

  it('should facebook icon be visible', () => {
    const facebookIconSelector = '.bi-facebook';

    cy.get(facebookIconSelector).should('be.visible');
  });

  it('should instagram icon be visible', () => {
    const instagramIconSelector = '.bi-instagram';

    cy.get(instagramIconSelector).should('be.visible');
  });

})