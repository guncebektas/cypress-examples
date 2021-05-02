import {doLogin} from '../utilities/doLogin.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Calculator Tests', function()
{
  beforeEach(() =>
  {
    doLogin();
  
    cy.visit(`${ROUTE.ORDER_DETAILS}/De6kDkeesQMpdcp9y`);
  
    cy.get('[data-target="#modal-order-action-buttons"]').click();
  
    cy.get('[data-target="#modal-calculator"]').click();
  });
  
  it('Screen is showing order total', function()
  {
    cy.get('[data-test="calculator-total"]').click();
  
    cy.get('input[name="calculatorInput"]').should('have.value', '32.00');
  });
  
  it('Numeric buttons', function()
  {
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(1)').click();
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(2)').click();
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(3)').click();
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(4)').click();
  
    cy.get('input[name="calculatorInput"]').should('have.value', '10789');
  });
  
  it('Mathematical functions', function()
  {
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(2)').click();
    
    // Add
    cy.get('#calculatorForm .row.row-calc + .row a:nth-of-type(5)').click(); // +
    cy.get('#calculatorForm .row.row-calc + .row a:nth-of-type(2)').click(); // 4
    cy.get('input[name="calculatorInput"]').should('have.value', '7+4');
    
    // Result
    cy.get('#calculatorForm .row:last-of-type a.btn-primary').click();
    cy.get('input[name="calculatorInput"]').should('have.value', '11.00');
  
    // Add
    cy.get('#calculatorForm .row:nth-of-type(3) + .row a:nth-of-type(5)').click(); // -
    cy.get('#calculatorForm .row.row-calc + .row a:nth-of-type(2)').click(); // 4
    cy.get('input[name="calculatorInput"]').should('have.value', '11.00-4');
  
    // Minus
    cy.get('#calculatorForm .row:last-of-type a.btn-primary').click();
    cy.get('input[name="calculatorInput"]').should('have.value', '7.00');
  });
  
  it('Cancel button', function()
  {
    cy.get('#calculatorForm .row.row-calc a:nth-of-type(2)').click();
    cy.get('#calculatorForm .btn-calc.btn-danger').click();
    cy.get('input[name="calculatorInput"]').should('have.value', '');
  });
});