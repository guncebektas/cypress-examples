import {deleteOrder, insertOrder} from '../utilities/order.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Order Store To Order Modal Tests', function()
{
  beforeEach(() =>
  {
    doLogin();
    
    insertOrder();
    
    cy.get('[data-test="store-to-order-modal-total"]').should('contain', 28);
  });
  
  it('Count dashes', function()
  {
    cy.get('.dashes').find('.dash').should('have.length', 3);
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
  
  it('Select a table for the order', function()
  {
    let tableName = 'S01';
    
    cy.get('#modal-product-to-order button[data-target="#modal-transfer"]').click();
    
    cy.get('select.table-transfer-new').select(tableName);
    
    cy.get('#modal-transfer .btn-save').click();
    
    cy.get('.border-lg-left p').should('contain', tableName);
  });
  
  it('Select a table which has another order', function()
  {
    cy.get('#modal-product-to-order button[data-target="#modal-transfer"]').click();
    
    cy.get('select.table-transfer-new').select('S01');
    
    cy.get('#modal-transfer .btn-save').click();
  
    cy.get('.swal2-warning').click();
  });
  
  it('Tag the order when inserting', function()
  {
    cy.get('[data-target="#modal-tag"]').click();
    
    cy.get('input[name="tag"]').clear().type('X');
    
    cy.get('#updateOrderTag').submit();
    
    cy.get('h5 span.badge').should('contain', 'X');
  });
  
  it('Select a courier', function()
  {
    let courierName = 'Ritapos Kurye Hesabı';
    
    cy.get('#modal-product-to-order button[data-target="#modal-courier"]').click();
    
    cy.get('select.courier-new').select(`${courierName} (05336115301)`);
    
    cy.get('#modal-courier .btn-save').click();
    
    cy.get('[data-test="order-courier"]').should('contain', courierName);
  });
  
  it('Type an order note', function()
  {
    let note = 'Not';
  
    cy.get('#modal-product-to-order button[data-target="#modal-note"]').click();
  
    cy.get('#modal-note textarea[name="note"]').clear().type(note);
  
    cy.get('#modal-note .btn-save').click();
  
    cy.get('[data-test="order-note"]').should('contain', note);
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
  
  it('Delete the order', function()
  {
    deleteOrder();
  });
  
  it('Open a new order', function()
  {
    cy.get('.modal-footer .order-id[data-order-id="0"]').click();
    
    cy.get('h5').should('contain', 'Yeni Sipariş');
  });
});