import {doLogin} from '../utilities/commons.js';
import {USER} from '../../../imports/shared/enums/general.js';
import {ROUTE} from '../../../client/shared/enums/client.js';

describe('Login Test', function()
{
  // ----------------------------------------------------------------------
  
  it('Login Wrong Password', function()
  {
    cy.visit(ROUTE.LOGOUT);
  
    cy.visit('/');
  
    cy.get('#email').clear().type(USER.TRIAL.STORE_OWNER.EMAIL);
    cy.get('#password').clear().type(USER.TRIAL.STORE_OWNER.EMAIL);
    
    cy.get('#loginForm').submit();
    
    cy.get('.swal2-confirm').click();
  });
  
  // ----------------------------------------------------------------------
  
  it('Login Not Existing User', function()
  {
    cy.visit(ROUTE.LOGOUT);
  
    cy.visit('/');
  
    cy.get('#email').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
    cy.get('#password').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
    
    cy.get('#loginForm').submit();
    
    cy.get('.swal2-confirm').click();
  });
  
  // ----------------------------------------------------------------------
  
  it('Login Successfully', function()
  {
    doLogin();
  });
  
});
