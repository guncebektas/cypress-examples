import {doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {USER} from '../../../imports/shared/enums/general.js';

describe('Profile Test', function()
{
  it('Edit profile details', function()
  {
    doLogin();
    
    cy.visit(`profile/details/${USER.TRIAL.STORE_OWNER.ID}`);
    
    cy.get('#profileFormUpdate input[name="phone"]').clear().type(TEST.CUSTOMER.PHONE);
    
    cy.get('#profileFormUpdate').submit();
  });
});