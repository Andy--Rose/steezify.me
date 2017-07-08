angular.module('music', [])
	.controller('MusicController', ['$scope', 'ExpandingBlockFactory', '$routeParams', 
		function MusicController($scope, ExpandingBlockFactory, $routeParams) {
			this.name = 'MusicController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				ExpandingBlockFactory.setActions(".info-container");
			};
		}
	]);