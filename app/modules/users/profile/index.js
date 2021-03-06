'use strict';

module.exports = angular.module('users.profile',
	[
		require('./business').name,
		require('./cause').name
	])
	.config(require('./usersProfileConfig'))
	.directive('usersProfileView', require('./usersProfileDirective'))
	.controller('UsersProfileCtrl', require('./UsersProfileController'));