angular.module('feed', [])
	.controller('FeedController', ['$scope', '$routeParams',
		function FeedController($scope, $routeParams) {
			this.name = 'FeedController';
			this.params = $routeParams;
		}
	]);