'use strict';

function userAccountRoutes($stateProvider) {

  var account = {
      parent: 'user.id',
      name: 'account',
      abstract: true,
      url: '/account',
      template: '<div users-account-layout></div>',
      controller: 'UsersAccountCtrl',
      data: {
        restricted: true
      }
  },
  accountBilling = {
      name: 'account.billing',
      url: '/billing-info',
      template: '<div users-account-billing-info></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'billing',
        pageTitle: 'Account Billing Information',
        pageDescription: 'Add and update billing and credit card information.'
      }
  },
  accountDetails = {
      name: 'account.details',
      abstract: true,
      url: '',
      template: '<div users-account-details></div>',
      data: {
        moduleClasses: 'users account'
      }
  },
  accountDetailsView = {
      name: 'account.details.view',
      url: '/details',
      template: '<div users-account-details-view></div>',
      data: {
        pageClasses: 'details view',
        pageTitle: 'Account Details',
        pageDescription: 'Your account information.'
      }
  },
  accountDetailsEdit = {
      name: 'account.details.edit',
      url: '/details/edit',
      template: '<div users-account-details-edit></div>',
      data: {
        pageClasses: 'details edit',
        pageTitle: 'Edit Account Details',
        pageDescription: 'Edit your account information.'
      }
  },
  accountHistory = {
      name: 'account.history',
      url: '/history',
      template: '<div users-account-history></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'history',
        pageTitle: 'Account History',
        pageDescription: 'User account history.'
      }
  },
  accountSponsors = {
      name: 'account.sponsors',
      url: '/sponsors',
      template: '<div users-account-sponsors></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'sponsors',
        pageTitle: 'Sponsors and Sponsorships',
        pageDescription: 'Cause sponsors and business sponsorships.'
      }
  },
  accountChangePassword = {
      name: 'account.changePassword',
      url: '/change-password',
      template: '<div users-account-change-password></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'change-password',
        pageTitle: 'Change Account Password',
        pageDescription: 'User account settings.'
      }
  };

$stateProvider.state(account);
$stateProvider.state(accountBilling);
$stateProvider.state(accountDetails);
$stateProvider.state(accountDetailsView);
$stateProvider.state(accountDetailsEdit);
$stateProvider.state(accountHistory);
$stateProvider.state(accountSponsors);
$stateProvider.state(accountChangePassword);

}

userAccountRoutes.$inject = ['$stateProvider'];
module.exports = userAccountRoutes;