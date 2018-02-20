appModule.factory('JPlayerFactory', 
	function() {
		var JPlayerFactory = {
			init: function() {
				$("#playlist-shuffle").click(function() {
					myPlaylist.shuffle();
				});
				$("#playlist-shuffle-false").click(function() {
					myPlaylist.shuffle(false);
				});
				$("#playlist-shuffle-true").click(function() {
					myPlaylist.shuffle(true);
				});

				$("#playlist-select--2").click(function() {
					myPlaylist.select(-2);
				});
				$("#playlist-select--1").click(function() {
					myPlaylist.select(-1);
				});
				$("#playlist-select-0").click(function() {
					myPlaylist.select(0);
				});
				$("#playlist-select-1").click(function() {
					myPlaylist.select(1);
				});
				$("#playlist-select-2").click(function() {
					myPlaylist.select(2);
				});

				$("#playlist-next").click(function() {
					myPlaylist.next();
				});
				$("#playlist-previous").click(function() {
					myPlaylist.previous();
				});

				$("#playlist-play").click(function() {
					myPlaylist.play();
				});
				$("#playlist-play--2").click(function() {
					myPlaylist.play(-2);
				});
				$("#playlist-play--1").click(function() {
					myPlaylist.play(-1);
				});
				$("#playlist-play-0").click(function() {
					myPlaylist.play(0);
				});
				$("#playlist-play-1").click(function() {
					myPlaylist.play(1);
				});
				$("#playlist-play-2").click(function() {
					myPlaylist.play(2);
				});

				// The pause command
				$("#playlist-pause").click(function() {
					myPlaylist.pause();
				});
				// Changing the playlist options
				// Option: autoPlay
				$("#playlist-option-autoPlay-true").click(function() {
					myPlaylist.option("autoPlay", true);
				});
				$("#playlist-option-autoPlay-false").click(function() {
					myPlaylist.option("autoPlay", false);
				});

				// Option: addTime
				$("#playlist-option-addTime-0").click(function() {
					myPlaylist.option("addTime", 0);
				});
				$("#playlist-option-addTime-fast").click(function() {
					myPlaylist.option("addTime", "fast");
				});
				$("#playlist-option-addTime-slow").click(function() {
					myPlaylist.option("addTime", "slow");
				});
				$("#playlist-option-addTime-2000").click(function() {
					myPlaylist.option("addTime", 2000);
				});
				// Option: removeTime
				$("#playlist-option-removeTime-0").click(function() {
					myPlaylist.option("removeTime", 0);
				});
				$("#playlist-option-removeTime-fast").click(function() {
					myPlaylist.option("removeTime", "fast");
				});
				$("#playlist-option-removeTime-slow").click(function() {
					myPlaylist.option("removeTime", "slow");
				});
				$("#playlist-option-removeTime-2000").click(function() {
					myPlaylist.option("removeTime", 2000);
				});
				// Option: shuffleTime
				$("#playlist-option-shuffleTime-0").click(function() {
					myPlaylist.option("shuffleTime", 0);
				});
				$("#playlist-option-shuffleTime-fast").click(function() {
					myPlaylist.option("shuffleTime", "fast");
				});
				$("#playlist-option-shuffleTime-slow").click(function() {
					myPlaylist.option("shuffleTime", "slow");
				});
				$("#playlist-option-shuffleTime-2000").click(function() {
					myPlaylist.option("shuffleTime", 2000);
				});
			},

			setMusicPlaylist: function(playerClassName, containerClassName) {
				var myPlaylist = new jPlayerPlaylist(
					{
					  	jPlayer: playerClassName,
					  	cssSelectorAncestor: containerClassName
					}, [
						{
						    title:"Halloween Mix 2017",
						    artist:"Steezify",
						    mp3:"/public/music/04 Halloween 2017.mp3",
						    poster: "/public/img/covers/cover-hw17.jpg",
						    link: "https://soundcloud.com/steezify/steezify-halloween-mix-2017"
						},
						{
						    title:"Humble vs. Flashlight (feat. Kendrick Lamar & Deorro)",
						    artist:"Steezify",
						    mp3:"/public/music/01 Kendrick Lamar & Deorro - Humble.mp3",
						    wav:"/public/music/01 Kendrick Lamar & Deorro - Humble.wav",
						    poster: "/public/img/covers/HumbleFlashlight.png",
						    link: "https://theartistunion.com/tracks/f1da7e"
					  	},
					  	{
						    title:"GDF Contest Round 1",
						    artist:"Steezify",
						    mp3:"/public/music/01 GDF Contest Round 1.mp3",
						    poster: "/public/img/covers/GDFRound1.jpg",
						    link: "https://soundcloud.com/steezify/groove-cruise-contest-2017"
					  	},
					  	{
						    title:"Summer Drive",
						    artist:"Steezify",
						    mp3:"/public/music/01 Summer Drive.mp3",
						    poster: "/public/img/covers/SummerDrive.jpg",
						    link: "https://soundcloud.com/steezify/summer-drive"
					  	},
					  	{
						    title:"Paradiso 2015 Headliners Mix",
						    artist:"Steezify",
						    free: true,
						    mp3:"/public/music/01 Paradiso 2015 Headliners Minimix.mp3",
						    poster: "/public/img/covers/Paradiso2015.jpg",
						    link: "https://www.mixcloud.com/steezify/paradiso-2015-headliners-mix/"
					  	}
					], 
					{
					  	supplied: "mp3, wav",
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
		};

		return JPlayerFactory
	}
);