'use strict';

module.exports = angular.module('common.constants', [])
	.constant('AUTH_EVENTS', require('./AUTH_EVENTS.js'))
	.constant('USER_ROLES', require('./USER_ROLES.js'));