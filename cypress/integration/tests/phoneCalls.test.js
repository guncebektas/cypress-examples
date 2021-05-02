import {TEST} from '../constants/constantsForTests.js';
import {ROUTE} from '../../../client/shared/enums/client.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Phone Call Test', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Check recent call', function()
  {
    cy.get('#newPhoneCallForm input[name="phone"]').clear().type(`${TEST.CUSTOMER.PHONE}12`);
  
    cy.get('#newPhoneCallForm button[type="submit"]').click();
  
    cy.visit(ROUTE.PHONE_CALL_LIST);
    
    cy.get('#DataTables_Table_1_filter input[type="search"]').clear().type(`${TEST.CUSTOMER.PHONE}12`);
    
    cy.get('tr:first-of-type td:last-of-type a').should('be.visible');
  });
  
  it('Check recent call', function()
  {
    cy.visit(`${ROUTE.PHONE_CALL_INSERT}/${TEST.CUSTOMER.PHONE}`);
    
    cy.visit(ROUTE.PHONE_CALL_LIST);
    
    cy.get('#DataTables_Table_1_filter input[type="search"]').clear().type(TEST.CUSTOMER.PHONE);
    
    cy.get('tr:first-of-type td:last-of-type a').should('be.visible');
  });
  
  it('Not existing customer called', function()
  {
    cy.visit(`${ROUTE.PHONE_CALL_INSERT}/YYY`);
    
    cy.get('#customerFormInsert input[name="name"]').invoke('val').should('not.contain', TEST.CUSTOMER.NAME);
  });
  
  it('An existing customer called', function()
  {
    cy.visit(`${ROUTE.PHONE_CALL_INSERT}/${TEST.CUSTOMER.PHONE}`);
    
    cy.get('#customerFormUpdate input[name="name"]').invoke('val').should('contain', TEST.CUSTOMER.NAME);
    
    cy.get('#customerFormUpdate input[name="name"]').clear().type(TEST.CUSTOMER.NAME);
    
    cy.get('#customerFormUpdate').submit();
  });
  
});