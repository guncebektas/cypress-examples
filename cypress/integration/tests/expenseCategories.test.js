import {cyDataTable} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Expense Category Test', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Insert expense category', function()
  {
    cy.visit('expense/category/form/new');
    
    cy.get('#expenseCategoryFormInsert input[name="title"]').type(TEST.EXPENSE_CATEGORY.TITLE);
    
    cy.get('#expenseCategoryFormInsert').submit();
  });
  
  it('Edit expense category', function()
  {
    cy.visit('expense/category/list');
    
    cyDataTable.search(TEST.EXPENSE_CATEGORY.TITLE);
    
    cyDataTable.clickEdit();
    
    cy.get('#expenseCategoryFormUpdate input[name="title"]').type('X'); // Update title
    
    cy.get('#expenseCategoryFormUpdate').submit();
  });
  
  it('Delete expense category', function()
  {
    cy.visit('expense/category/list');
    
    cyDataTable.search(`${TEST.EXPENSE_CATEGORY.TITLE}X`);
    
    cyDataTable.clickDelete();
    
    cy.get('.swal2-confirm').click();
  });
});