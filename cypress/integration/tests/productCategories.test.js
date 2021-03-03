import {cyDataTable, doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';

describe('Product Category Test', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Insert product category', function()
  {
    cy.visit('product/category/form/new');
    
    cy.get('#productCategoryFormInsert input[name="title"]').type(TEST.PRODUCT.TITLE);
    
    cy.get('#productCategoryFormInsert').submit();
  });
  
  it('Edit product category', function()
  {
    cy.visit('product/category/list');
    
    cyDataTable.search(TEST.PRODUCT.TITLE);
    
    cyDataTable.clickEdit();
    
    cy.get('#productCategoryFormUpdate input[name="title"]').type('X'); // Update title
    
    cy.get('#productCategoryFormUpdate').submit();
  });
  
  it('Delete product category', function()
  {
    cy.visit('product/category/list');
  
    cyDataTable.search(TEST.PRODUCT.TITLE);
  
    cyDataTable.clickDelete();
    
    cy.get('.swal2-confirm').click();
  });
});