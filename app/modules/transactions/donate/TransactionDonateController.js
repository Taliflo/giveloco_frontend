'use strict';

function TransactionDonateCtrl($rootScope, $scope, TRANSACTION_EVENTS, alertService, TransactionService) {

	var currentUser = $scope.currentUser;

	$scope.name = $scope.currentUser.first_name + ' ' + $scope.currentUser.last_name;
	
	$scope.transaction = {
		stripeToken: null,
		amount: null,
		from_user_id: currentUser.id,
		to_user_id: $scope.user.id
	};

	var resetForm = function() {
		$scope.transaction.amount = '';
		$scope.number = '';
		$scope.expiry = '';
		$scope.cvc = '';
	};

	var transactionSuccess = function() {
		alertService.showAlert(TRANSACTION_EVENTS.donationSuccess, 'alert-success');
		resetForm();
		$scope.donationForm.$setPristine();
	};

	var transactionError = function() {
		alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
	};

	$scope.stripeCallBack = function (status, response) {
		if (response.error) {
			alertService.showAlert(TRANSACTION_EVENTS.paymentFailure, 'alert-danger');
		} else {
			$scope.transaction.stripeToken = response.id;
			TransactionService.donation($scope.transaction).then(transactionSuccess, transactionError);
		}
	};

}

TransactionDonateCtrl.$inject = ['$rootScope', '$scope', 'TRANSACTION_EVENTS', 'alertService', 'TransactionService'];
module.exports = TransactionDonateCtrl;