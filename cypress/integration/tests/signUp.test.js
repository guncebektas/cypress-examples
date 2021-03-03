import {USER} from '../../../imports/shared/enums/general.js';

describe('Sign Up Tests', function()
{
  beforeEach(() =>
  {
    cy.visit('/logout');
  
    cy.get('a[href="/register"]').click();
  });
  
  it('Password are not matching', function()
  {
    cy.get('input[name="email"]').clear().type('guncebektas@gmail.com');
  
    cy.get('input[name="password"]').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
  
    cy.get('input[name="password2"]').clear().type(`${USER.TRIAL.STORE_OWNER.PASSWORD}X`);
    
    cy.get('#registerForm').submit();
  
    cy.get('.swal2-warning').click();
  });
  
  it('User agreement is not checked', function()
  {
    cy.get('input[name="password2"]').clear().type(`${USER.TRIAL.STORE_OWNER.PASSWORD}`);
  
    cy.get('#registerForm').submit();
  
    cy.get('.swal2-warning').click();
  });
  
  it('Registration completed successfully', function()
  {
    cy.get('input[name="storeName"]').clear().type(`${USER.TRIAL.STORE_OWNER_TEMP.STORE_NAME}`);
  
    const uuid = Cypress._.random(0, 1e6);
    cy.get('input[name="email"]').clear().type(`${uuid}${USER.TRIAL.STORE_OWNER_TEMP.EMAIL}`);
  
    cy.get('input[name="password"]').clear().type(USER.TRIAL.STORE_OWNER_TEMP.PASSWORD);
  
    cy.get('input[name="password2"]').clear().type(`${USER.TRIAL.STORE_OWNER_TEMP.PASSWORD}`);
  
    cy.get('input[name="agreement"]').click();
  
    cy.get('#registerForm').submit();
  
    cy.get('.theme-wizard').should('be.visible');
  });
  
  it('Same email try to register again', function()
  {
    cy.get('input[name="storeName"]').clear().type(`XXX`);
  
    cy.get('input[name="email"]').clear().type(USER.TRIAL.STORE_OWNER.EMAIL);
  
    cy.get('input[name="password"]').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
  
    cy.get('input[name="password2"]').clear().type(`${USER.TRIAL.STORE_OWNER.PASSWORD}`);
  
    cy.get('input[name="agreement"]').click();
  
    cy.get('#registerForm').submit();
  
    cy.get('.swal2-error').click();
  });
});