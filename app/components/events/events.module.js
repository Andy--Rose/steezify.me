angular.module('events', [])
	.controller('EventsController', ['$scope', '$routeParams', 
		function EventsController($scope, $routeParams) {
			this.name = 'EventsController';
			this.params = $routeParams;
		}
	]);