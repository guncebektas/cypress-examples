import {doLogin} from '../utilities/commons.js';
import {USER} from '../../../imports/shared/enums/general.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Admin Tests', function()
{
  it('Prepare database for test', function()
  {
    doLogin();
    
    cy.window().then((win) => {
      win.Meteor.call('clear.database');
    })
    
    cy.wait(5000);
    
    cy.window().then((win) => {
      win.Meteor.call('insert.dummy.data');
    })
    
    cy.wait(5000);
    
    cy.url().should('contain', 'localhost');
  });
  
  it('Expire the license of a store', function()
  {
    doLogin();
    
    cy.visit(`cms/upgrade/${USER.TRIAL.STORE_OWNER.ID}`);
  
    cy.get('.extend[data-time="0"]').click();
  
    cy.get('.swal2-confirm').click();
    
    cy.visit(ROUTE.HOME);
    
    cy.get('.btn-falcon-danger[href="/upgrade"]').should('be.visible');
    
  });
  
  it('Extend the license of a store', function()
  {
    doLogin();
    
    cy.visit(`cms/upgrade/${USER.TRIAL.STORE_OWNER.ID}`);
    
    cy.get('.extend[data-time="31"]').click();
  
    cy.get('.swal2-confirm').click();
  
    cy.visit(ROUTE.HOME);
  
    cy.get('.btn-falcon-warning[href="/upgrade"]').should('be.visible');
  });
});