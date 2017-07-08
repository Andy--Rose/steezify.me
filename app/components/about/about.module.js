angular.module('about', [])
	.controller('AboutController', ['$scope', 'ExpandingBlockFactory', '$routeParams',
		function AboutController($scope, ExpandingBlockFactory, $routeParams) {
			this.name = 'AboutController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				ExpandingBlockFactory.setActions(".info-container");
			};
		}
	]);