'use strict';

function userAuthRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var signup = {
      name: 'signup',
      url: '/user/signup',
      template: '<div users-auth-registration></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'signup',
        pageTitle: 'Sign Up',
        pageDescription: 'User Registration.'
      }
  },
  login = {
      name: 'login',
      url: '/user/login',
      template: '<div users-auth-login></div>',
      data: {
        moduleClasses: 'users auth',
        pageClasses: 'login',
        pageTitle: 'Sign In',
        pageDescription: 'Log into your account.'
      }
  };

$stateProvider.state(signup);
$stateProvider.state(login);

}

userAuthRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = userAuthRoutes;