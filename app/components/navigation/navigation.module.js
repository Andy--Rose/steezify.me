angular.module('navigation', [])
	.controller('NavigationController', [ '$scope', 
		function($scope, $http) {
			this.name = 'NavigationController';

			$scope.initLinks = function() {
				$('.nav-link').click(function() {
					$('#navigationbar').collapse('hide');
				});
			};
		}
	]
);