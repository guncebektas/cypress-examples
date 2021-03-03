import {ROUTE} from '../../../client/shared/enums/client.js';
import {doLogin} from '../utilities/commons.js';

describe('Lock Screen Test', function()
{
  beforeEach(() =>
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_SECURITY);
  });
  
  const password = '1234';
  
  it('Store does not have a password', function()
  {
    cy.get('input[name="lockPass"]').clear();
    
    cy.get('#storeFormUpdate').submit();
  
    cy.visit(ROUTE.LOCK);
  
    cy.get('input[name="password"]').clear();
    
    cy.get('#lockForm').submit();
  
    cy.url().should('eq', Cypress.config().baseUrl);
  });
  
  it('Store have a password, wrong password provided', function()
  {
    cy.get('input[name="lockPass"]').clear().type(password);
    
    cy.get('#storeFormUpdate').submit();
  
    cy.visit(ROUTE.LOCK);
    
    cy.get('input[name="password"]').clear().type(`X`);
    
    cy.get('#lockForm').submit();
    
    cy.get('.swal2-warning').should('have.class', 'swal2-icon-show');
  });
  
  it('Store have a password, correct password provided', function()
  {
    cy.get('input[name="lockPass"]').clear().type(password);
    
    cy.get('#storeFormUpdate').submit();
  
    cy.visit(ROUTE.LOCK);
    
    cy.get('input[name="password"]').clear().type(password);
    
    cy.get('#lockForm').submit();
    
    cy.url().should('eq', Cypress.config().baseUrl);
  });
});