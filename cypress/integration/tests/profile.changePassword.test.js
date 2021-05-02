import {USER} from '../../../imports/shared/enums/general.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Profile Change Password', function()
{
  it('Change Password', function()
  {
    let newPassword = 'x';
    
    doLogin();
  
    cy.visit(`profile/change-password`);
    
    cy.get('#passwordForm input[name="old-password"]').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
    
    cy.get('#passwordForm input[name="new1-password"]').clear().type(newPassword);
    
    cy.get('#passwordForm input[name="new2-password"]').clear().type(newPassword);
    
    cy.get('#passwordForm').submit();
  
    cy.get('.swal2-confirm').click();
    
    cy.get('.btn-logout').click({force: true});
    
    doLogin(USER.TRIAL.STORE_OWNER.EMAIL, newPassword);
    
    cy.visit(`profile/change-password`);
    
    cy.get('#passwordForm input[name="old-password"]').clear().type(newPassword);
    
    cy.get('#passwordForm input[name="new1-password"]').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
    
    cy.get('#passwordForm input[name="new2-password"]').clear().type(USER.TRIAL.STORE_OWNER.PASSWORD);
    
    cy.get('#passwordForm').submit();
  
    cy.get('.swal2-confirm').click();
  });
});