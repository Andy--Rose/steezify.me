angular.module('music', [])
	.controller('MusicController', ['$scope', '$window', '$routeParams', 'JPlayerFactory', 
		function MusicController($scope, $window, $routeParams, JPlayerFactory) {
			this.name = 'MusicController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				JPlayerFactory.init()
				JPlayerFactory.setMusicPlaylist('#jquery_music_player', '#music_player_container')
			};
		}
	]);
