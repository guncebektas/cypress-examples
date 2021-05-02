import {doLogin} from '../utilities/doLogin.js';
import {cyDataTable} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Customer Tests', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Insert new customer', function()
  {
    cy.visit(`${ROUTE.CUSTOMER_FORM}/new`);
    
    cy.get('input[name="name"]').type(TEST.CUSTOMER.NAME);
    
    cy.get('input[name="phone"]').type(TEST.CUSTOMER.PHONE);
    
    cy.get('#customerFormInsert').submit();
  
    // The input will be cleared after successful insert
    cy.get('input[name="name"]').should('not.contain', TEST.CUSTOMER.NAME);
  });
  
  it('Insert temp customer', function()
  {
    cy.visit(`${ROUTE.CUSTOMER_FORM}/new`);
  
    cy.get('input[name="name"]').type('XXX');
    
    cy.get('input[name="phone"]').type(`XXX`);
    
    cy.get('#customerFormInsert').submit();
  
    // The input will be cleared after successful insert
    cy.get('input[name="name"]').should('not.contain', 'XXX');
  });
  
  it('Delete the customer', function()
  {
    cy.visit(`${ROUTE.CUSTOMER_LIST}`);
  
    cyDataTable.search(`XXX`);
    
    cy.get('#DataTables_Table_1 tr td:last-of-type .delete').click();
  
    cy.get('.swal2-confirm').click();
  
    cy.get('#DataTables_Table_1 tr td:first-of-type').should('not.contain', TEST.CUSTOMER.NAME);
  });
});