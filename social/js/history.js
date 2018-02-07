$(".cube").click(function(){
	var name = this.getAttribute("id");
	var PSV = new PhotoSphereViewer({
		panorama: 'images/photosphere/'+name+'.png',
		container: 'photosphere',
		move_speed: 0.75,
		min_fov: 20,
		default_fov: 40,
		anim_speed: '1.2rpm',
		time_anim: false,
		default_lat: 0.2,
		default_long: 0.1,
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
				alert('Hello from custom button');
			  }
			},
			'caption',
			'fullscreen'
		  ]
	});
	$(".items").hide();
});