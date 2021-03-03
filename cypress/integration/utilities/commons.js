import {waitForMeteorSubscriptions} from '../../support/commands.js';
import {USER} from '../../../imports/shared/enums/general.js';
import {TEST} from '../constants/constantsForTests.js';

/**
 * Wait for provided ms
 * @param timeMs {number}
 */
export function wait(timeMs = 1000)
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

/**
 * Login with provided user name and password (subscription aware)
 * @param username {string}
 * @param password {string}
 */
export function doLogin(username = USER.TRIAL.STORE_OWNER.EMAIL, password = USER.TRIAL.STORE_OWNER.PASSWORD)
{
  cy.visit('/logout');
  
  cy.visit('/');
  
  cy.get('#email').clear().type(username);
  cy.get('#password').clear().type(password);
  
  cy.get('#loginForm').submit();
  
  cy.wait(1000);
  
  cy.window().its('Meteor').invoke('userId').should((userId) =>
  {
    expect(userId).not.to.be.null;
  });
  
  waitForMeteorSubscriptions();
}

export class cyDataTable
{
  static search(text)
  {
    cy.get('#DataTables_Table_1_filter input[type="search"]').clear().type(text);
    
    cy.wait(1000);
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

export function insertOrder()
{
  cy.wait(1000);
  
  cy.get('button[data-test="btn-order-id-0"]').click();
  
  cy.get(`button[data-test="btn-store-to-order-${TEST.PRODUCT_IDS.ICE_CREAM}"]`).click();
  
  cy.get(`button[data-test="btn-store-to-order-${TEST.PRODUCT_IDS.DESSERT}"`).click();
  
  cy.get(`button[data-test="btn-store-to-order-${TEST.PRODUCT_IDS.DESSERT}"`).click();
}

export function deleteOrder()
{
  cy.get('button[data-test="store-to-order-modal-delete-order"]').click();
  
  cy.get('.swal2-confirm').click();
}