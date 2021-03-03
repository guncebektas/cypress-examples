import {doLogin} from '../utilities/commons.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Dashboard Tests', function()
{
  // ----------------------------------------------------------------------
  
  it('Dashboard test', function()
  {
    doLogin();
    
    cy.visit(ROUTE.HOME);
    
    cy.get('ul.navbar-nav').should('be.visible');
    
    cy.get('.btn-full-screen').should('be.visible');
  });
});