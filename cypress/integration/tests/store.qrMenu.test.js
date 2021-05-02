import {ROUTE} from '../../../client/shared/enums/client.js';
import {doLogin} from '../utilities/doLogin.js';

describe('Store\'s QR Menu', function()
{
  beforeEach(() =>
  {
    doLogin();
  });
  
  it('QR code is visible', function()
  {
    cy.visit(ROUTE.STORE_QR_MENU);
    
    cy.get('#qr-code canvas').should('be.visible');
  });
});