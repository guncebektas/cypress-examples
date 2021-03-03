import {doLogin} from '../utilities/commons.js';

describe('Stripe Test', function()
{
  it('Buy monthly package', function()
  {
    doLogin();
    
    cy.visit('upgrade');
    
    cy.get('#paymentForm input[name="cardNumber"]').clear().type('4242424242424242');
    
    cy.get('#paymentForm input[name="cardName"]').clear().type('Günce Bektaş');
    
    cy.get('#paymentForm input[name="cardExpiration"]').clear().type('1226'); // Update phone
    
    cy.get('#paymentForm input[name="cardCVC"]').clear().type('123'); // Update phone
    
    cy.get('#paymentForm').submit();
  });
});