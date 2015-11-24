var menuIcon = $(".menu-toggle");
var menu = $(".page-header .page-nav");

var fns = {
	toggleMenu: function (element, target) {
		$(element).on("click", function(){
			$(target).slideToggle();
			$(this).toggleClass("active");
		});
	}
}

fns.toggleMenu(menuIcon, menu)