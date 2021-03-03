import {doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Customer Search Tests', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Search an existing customer', function()
  {
    // First of all insert new customer
    cy.visit(`${ROUTE.CUSTOMER_FORM}/new`);
    
    cy.get('input[name="name"]').type(TEST.CUSTOMER.NAME);
    
    cy.get('input[name="phone"]').type(`${TEST.CUSTOMER.PHONE}`);
    
    cy.get('#customerFormInsert').submit();
    
    cy.get('input[name="name"]').should('not.contain', TEST.CUSTOMER.NAME);
    
    // Search same customer
    cy.visit(ROUTE.CUSTOMER_SEARCH);
    
    cy.get('input[name="phone"]').type(TEST.CUSTOMER.PHONE);
    
    cy.get('#customerFromSearch').submit();
    
    cy.get('input[name="name"]').should('have.value', TEST.CUSTOMER.NAME);
  });
  
  it('Search a none existing customer', function()
  {
    cy.visit(ROUTE.CUSTOMER_SEARCH);
    
    cy.get('input[name="phone"]').type('0');
    
    cy.get('#customerFromSearch').submit();
    
    cy.get('input[name="name"]').should('not.have.value', TEST.CUSTOMER.NAME);
  });
});