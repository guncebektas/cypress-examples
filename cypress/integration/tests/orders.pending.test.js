import {doLogin, insertOrder} from '../utilities/commons.js';

describe('Pending Orders Tests', function()
{
  
  beforeEach(() =>
  {
    doLogin();
    
    insertOrder();
  
    cy.get('#modal-product-to-order .btn-close').click();
    
    insertOrder();
  
    cy.get('#modal-product-to-order .btn-close').click();
  });
  
  it('Order number increase', function()
  {
    cy.get('.order-card:first-of-type h5').should('not.be.equal', 'Siparis: 1');
  });
  
  it('Remove order', function()
  {
    cy.get('.order-card .btn-delete-order').first().click();
  
    cy.get('.swal2-confirm').click();
  });
});