angular.module('feed', [])
	.controller('FeedController', ['$scope', '$window', '$routeParams',
		function FeedController($scope, $window, $routeParams) {
			this.name = 'FeedController';
			this.params = $routeParams;

			// Initialize Facebook plugin
			// (function(d, s, id) {
			// var js, fjs = d.getElementsByTagName(s)[0];
			// 	if (d.getElementById(id)) return;
			// 	js = d.createElement(s); js.id = id;
			// 	js.src = "//connect.facebook.net/en_US/sdk.js";
			// 	fjs.parentNode.insertBefore(js, fjs);
			// }(document, 'script', 'facebook-jssdk'));

			// Load the SDK Asynchronously
	        (function(d){
	          var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
	          js = d.createElement('script'); js.id = id; js.async = true;
	          js.src = "//connect.facebook.net/en_US/all.js";
	          d.getElementsByTagName('head')[0].appendChild(js);
	        }(document));

			$window.fbAsyncInit = function() {
			    FB.init({ 
			      appId: '{your-app-id}',
			      status: true, 
			      cookie: true, 
			      xfbml: true,
			      version: 'v2.4'
			    });
			};

			//$window.fbAsyncInit();

			$scope.feed = new Instafeed({
				get: 'user',
        		userId: '1962233567',
				clientId: '9dcc4584defe415a9fcabe2087a57648',
				accessToken: '1962233567.9dcc458.7d0078788974466dbfb4399c7315e86a'
			});
			$scope.feed.run();
		}
	]);