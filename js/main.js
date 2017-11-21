$("#nav-toggle").click(function(){
	if($("#nav-toggle").prop("checked")){
		$(".sidemenu, .navbar").removeClass("hidden");
		$("#menu-icon").removeClass("glyphicon-menu-hamburger");
		$("#menu-icon").addClass("glyphicon-remove");
		$(".navbar").addClass("expanded");
	}
	else{
		$("#menu-icon").removeClass("glyphicon-remove");
		$("#menu-icon").addClass("glyphicon-menu-hamburger");
		$(".navbar").removeClass("expanded");
		$(".sidemenu, .navbar").addClass("hidden");
	}
});
