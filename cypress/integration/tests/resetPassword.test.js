import {USER} from '../../../imports/shared/enums/general.js';

describe('Reset Password Tests', function()
{
  beforeEach(() =>
  {
    cy.visit('/logout');
    
    cy.get('a[href="/reset-password"]').click();
  });
  
  it('User not found', function()
  {
    cy.get('input[name="email"]').clear().type('x@gmail.com');
    
    cy.get('#resetPasswordForm').submit();
    
    cy.get('.swal2-warning').click();
  });
  
  it('Send the link successfully', function()
  {
    cy.get('input[name="email"]').clear().type(USER.TRIAL.STORE_OWNER.EMAIL);
    
    cy.get('#resetPasswordForm').submit();
    
    cy.get('.swal2-confirm').click();
  });
});