'use strict';

function pageRoutes($stateProvider) {

  var about = {
      abstract: true, // Removes access to this page until we decide to use it.
      name: 'about',
      url: '/how-it-works',
      template: '<div about-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'about',
        pageTitle: 'How it Works',
        pageDescription: 'Find your favourite cause, donate and receive vouchers of equal value that are redeemable at participating businesses.'
      }
  },
  policy = {
      name: 'policy',
      url: '/policy',
      template: '<div policy-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'policy',
        pageTitle: 'Privacy Policy',
        pageDescription: 'GiveLoco Privacy Policy.'
      }
  },
  terms = {
      name: 'terms',
      url: '/terms',
      template: '<div terms-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'terms',
        pageTitle: 'Terms of Service',
        pageDescription: 'GiveLoco Terms of Service.'
      }
  };

$stateProvider.state(about);
$stateProvider.state(policy);
$stateProvider.state(terms);

}

pageRoutes.$inject = ['$stateProvider'];
module.exports = pageRoutes;
