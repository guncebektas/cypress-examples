import {doLogin} from '../utilities/doLogin.js';

describe('Admin Beginning - Prepare Test Environment', function() {
  it('Clear database', function()
  {
    doLogin();
    
    cy.window().then((win) => {
      win.Meteor.call('clear.database');
    })
    
    cy.wait(1000);
    
    cy.url().should('contain', 'localhost');
  });
  
  it('Insert dummy data', function()
  {
    cy.window().then((win) => {
      win.Meteor.call('insert.dummy.data');
    })
    
    cy.wait(1000);
    
    cy.url().should('contain', 'localhost');
  });
});