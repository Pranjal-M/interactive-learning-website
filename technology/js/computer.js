var back=0;
$(document).ready(function(){
	$(".heading").slideDown("slow");
});
$(".choice").hover(function(){
	$(this).css("background-color","#222");
	$(this).find("img").addClass("hidden");
	$(this).find("h2").removeClass("hidden");	
	},function(){
	$(this).css("background-color","rgba(255,121,19,1.00)");
	$(this).find("h2").addClass("hidden");
	$(this).find("img").removeClass("hidden");	
});
$("#hardware").click(function(){
	$(".hardware-content").removeClass("hidden");
	$(".title-content").fadeOut(500);
	back=1;
});
$("#Monitor").hover(function(){
	$("#screen, #lower, #stand-1, #stand-2").css("fill","#FFBE1D");
	$("#monitortext").css("display","block");
},function(){
	$("#screen, #lower, #stand-1, #stand-2").css("fill","");
	$("#monitortext").css("display","none");
});
$("#CPU").hover(function(){
	$("#cabin, #slot3, #slot2, #slot1, #power, #reset, #usb1, #usb2, #usb3").css("fill","#FFBE1D");
	$("#cputext").css("display","block");
},function(){
	$("#cabin, #slot3, #slot2, #slot1, #power, #reset, #usb1, #usb2, #usb3").css("fill","");
	$("#cputext").css("display","none");
});
$("#Keyboard").hover(function(){
	$("#keyboardbase, #keys").css("fill","#FFBE1D");
	$("#keyboardtext").css("display","block");
},function(){
	$("#keyboardbase, #keys").css("fill","");
	$("#keyboardtext").css("display","none");
});
$("#Mouse").hover(function(){
	$("#mousebase, #mouse-shadow").css("fill","#FFBE1D");
	$("#mousetext").css("display","block");
},function(){
	$("#mousebase, #mouse-shadow").css("fill","");
	$("#mousetext").css("display","none");
});
$("#CPU").click(function(){
	$("#CPU").css("transform","translate(-5800px, -2000px) scale(5)").delay(300).fadeOut(1000);
	$(".hardware-content").css("padding","0").delay(400).css("padding","-5%");
	$("#Monitor, #Keyboard, #Mouse").hide();
	$("#CPUInside").delay(400).fadeIn(1000);
	back=2;
});
$("#back").click(function(){
	if(back==2)
	{
		$("#CPU").fadeIn(1000).delay(300).css("transform","translate(0, 0) scale(1)");
		$("#Monitor, #Keyboard, #Mouse").fadeIn(1000);
		$("#CPUInside").fadeOut(1000);
	}
	if(back==1)
	{
		$(".hardware-content").addClass("hidden");
		$(".title-content").fadeIn(500);
	}
		back--;
});