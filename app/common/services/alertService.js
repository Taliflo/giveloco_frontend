'use strict';

var Alert = function($rootScope, $timeout) {

	var service = {
		showSuccess: function (message) {
			service.showAlert(message, 'alert-success');
		},
		showDanger: function (message) {
			service.showAlert(message, 'alert-danger');
		},
		showAlert: function(message, alertClasses) {

			$rootScope.alertVisible = true;
			$rootScope.alertMessage = message;
			$rootScope.alertClass = alertClasses;

			$timeout(function () {
	            service.hideAlert();
	        }, 4000);
		},

		hideAlert: function() {
			//$('body').prepend('<h1>hidingalert</h1>');
			$rootScope.alertVisible = false;
			$rootScope.alertMessage = '';
		}

	};

	return service;
};

Alert.$inject = ['$rootScope', '$timeout'];
module.exports = Alert;
