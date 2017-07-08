angular.module('feed', [])
	.controller('FeedController', ['$scope', 'ExpandingBlockFactory', '$routeParams',
		function FeedController($scope, ExpandingBlockFactory, $routeParams) {
			this.name = 'FeedController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				ExpandingBlockFactory.setActions(".info-container");
			};
		}
	]);