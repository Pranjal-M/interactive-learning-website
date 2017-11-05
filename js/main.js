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
//Smooth Scroller
$(window).scroll(function(){
    if ($(window).scrollTop() >= 60){
		$(".header").css('position','fixed');
	}
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	  });
	} // End if
  });
});