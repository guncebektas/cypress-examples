import {doLogin, insertOrder} from '../utilities/commons.js';

describe('Order Store To Order Modal Tests', function()
{
  // ----------------------------------------------------------------------
  beforeEach(() =>
  {
    doLogin();
    
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 28);
  });
  
  it('Increase & decrease the amount of product in the order', function()
  {
    cy.get('#modal-product-to-order table tr:first-of-type td:first-of-type .btn-falcon-success').click();
  
    cy.get('#modal-product-to-order table tr:first-of-type td:last-of-type').should('contain', '2 x 3.00');
  
    cy.get('#modal-product-to-order table tr:first-of-type td:first-of-type .btn-falcon-danger').click();
  
    cy.get('#modal-product-to-order table tr:first-of-type td:last-of-type').should('contain', '1 x 3.00');
  });
  
  it('Remove one product from the order', function()
  {
    cy.get('#modal-product-to-order table tr:first-of-type td:first-of-type .btn-falcon-danger').click();
  
    cy.get('#modal-product-to-order table tr:first-of-type td:first-of-type').should('not.contain', 'Dondurma');
  });
  
  it('Tag the order when inserting', function()
  {
    cy.get('[data-target="#modal-tag"]').click();
    
    cy.get('input[name="tag"]').clear().type('X');
    
    cy.get('#updateOrderTag').submit();
    
    cy.get('h5 span.badge').should('contain', 'X');
  });
  
  it('Make a numeric discount while inserting', function()
  {
    cy.get('button[data-target="#modal-discount"]').click();
    
    cy.get('#discountForm input[name="discount"]').clear().type('2');
    
    cy.get('#discountForm button[type="submit"]').click();
    
    cy.get('[data-test="store-to-order-modal-discount"]').should('contain', 2);
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 26);
  });
  
  it('Make a percentage discount while inserting', function()
  {
    cy.get('button[data-target="#modal-discount"]').click();
    
    cy.get('#discountForm input[name="discount"]').click().clear().type('10%');
    
    cy.wait(1000);
    
    cy.get('#discountForm button[type="submit"]').click();
    
    cy.get('[data-test="store-to-order-modal-discount"]').should('contain', '10%');
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 25.20);
  });
});