angular.module('mashifychronicles', ['ngMaterial'])
	.controller('MashifyChroniclesController', 
		function MashifyChroniclesController($scope, $window, $routeParams, $timeout, $mdSidenav, JPlayerFactory) {
			this.name = 'MashifyChroniclesController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				// JPlayerFactory.init()
				// TODO: Set using route params
				if ($routeParams.season != null && $routeParams.episode == null) {
					$routeParams.episode = 1;
				}
				setPageContents($routeParams.season,$routeParams.episode)
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
// poster: "/public/img/covers/Episode1-TheUnderground.png",
		    function setPageContents(season, episode) {
		    	episodeFound = false;
			  	if (season == 1) {
			  		$('#mc-menu-season-1').removeClass('collapse').addClass('collapse in');
			  		$('md-button[id^="mc-menu-1."]').removeClass('active');
			  		if (episode == 1) {
			  			$('#mc-menu-1-1').addClass('active');
			  			// audioContent = {
						  //   title:"Episode 1 - The Underground",
						  //   artist:"Steezify",
						  //   mp3:"/public/music/MC1.1-TheUnderground.mp3",
						  //   link: "https://soundcloud.com/steezify/mashify-chronicles-s01-e01-the-underground-sound"
					  	// }
					  	embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/361347950%3Fsecret_token%3Ds-1LjlY&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'
					  	coverArt = "/public/img/covers/Episode1-TheUnderground.png"
					  	title = "Episode 1.1 - The Underground"
					  	content = "/public/content/mashify-chronicles/season-1/1-theUnderground.txt"
					  	episodeFound = true;
			  		}
			  		if (episode == 2) {
			  			$('#mc-menu-1-2').addClass('active');
			  			embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/370562984%3Fsecret_token%3Ds-CzXeF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
			  			coverArt = "/public/img/covers/Episode2-Trouble.png"
			  			title = "Episode 1.2 - Trouble"
			  			content = "/public/content/mashify-chronicles/season-1/2-trouble.txt"
			  			episodeFound = true;
					}
					if (episode == 3) {
						$('#mc-menu-1-3').addClass('active');
						embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/409287873%3Fsecret_token%3Ds-Qdlvi&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
						coverArt = "/public/img/covers/Episode3-TheMachine.png"
			  			title = "Episode 1.3 - The Machine"
			  			content = "/public/content/mashify-chronicles/season-1/3-theMachine.txt"
			  			episodeFound = true;
					}
					if (episode == 4) {
						$('#mc-menu-1-4').addClass('active');
						embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413292960%3Fsecret_token%3Ds-jcvT4&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
						coverArt = "/public/img/covers/Episode4-GreatEscape.png"
			  			title = "Episode 1.4 - Great Escape"
			  			content = "/public/content/mashify-chronicles/season-1/4-greatEscape.txt"
			  			episodeFound = true;
					}
					if (episode == 5) {
						$('#mc-menu-1-5').addClass('active');
						embed = '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/433110033&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'
						coverArt = "/public/img/covers/Episode5-Graduation.png"
			  			title = "Episode 1.5 - Graduation"
			  			content = "/public/content/mashify-chronicles/season-1/5-graduation.txt"
			  			episodeFound = true;
					}
			  	}

			  	if (episodeFound) {
					fbq('track', 'ViewContent', {
						content_ids: "season" + season + "episode" + episode,
						content_type: 'MashifyCronicles',
					});
			  	}

			  	// if (audioContent != null) {
			  	// 	setPlayerContent(audioContent);
			  	// }
			  	$('#mc-cover-art').attr("src", coverArt);
			  	$('#mc-audio-embed').html(embed);
		  		$('#mc-story-title').html(title);
		  		$('#mc-story-content').load(content);
				
		    }

		    function setPlayerContent(content) {
		    	var myPlaylist = new jPlayerPlaylist(
					{
					  	jPlayer: '#mc_player',
					  	cssSelectorAncestor: '#mc_player_container'
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
	).controller('MCNavController', function ($scope, $timeout, $mdSidenav) {
	    $scope.close = function () {
	      // Component lookup should always be available since we are not using `ng-if`
	      $mdSidenav('left').close()
	        .then(function () {
	        });
	    };
  });
