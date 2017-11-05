$("#left-semi").hover(
	function(){
		$("#vid-2").hide();
		$("#sub-modules-1-trigger").removeClass('hidden');
		$(".interact-btn, .desc, #vid-1").delay(300).fadeIn(800);
		$("#left-semi").css({'border-radius':'50%', 'background-color': 'rgba(0,0,0,0.9)', 'color':'#fff',width: '70vh'});
		$(".title").css('padding','8vh 0 0 0');
		$(".title").addClass("text-center");
	},
	function(){
		$("#left-semi").css({width: '35vh','border-radius':'50%', 'background-color': '#fff', 'color':'#000'});
		$("#left-semi").css('border-radius','35vh 0 0 35vh');
		$("#right-semi").css('border-radius','0 35vh 35vh 0');
		$("#sub-modules-1-trigger").addClass('hidden');
		$(".interact-btn, .desc, #vid-1, #vid-2").fadeOut();
		$("#right-semi").delay(300).show(300);
		$(".title").removeClass("text-center");
		$(".title").css('padding','70% 3%');
	}
);
$("#right-semi").hover(
	function(){
		$("#right-semi").css({'border-radius':'50%', 'background-color': 'rgba(0,0,0,0.9)', 'color':'#fff',width: '70vh'});
		$("#left-semi, #vid-1").hide();
		$("#sub-modules-2-trigger").removeClass('hidden');
		$(".interact-btn, .desc, #vid-2").delay(300).fadeIn(800);
		$(".title").css('padding','8vh 0 0 0');
		$(".title").addClass("text-center");
	},
	function(){
		$("#right-semi").css({width: '35vh','border-radius':'50%', 'background-color': '#fff', 'color':'#000'});
		$("#left-semi").css('border-radius','35vh 0 0 35vh');
		$("#right-semi").css('border-radius','0 35vh 35vh 0');
		$("#sub-modules-2-trigger").addClass('hidden');
		$(".interact-btn, .desc, #vid-2, #vid-1").fadeOut();
		$("#left-semi").delay(600).show(0);
		$(".title").removeClass("text-center");
		$(".title").css('padding','70% 3%');
	}
);
$("#sub-modules-1-trigger").click(function(){
	$("#sub-modules-1, #top").removeClass("hidden");
});
$("#sub-modules-2-trigger").click(function(){
	$("#sub-modules-2, #top").removeClass("hidden");
});
$("#top").click(function(){
	$("#sub-modules-1, #top, #sub-modules-2").addClass("hidden");
});