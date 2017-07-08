appModule.factory('ExpandingBlockFactory', 
	function() {
		var ExpandingBlockFactory = {
			setActions: function(containerClassName) {
				$(containerClassName).unbind('click').click(function(){
					var w = screen.width - 200;
					var h = screen.height - 75;
					$(this).find(".info-inner").toggle();
					$(this).addClass("active");
					$(this).css("position", "absolute");
					$(this).animate({
						width: "80%",
						height: "85%",
						top: "50px",
						left: "15px"
					});
					ExpandingBlockFactory.setActions(containerClassName);
				});

				$(containerClassName + ".active").unbind('click').click(function(){
					$(this).removeClass("active");
					$(this).animate({
						width: "150px",
						height: "150px"
					});
					$(this).find(".info-inner").toggle();
					$(this).css("position", "static");
					ExpandingBlockFactory.setActions(containerClassName);
				});
			}
		};

		return ExpandingBlockFactory
	}
);