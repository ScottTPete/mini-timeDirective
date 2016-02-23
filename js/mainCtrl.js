app.controller('MainController', function ($scope) {
	$scope.scott = 'Scott';
	$scope.ctrlFormat = 'medium';
	$scope.updateFormat = function() {
		if($scope.ctrlFormat = "short") {
			$scope.ctrlFormat= 'short';
		} else {
			$scope.ctrlFormat = 'medium';
		}
	}
});