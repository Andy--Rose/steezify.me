angular.module('mashifychronicles', [])
	.controller('MashifyChroniclesController', ['$scope', '$window', '$routeParams', 'JPlayerFactory', 
		function MashifyChroniclesController($scope, $window, $routeParams, JPlayerFactory) {
			this.name = 'MashifyChroniclesController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				JPlayerFactory.init()
				JPlayerFactory.setMashifyChronicles('#jquery_music_player', '#music_player_container')
			};
		}
	]);
