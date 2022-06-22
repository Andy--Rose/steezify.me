angular.module('music', ['ngMaterial'])
	.controller('MusicController', 
		function MusicController($scope, $window, $routeParams, $timeout, $mdSidenav, JPlayerFactory) {
			this.name = 'MusicController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				// JPlayerFactory.init()
				// JPlayerFactory.setMusicPlaylist('#jquery_music_player', '#music_player_container')
				if ($routeParams.track == null) {
					$routeParams.track = 'bananeurysm';
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
		    	
		    	if (track == 'bananeurysm') {
		  			$('#music-menu-bananeurysm').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209681082&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/quiterightrecords" title="Quite Right Records" target="_blank" style="color: #cccccc; text-decoration: none;">Quite Right Records</a> · <a href="https://soundcloud.com/quiterightrecords/steezify-bananeurysm" title="Steezify - Bananeurysm" target="_blank" style="color: #cccccc; text-decoration: none;">Steezify - Bananeurysm</a></div>'
				  	coverArt = "/public/img/covers/bananeurysm.png"
				  	title = "Bananeurysm"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		  		if (track == 'footprints') {
		  			$('#music-menu-footprints').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209681067&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/quiterightrecords" title="Quite Right Records" target="_blank" style="color: #cccccc; text-decoration: none;">Quite Right Records</a> · <a href="https://soundcloud.com/quiterightrecords/steezify-footprints" title="Steezify - Footprints" target="_blank" style="color: #cccccc; text-decoration: none;">Steezify - Footprints</a></div>'
				  	coverArt = "/public/img/covers/bananeurysm.png"
				  	title = "Footprints"
				  	contentFound = true;
				  	isTrack = true;
		  		}
		    	if (track == 'sos') {
		  			$('#music-menu-sos').addClass('active');
				  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/608080035&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
				  	coverArt = "/public/img/covers/sos.jpg"
				  	title = "Avicii - SOS (Steezify Remix)"
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

		  		// mixes
		  		if (track == "mhms050") {
		  			$('#music-menu-mhms050').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsteezify%2Fmonday-house-music-social-050-20210803-010055%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/mhms050.png"
				  	title = "Monday House Music Social 050"
				  	contentFound = true;
				  	isMix = true;
		  		}
		  		if (track == "mixwed") {
		  			$('#music-menu-mixwed').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsteezify%2Fdenver-house-music-mix-wednesday%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/mixwed.jpg"
				  	title = "DHM Mix Wednesday"
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
		  		if (track == "reset") {
		  			$('#music-menu-reset').addClass('active');
		  			embed = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fsteezify%2Freset-campout-2021%2F" frameborder="0" ></iframe>'
		  			coverArt = "/public/img/covers/reset.png"
				  	title = "Reset Campout"
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
