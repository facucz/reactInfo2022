import React from 'react';
import { mount } from 'cypress/react';
import Header from '../../src/components/Header';

describe('Footer component test', () => {

  beforeEach(() => {
    mount(<Header></Header>);
  });

  it('should "Buscador de noticias" be visible', () => {
    cy.contains('Buscador de Noticias').should('be.visible');
  });

  it('should notice-img be visible', () => {
    const imgSelector = '#img-header-notices-explorer';
    cy.get(imgSelector).should('be.visible');
  });

  it('should notice-img be visible', () => {
    const navSelector = 'nav';
    cy.get(navSelector)
      .should('be.visible')
      .should('have.class', 'navbar navbar-expand navbar-dark bg-dark');
  });

})