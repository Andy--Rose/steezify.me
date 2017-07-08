angular.module('music', [])
	.controller('MusicController', ['$scope', '$routeParams', 
		function MusicController($scope, $routeParams) {
			this.name = 'MusicController';
			this.params = $routeParams;
		}
	]);