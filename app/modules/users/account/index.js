'use strict';

module.exports = angular.module('users.account',
	[
		require('./billing-info').name,
		// Cause / Business Banking Info is part of Billing Info
		require('./info').name,
		require('./profile').name,
		require('./history').name,
		require('./layout').name,
		require('./sponsors').name
	])
	.config(require('./usersAccountConfig'))
	.controller('UsersAccountCtrl', require('./UsersAccountController'));
