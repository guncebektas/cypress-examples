import {cyDataTable, doLogin} from '../utilities/commons.js';
import {ROUTE} from '../../../client/shared/enums/client.js';
import {USER} from '../../../imports/shared/enums/general.js';

/**
 *
 * @param user {object}
 */
let creatUserForStore = function(user)
{
  doLogin();
  
  cy.visit(ROUTE.STORE_USER_PROFILE_FORM);
  
  cy.get('input[name="username"]').clear().type(user.EMAIL_PREFIX);
  
  cy.get('input[name="password"]').clear().type(user.PASSWORD);
  
  cy.get('input[name="password2"]').clear().type(user.PASSWORD);
  
  cy.get('input[name="name"]').clear().type(user.NAME);
  
  cy.get('input[name="surname"]').clear().type(user.SURNAME);
  
  cy.get('select[name="type"]').select(user.TYPE);
  
  cy.get('#profileFormInsert').submit();
  
  cy.get('.swal2-confirm').click();
};

describe('Create user for store', function()
{
  it('Create a storeKitchen', function()
  {
    creatUserForStore(USER.TRIAL.STORE_KITCHEN);
  });
  
  it('Create a storeCourier', function()
  {
    creatUserForStore(USER.TRIAL.STORE_COURIER);
  });
  
  it('Create a new storeWorker', function()
  {
    creatUserForStore(USER.TRIAL.STORE_WORKER_TEMP);
  });
  
  it('Login with the new storeWorker', function()
  {
    doLogin(USER.TRIAL.STORE_WORKER_TEMP.EMAIL, USER.TRIAL.STORE_WORKER_TEMP.PASSWORD);
  });
  
  it('Delete the new storeWorker', function()
  {
    doLogin();
    
    cy.visit(ROUTE.STORE_USER_PROFILE_LIST);
    
    cyDataTable.search(USER.TRIAL.STORE_WORKER_TEMP.EMAIL);
  
    cy.get('#DataTables_Table_1 tr:first-of-type td:last-of-type a.btn-delete').click();
    
    cy.get('.swal2-confirm').click();
  });
});