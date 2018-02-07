$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#data a").hover(function(e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  }).click(function() {
    var ref = $(this).attr("class").replace(' active', '');
	universe.addClass("hidden");
	  $(".radio-tile-group").addClass("hidden");
	  $(".planet-details").removeClass("hidden");
	  $("#detail").load("planet-details/"+ref+".txt");
	  $("#planet-bg source").attr({src:"videos/Planets/"+ref+".mp4"});
	  $("#planet-bg")[0].load();
  });
  $("#close-btn").click(function(){
	  $(".planet-details").addClass("hidden");
	  universe.removeClass("hidden");
	  $(".radio-tile-group").removeClass("hidden");
  });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });
});