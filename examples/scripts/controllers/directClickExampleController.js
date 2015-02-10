(function(angular) {
	'use strict';

	angular.module('app').controller(
		'directClickExampleController', [
			'$scope',
			function($scope) {
				$scope.valueIncreasedWithDirectClick = 0;
			}
		]
	);
})(window.angular);