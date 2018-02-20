angular.module('mashifychronicles', ['ngMaterial'])
	.controller('MashifyChroniclesController', 
		function MashifyChroniclesController($scope, $window, $routeParams, $timeout, $mdSidenav, $log, JPlayerFactory) {
			this.name = 'MashifyChroniclesController';
			this.params = $routeParams;

			$scope.callSetActions = function() {
				JPlayerFactory.init()
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
		            $log.debug("toggle " + navID + " is done");
		          });
		      }, 200);
		    }

		    function buildToggler(navID) {
		      return function() {
		        // Component lookup should always be available since we are not using `ng-if`
		        $mdSidenav(navID)
		          .toggle()
		          .then(function () {
		            $log.debug("toggle " + navID + " is done");
		          });
		      };
		    }
// poster: "/public/img/covers/Episode1-TheUnderground.png",
		    function setPageContents(season, episode) {
		    	// Default to season 1 episode 1
		    	audioContent = {
				    title:"Episode 1 - The Underground",
				    artist:"Steezify",
				    mp3:"/public/music/1-01 S01E01 - The Underground.mp3",
				    link: "https://soundcloud.com/steezify/mashify-chronicles-s01-e01-the-underground-sound"
			  	}
			  	coverArt = "/public/img/covers/Episode1-TheUnderground.png"
			  	title = "Episode 1.1 - The Underground"
			  	content = "/public/content/mashify-chronicles/season-1/1-theUnderground.txt"

			  	if (season == 1) {
			  		if (episode == 2) {
			  			title = "Episode 1.2 - Trouble"
			  			content = "/public/content/mashify-chronicles/season-1/2-trouble.txt"
					}
					if (episode == 3) {
			  			title = "Episode 1.3 - The Machine"
			  			content = "/public/content/mashify-chronicles/season-1/2-theMachine.txt"
					}
					if (episode == 4) {
			  			title = "Episode 1.4 - Great Escape"
			  			content = "/public/content/mashify-chronicles/season-1/2-greatEscape.txt"
					}
					if (episode == 5) {
			  			title = "Episode 1.5 - Going Down"
			  			content = "/public/content/mashify-chronicles/season-1/2-goingDown.txt"
					}
			  	}

			  	setPlayerContent(audioContent);
			  	$('#mc-cover-art').attr("src", '/public/img/covers/Episode1-TheUnderground.png');
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
	).controller('MCNavController', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  });
