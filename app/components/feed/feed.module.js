angular.module('feed', [])
	.controller('FeedController', ['$scope', '$routeParams',
		function FeedController($scope, $routeParams) {
			this.name = 'FeedController';
			this.params = $routeParams;

			$scope.feed = new Instafeed({
				get: 'user',
        		userId: '1962233567',
				clientId: '9dcc4584defe415a9fcabe2087a57648',
				accessToken: '1962233567.9dcc458.7d0078788974466dbfb4399c7315e86a'
			});
			$scope.feed.run();
			//instafeed("9dcc4584defe415a9fcabe2087a57648", "1962233567")
		}
	]);