import {doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';

describe('Store Test', function()
{
  it('Edit store', function()
  {
    doLogin();
    
    cy.visit('store/details');
    
    cy.get('#storeFormUpdate input[name="phone"]').clear().type(TEST.CUSTOMER.PHONE); // Update phone
    
    cy.get('#storeFormUpdate').submit();
  });
});