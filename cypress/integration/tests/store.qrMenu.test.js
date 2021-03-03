import {ROUTE} from '../../../client/shared/enums/client.js';
import {DUMMY_PROFILE_ID} from '../../../server/modules/dummies/fixtures/dummyProfiles.js';

describe('QR Menu', function()
{
  it('The menu is valid', function()
  {
    cy.visit(`${ROUTE.STORE_MENU}/${DUMMY_PROFILE_ID}`);
    
    cy.get('.list-group .list-group-item').first().should('contain', 'Dürümler');
    
    cy.get('.card-body p.m-0').first().should('contain', 'Adana Dürüm Eko');
  });
});