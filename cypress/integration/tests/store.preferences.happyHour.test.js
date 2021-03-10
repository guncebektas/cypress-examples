import {deleteOrder, doLogin, insertOrder} from '../utilities/commons.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Happy Hour Test', function()
{
  it('Enable priceOut2 and check', function()
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
    
    cy.get('input[name="specialHour"]').check();
  
    cy.get('select[name="serviceCharge"]').select('0').invoke('val');
  
    cy.get('#storeFormUpdate').submit();
    
    cy.wait(1000);
    
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 27);
    
    deleteOrder();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
  
    cy.get('input[name="specialHour"]').uncheck();
    
    cy.get('#storeFormUpdate').submit();
  });
});