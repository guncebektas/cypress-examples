import {deleteOrder, doLogin, insertOrder} from '../utilities/commons.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Service Charge Test', function()
{
  it('Set 10% as waiter fee and check', function()
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
    
    cy.get('select[name="serviceCharge"]').select('10').invoke('val');
    
    cy.get('#storeFormUpdate').submit();
  
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 30.80);
  
    deleteOrder();
  
    cy.visit(ROUTE.STORE_PREFERENCES);
  
    cy.get('select[name="serviceCharge"]').select('0').invoke('val');
  
    cy.get('#storeFormUpdate').submit();
  });
});