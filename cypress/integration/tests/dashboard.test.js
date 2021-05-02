import {doLogin} from '../utilities/doLogin.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Dashboard Tests', function()
{
  // ----------------------------------------------------------------------
  
  it('Component visibility', function()
  {
    doLogin();
    
    cy.visit(ROUTE.HOME);
    
    cy.get('ul.navbar-nav').should('be.visible');
    
    cy.get('[data-test="btn-order-id-0"]').should('be.visible');
    
    cy.get('.btn-full-screen').should('be.visible');
    
    cy.get('#newPhoneCallForm').should('be.visible');
    
    cy.get('#qz-status').should('be.visible');
  });
});