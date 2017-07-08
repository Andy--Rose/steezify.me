angular.module('home', [])
	.controller('HomeController', ['$routeParams',
		function HomeController($routeParams) {
			this.name = 'HomeController';
			this.params = $routeParams;
		}
	]);