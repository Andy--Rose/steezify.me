function setNavigation(page) {
	$(".nav").find("li").each(function () {
		var item = $(this)[0];
		if (item.id == page) {
			item.className = "active";
		}
		else {
			item.className = "inactive";
		}
	});
}

function setHomeNav() {
	setNavigation('home');
	$(".navbar-brand").each(function() {
		$(this).remove()
	});
	$("#navMenu").find(".navbar").css("display", "inline-block");
    $("#navMenu").find(".navbar").css("float", "none");
}