var PSV, name1;
$(".cube").click(function(){
	var number=1;
	$(".items").hide();
	$("#photosphere").show();
	name1 = this.getAttribute("id");
	PSV = new PhotoSphereViewer({
		panorama: 'images/photosphere/'+name1+number+'.jpg',
		container: 'photosphere',
		loading_img: 'images/icons/photosphere-logo.gif',
		move_speed: 0.75,
		min_fov: 20,
		anim_speed: '1.2rpm',
		time_anim: false,
		gyroscope: true,
		navbar: [
			'autorotate',
			'zoom',
			'markers',
			{
			  id: 'info',
			  title: 'Information',
			  className: 'info-button',
			  content: 'i',
			  onClick: function() {
				$("#info").toggleClass("psv-panel--open");
			  }
			},
			'caption',
			'fullscreen'
		  ],
		markers: [
			{
			  id: 'front',
			  longitude: 0.045,
			  latitude: 0,
			  image: 'images/icons/pin.png',
			  width: 32,
			  height: 32,
			  anchor: 'bottom center',
			  tooltip: 'Move Forward.'
			},
			{
			  id: 'back',
			  longitude: 3.1,
			  latitude: 0,
			  image: 'images/icons/pin.png',
			  width: 32,
			  height: 32,
			  anchor: 'bottom center',
			  tooltip: 'Move Backwards.'
		}
		  ]
	});
	PSV.on('select-marker', function(marker) {
		if(marker.id === 'front'){
			number=number+1;			
		}
		else{
			number=number-1;
		}
		if(number==0){
			$(".items").show();
			$("#photosphere").hide();
		}
		else{
			PSV.setPanorama('images/photosphere/'+name1+number+'.jpg');
		}
	});
});


$(".psv-panel-close-button").click(function(){
	$("#info").removeClass("psv-panel--open");
});