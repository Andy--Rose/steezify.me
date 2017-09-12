appModule.factory('JPlayerFactory', 
	function() {
		var JPlayerFactory = {
			init: function(playerClassName, containerClassName) {
				$(playerClassName).jPlayer({
			        ready: function () {
			          $(this).jPlayer("setMedia", {
			            title: "Bubble",
			            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
			            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			          });
			        },
			        cssSelectorAncestor: containerClassName,
			        swfPath: "/js",
			        supplied: "m4a, oga",
			        useStateClassSkin: true,
			        autoBlur: false,
			        smoothPlayBar: true,
			        keyEnabled: true,
			        remainingDuration: true,
			        toggleDuration: true
			      });
			}
		};

		return JPlayerFactory
	}
);