import {cyDataTable, doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';

describe('Product Test', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Insert product', function()
  {
    cy.visit('product/form/new');
    
    cy.get('#productFormInsert input[name="title"]').type(TEST.PRODUCT.TITLE);
    cy.get('#productFormInsert input[name="priceIn"]').type(TEST.PRODUCT.PRICE_IN);
    cy.get('#productFormInsert input[name="priceOut"]').type(TEST.PRODUCT.PRICE_OUT);
    cy.get('#productFormInsert input[name="priceOut2"]').type(TEST.PRODUCT.PRICE_OUT2);
    
    cy.get('#productFormInsert').submit();
  });
  
  it('Edit product', function()
  {
    cy.visit('product/list/sale');
    
    cyDataTable.search(TEST.PRODUCT.TITLE);
    
    cyDataTable.clickEdit();
    
    cy.get('#productFormUpdate input[name="priceOut"]').clear().type('14'); // Update price
    
    cy.get('#productFormUpdate').submit();
  });
  
  it('Delete product', function()
  {
    cy.visit('product/list/sale');
    
    cyDataTable.search(TEST.PRODUCT.TITLE);
    
    cyDataTable.clickDelete();
    
    cy.get('.swal2-confirm').click();
  });
});