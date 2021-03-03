import {doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Order Search Tests', function()
{
  beforeEach(() =>
  {
    doLogin();
  
    cy.visit(ROUTE.ORDER_SEARCH);
  });
  
  it('Search an order', function()
  {
    cy.get('input[name="orderId"]').type(TEST.COMPLETED_ORDER_ID);
    
    cy.get('#orderFormSearch').submit();
    
    cy.get('span[data-test-order-id]').should('contain', TEST.COMPLETED_ORDER_ID);
  });
  
  it('Search a wrong order id', function()
  {
    cy.get('input[name="orderId"]').type('XXX');
  
    cy.get('#orderFormSearch').submit();
  
    cy.get('span[data-test-order-id]').should('not.exist');
  });
});