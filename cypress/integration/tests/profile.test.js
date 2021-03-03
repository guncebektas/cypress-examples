import {doLogin} from '../utilities/commons.js';
import {TEST} from '../constants/constantsForTests.js';
import {USER} from '../../../imports/shared/enums/general.js';

describe('Profile Test', function()
{
  it('Edit profile', function()
  {
    doLogin();
    
    cy.visit(`profile/details/${USER.TRIAL.STORE_OWNER.ID}`);
    
    cy.get('#profileFormUpdate input[name="phone"]').clear().type(TEST.CUSTOMER.PHONE); // Update phone
    
    cy.get('#profileFormUpdate').submit();
  });
});