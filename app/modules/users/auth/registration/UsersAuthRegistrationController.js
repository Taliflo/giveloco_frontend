/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user = {
		role: null,
		first_name: null,
		last_name: null,
		email: null,
		password: null,
		company_name: null,
		website: null,
		street_address: null,
		country: 'Canada',
		state: 'AB',
		zip: null,
		phone: null,
		tag_list: null,
		description: null,
		summary: null,
		mailing_list_opt_in: true,
    	agree_to_tc: false
	};
}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;