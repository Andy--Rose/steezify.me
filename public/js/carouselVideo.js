appModule.factory('CarouselVideoFactory',
	function(){
		var CarouselVideoFactory = {
			initCarouselVideo: function() {
				$('.carousel-indicators li').attr("onClick", "$('#carousel_video').hide();");
				$('.carousel-control').attr("ng-click", "$('#carousel_video').hide();");
			},
			embedCarouselVideo: function(url) {
				var html = '<video class="carousel_video_obj" controls autoplay>';
				html += '<source src="' + url + '.mp4" type="video/mp4" />';
				html += '<source src="' + url + '.ogg" type="video/ogg" />';
				html += '</video>';
				$('#carousel_video').show(0);
				document.getElementById("carousel_video").innerHTML = html;
				$('body,html').animate({
					scrollTop: $('body')[0].scrollHeight
				}, 500)
				//vid_container.scrollTop = vid_container.scrollHeight;
			}
		}
		return CarouselVideoFactory;
	}
);