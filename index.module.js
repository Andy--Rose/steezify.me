var appModule = angular.module('steezify.me', [
	'ngRoute',
	'ngMaterial', 
	'ngMessages',
	'ngAria',

	'navigation', 
	'home', 
	'feed', 
	'music', 
	'events',
	'mashifychronicles'
]);

// Routing for the different pages
// All pages go through the index, but the page is displayed differently by the URL

appModule.config(
	function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				template: '<home></home>'
			})
			.when('/feed', {
				template: "<feed></feed>"
			})
			.when('/music', {
				template: "<music></music>"
			})
			.when('/events', {
				template: "<events></events>"
			})
			.when('/mashifychronicles', {
				template: "<mashifychronicles></mashifychronicles>"
			})
			.when('/mashify', {
				template: "<mashifychronicles></mashifychronicles>"
			})
			.when('/mc', {
				template: "<mashifychronicles></mashifychronicles>"
			})
			.otherwise('/');		// Routes other paths to home. TODO: Create error page
	}
);

appModule.controller('IndexController', ['$route', '$routeParams', '$location',
	function($route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
	}
]);