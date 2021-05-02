import {cyDataTable} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Expense Test', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('Insert expense', function()
  {
    cy.visit('expense/form/new');
    
    cy.get('#expenseFormInsert input[name="title"]').type(TEST.EXPENSE.TITLE);
    
    cy.get('#expenseFormInsert select[name="category"]').select('Kira');
    
    cy.get('#expenseFormInsert input[name="amount"]').type('10');
    
    cy.get('#expenseFormInsert').submit();
  });
  
  it('Edit expense', function()
  {
    cy.visit('expense/list');
    
    cyDataTable.search(TEST.EXPENSE.TITLE);
    
    cyDataTable.clickEdit();
    
    cy.get('#expenseFormUpdate input[name="amount"]').clear().type('20'); // Update amount
    
    cy.get('#expenseFormUpdate').submit();
  });
  
  it('Delete expense', function()
  {
    cy.visit('expense/list');
    
    cyDataTable.search(TEST.EXPENSE.TITLE);
    
    cyDataTable.clickDelete();
    
    cy.get('.swal2-confirm').click();
  });
});