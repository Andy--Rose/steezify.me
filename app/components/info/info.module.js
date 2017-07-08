angular.module('info', [])
	.controller('InfoController', ['$scope', '$routeParams', 
		function InfoController($scope, $routeParams) {
			this.name = 'InfoController';
			this.params = $routeParams;
		}
	]);