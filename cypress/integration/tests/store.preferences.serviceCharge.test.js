import {doLogin} from '../utilities/doLogin.js';
import {deleteOrder, insertOrder} from '../utilities/order.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Service Charge Test', function()
{
  it('Service Charge - Percentage', function()
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
    
    cy.get('select[name="serviceCharge"]').select('10').invoke('val');
    
    cy.get('#storeFormUpdate').submit();
  
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 38.00);
  
    deleteOrder();
  
    cy.visit(ROUTE.STORE_PREFERENCES);
  
    cy.get('select[name="serviceCharge"]').select('0').invoke('val');
  
    cy.get('#storeFormUpdate').submit();
  });
  
  it('Service Charge - Numeric', function()
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
    
    cy.get('select[name="serviceCharge"]').select('10%').invoke('val');
    
    cy.get('#storeFormUpdate').submit();
    
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 30.80);
    
    deleteOrder();
    
    cy.visit(ROUTE.STORE_PREFERENCES);
    
    cy.get('select[name="serviceCharge"]').select('0').invoke('val');
    
    cy.get('#storeFormUpdate').submit();
  });
});