angular.module('music', ['ngMaterial'])
	.controller('MusicController', 
		function MusicController($scope, $window, $routeParams, $timeout, $mdSidenav, JPlayerFactory) {
			this.name = 'MusicController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				// JPlayerFactory.init()
				// JPlayerFactory.setMusicPlaylist('#jquery_music_player', '#music_player_container')
				if ($routeParams.track == null) {
					$routeParams.track = 'sos';
				}
				setPageContents($routeParams.track)
			};

			$scope.toggleNav = buildDelayedToggler('left');

			/**
		     * Supplies a function that will continue to operate until the
		     * time is up.
		     */
		    function debounce(func, wait, context) {
		      var timer;

		      return function debounced() {
		        var context = $scope,
		            args = Array.prototype.slice.call(arguments);
		        $timeout.cancel(timer);
		        timer = $timeout(function() {
		          timer = undefined;
		          func.apply(context, args);
		        }, wait || 10);
		      };
		    }

		    /**
		     * Build handler to open/close a SideNav; when animation finishes
		     * report completion in console
		     */
		    function buildDelayedToggler(navID) {
		      return debounce(function() {
		        // Component lookup should always be available since we are not using `ng-if`
		        $mdSidenav(navID)
		          .toggle()
		          .then(function () {
		          	window.scrollTo(0, 0);
		          });
		      }, 200);
		    }

		    function buildToggler(navID) {
		      return function() {
		        // Component lookup should always be available since we are not using `ng-if`
		        $mdSidenav(navID).toggle()
		      };
		    }

			function setPageContents(track) {
				$('md-button[id^="music-menu-"]').removeClass('active'); // reset the active menu items
		    	contentFound = false;
		    	isTrack = false;
		    	isMix = false;
		    	isShow = false;
		    	
		    	if (track == 'sos') {
		  			$('#music-menu-sos').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608080035&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
				  	coverArt = "/public/img/covers/sos.jpg"
				  	title = "Avicii - SOS (Steezify Remix)"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		  		if (track == 'mdr') {
		  			$('#music-menu-mdr').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/447348048&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
				  	coverArt = "/public/img/covers/mdr.png"
				  	title = "Party Favor & Baauer - MDR (Steezify Remix)"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		  		if (track == 'devil') {
		  			$('#music-menu-devil').addClass('active');
				  	embed = '<iframe src="https://wavo.me/embed/pulses/23255567790010000" width="100%" height="450" frameborder="0"></iframe>'
				  	coverArt = "/public/img/covers/devil.png"
				  	title = "Grace Gracie Ft. Bre - Devil (Steezify Remix)"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		  		if (track == 'overandover') {
		  			$('#music-menu-overandover').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/360857360&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
				  	coverArt = "/public/img/covers/overandover.jpg"
				  	title = "Luke Anders & AElectriX - Over And Over (Steezify Remix)"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		  		if (track == 'humble') {
		  			$('#music-menu-humble').addClass('active');
				  	embed = '<iframe src="https://wavo.me/embed/pulses/21140494583810000" width="100%" height="450" frameborder="0"></iframe>'
				  	coverArt = "/public/img/covers/humble.png"
				  	title = "Humble Flashlight (Steezify Mashup)"
				  	contentFound = true;
				  	isTrack = true;
		  		}

		  		// mixes
		  		if (track == "diso2018") {
		  			$('#music-menu-diso2018').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsteezify%2Fparadiso-2018-dj-contest%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/diso2018.png"
				  	title = "Paradiso 2018 - DJ Contest"
				  	contentFound = true;
				  	isMix = true;
		  		}
		  		if (track == "halloween2017") {
		  			$('#music-menu-halloween2017').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fsteezify%2Fsteezify-halloween-mix-2017%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/halloween2017.jpg"
				  	title = "Halloween 2017 Mix"
				  	contentFound = true;
				  	isMix = true;
		  		}

		  		// shows
		  		if (track == "kinetik") {
		  			$('#music-menu-kinetik').addClass('active');
		  			embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/596968680&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
		  			coverArt = "/public/img/covers/kinetik.jpg"
				  	title = "Kinetik 1 Year @ Black Box 2018"
				  	contentFound = true;
				  	isShow = true;
		  		}
				if (track == "fdgd2018") {
		  			$('#music-menu-fdgd2018').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fsteezify%2Ffrozen-dead-guy-days-2018%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/fdgd2018.png"
				  	title = "Frozen Dead Guy Days 2018"
				  	contentFound = true;
				  	isShow = true;
		  		}
		  		if (track == "chinesenewyear2018") {
		  			$('#music-menu-chinesenewyear2018').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fsteezify%2Fchinese-new-year-decades-pop%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/chinesenewyear2018.png"
				  	title = "Chinese New Year (Decades Pop)"
				  	contentFound = true;
				  	isShow = true;
		  		}
		  		
		  		
			  	if (contentFound) {
					fbq('track', 'ViewContent', {
						content_ids: "track" + track,
						content_type: 'Music',
					});
			  	}

			  	if (isShow) {
			  		collapseMenuTracks();
			  		collapseMenuMixes();
			  		expandMenuShows();
			  	} else if (isMix) {
			  		collapseMenuTracks();
			  		collapseMenuShows();
			  		expandMenuMixes();
			  	} else {
			  		collapseMenuMixes();
			  		collapseMenuShows();
			  		expandMenuTracks();
			  	}

			  	// if (audioContent != null) {
			  	// 	setPlayerContent(audioContent);
			  	// }
			  	$('#music-cover-art').attr("src", coverArt);
			  	$('#music-audio-embed').html(embed);
		    }

		    function collapseMenuTracks() {
		    	$('#music-menu-tracks').removeClass('collapse').addClass('out collapse');
		    }

		    function collapseMenuMixes() {
		    	$('#music-menu-mixes').removeClass('collapse').addClass('out collapse');
		    }

		    function collapseMenuShows() {
		    	$('#music-menu-shows').removeClass('collapse').addClass('out collapse');
		    }

		    function expandMenuTracks() {
		    	$('#music-menu-tracks').removeClass('collapse').addClass('out collapse in');
		    }

		    function expandMenuMixes() {
		    	$('#music-menu-mixes').removeClass('collapse').addClass('out collapse in');
		    }

		    function expandMenuShows() {
		    	$('#music-menu-shows').removeClass('collapse').addClass('out collapse in');
		    }

		    function setPlayerContent(content) {
		    	var myPlaylist = new jPlayerPlaylist(
					{
					  	jPlayer: '#music_player',
					  	cssSelectorAncestor: '#music_player_container'
					}, [
						content
					], 
					{
					  	supplied: "mp3",
					    useStateClassSkin: true,
					    autoBlur: false,
					    smoothPlayBar: true,
					    remainingDuration: true,
					    toggleDuration: true,
						size: {
							width: "250px",
							height: "250px",
							cssClass: ""
						}
					}
				);
		    }
		}
	).controller('MusicNavController', function ($scope, $timeout, $mdSidenav) {
	    $scope.close = function () {
	      // Component lookup should always be available since we are not using `ng-if`
	      $mdSidenav('left').close()
	        .then(function () {
	        });
	    };
	}
);
