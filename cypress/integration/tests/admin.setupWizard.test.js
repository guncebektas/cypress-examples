import {doLogin} from '../utilities/commons.js';

describe('Admin Setup Wizard', function()
{
  beforeEach(() =>
  {
    doLogin();
    
    cy.visit('/welcome/new');
  });
  
  it('Next Button & Tab Selection', function()
  {
    cy.get('#profileFormUpdate .btn-tab-activate').click();
    
    cy.get('#storeFormUpdate input[name="name"]').should('be.visible');
  
    cy.get('a[href="#tab3"]').click();
    
    cy.get('#storeFormUpdate select[name="timeZone"]').should('be.visible');
  });
  
  it('Skip Button', function()
  {
    cy.get('.justify-content-between a.btn.btn-falcon-primary').click({force: true});
  
    cy.url().should('not.contain', 'welcome/new');
  });
});