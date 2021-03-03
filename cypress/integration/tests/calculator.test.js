import {doLogin} from '../utilities/commons.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Calculator Tests', function()
{
  it('Check functionalities of calculator', function()
  {
    doLogin();
    
    cy.visit(`${ROUTE.ORDER_DETAILS}/De6kDkeesQMpdcp9y`);
    
    cy.get('[data-target="#modal-order-action-buttons"]').click();
    
    cy.wait(1000);
    
    cy.get('[data-target="#modal-calculator"]').click();
    
    cy.get('[data-test="calculator-total"]').click();
  
    cy.get('input[name="calculatorInput"]').should('have.value', '32.00');
  });
});