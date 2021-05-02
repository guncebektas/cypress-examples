import {waitForMeteorSubscriptions} from '../../support/commands.js';

/**
 * Wait for provided ms
 * @param timeMs {number}
 */
export function wait(timeMs = 500)
{
  cy.wait(timeMs);
}

/**
 * Subscription aware visit function
 * @param url {string}
 */
export function visit(url)
{
  cy.visit(url);
  
  waitForMeteorSubscriptions();
}

export class cyDataTable
{
  static search(text)
  {
    cy.get('#DataTables_Table_1_filter').scrollIntoView();
    
    cy.get('#DataTables_Table_1_filter input[type="search"]').clear().type(text);
    
    cy.wait(500);
  }
  
  static clickEdit()
  {
    cy.get('#DataTables_Table_1 tr:first-of-type td:last-of-type a:first-of-type').click();
  }
  
  static clickDelete()
  {
    cy.get('#DataTables_Table_1 tr:first-of-type td:last-of-type a:last-of-type').click();
  }
}

export class insertOrder
{
}