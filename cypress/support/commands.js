// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Meteor method call
 * TODO: Should be improved. See: https://github.com/cypress-io/cypress/issues/2443
 */
Cypress.Commands.add('call', function call(methodName, ...args)
{
  const log = Cypress.log({
    name: 'call',
    message: `${methodName}(${Cypress.utils.stringify(args)})`,
    consoleProps()
    {
      return {
        methodName,
        arguments: args
      };
    }
  });
  
  return new Promise((resolve, reject) =>
  {
    const Meteor = cy.state('window').Meteor;
    
    // If app is reloaded, a new "Meteor" instance is created
    // and we have to re-create connection in that case.
    if(!this.testConnection || this.Meteor !== Meteor)
    {
      this.testConnection = Meteor.connect(Meteor.absoluteUrl());
      this.Meteor = Meteor;
    }
    
    this.testConnection.apply(methodName, args, (error, result) =>
    {
      log.set({
        consoleProps()
        {
          return {
            methodName,
            arguments: args,
            error,
            result
          };
        }
      });
      
      if(error)
      {
        reject(error);
      }
      else
      {
        resolve(result);
      }
    });
  }).catch((error) =>
  {
    Cypress.utils.throwErr(error, {
      onFail: log
    });
  });
});

Cypress.Commands.add('allSubscriptionsReady', (options = {}) =>
{
  const log = {
    name: 'allSubscriptionsReady'
  };
  
  const getValue = () =>
  {
    const DDP = cy.state('window').DDP;
    
    return DDP._allSubscriptionsReady();
  };
  
  const resolveValue = () =>
  {
    return Cypress.Promise.try(getValue).then((value) =>
    {
      return cy.verifyUpcomingAssertions(value, options, {
        onRetry: resolveValue
      });
    });
  };
  
  return resolveValue().then((value) =>
  {
    Cypress.log(log);
    return value;
  });
});

export function waitForMeteorSubscriptions()
{
  cy.window().its('DDP').invoke('_allSubscriptionsReady').should((ready) =>
  {
    expect(ready).to.be.true;
  });
}
