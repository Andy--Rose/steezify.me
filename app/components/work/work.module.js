angular.module('work', [])
	.controller('WorkController', ['$scope', '$routeParams', 
		function WorkController($scope, $routeParams) {
			this.name = 'WorkController';
			this.params = $routeParams;
		}
	]);