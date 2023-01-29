//Google maps initialize function
function initialize() {
	//---- Code for a small maps located in footer ----
	var myOptions = { 
		//Coordinates of the map's center
		center: new google.maps.LatLng(40.710670, -73.999604), 
		//Zoom level
		zoom: 15,
		//Type of the map (posible values .HYBRID, .SATELLITE, .ROADMAP, .TERRAIN)
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	//Define the map and select the element in which it will be displayed
	var map = new google.maps.Map(document.getElementById("gmaps"),myOptions);
	var marker = new google.maps.Marker({
		//Coordinate of the map marker's location
		position: new google.maps.LatLng(40.710670, -73.999604),
		map: map,
		//Text that will be displayed when the mouse hover on the marker
		title:"Goodold Restaraunt"
	});
	//---- Code for a big maps located in contact section ----
	if (document.getElementById("contact-gmaps")) {
		var myOptions1 = { 
			//Coordinates of the map's center
			center: new google.maps.LatLng(40.710670, -73.999604), 
			//Zoom level
			zoom: 15,
			//Type of map (possible values .ROADMAP, .HYBRID, .SATELLITE, .TERRAIN)
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		//Define the map and select the element in which it will be displayed
		var map1 = new google.maps.Map(document.getElementById("contact-gmaps"),myOptions1);
		var marker1 = new google.maps.Marker({
			//Coordinate of the marker's location
			position: new google.maps.LatLng(40.710670, -73.999604),
			map: map1,
			//Text that will be displayed when the mouse hover on the marker
			title:"Goodold Restaraunt"
		});
	}
}
			
$(window).load(function() {
	initialize();
	
	//Main Sliders
	$('#slider').nivoSlider({
		effect:'fade',
		pauseOnHover:true,
		captionOpacity:0.9,
		pauseTime:17000
	});
	
	//Illustration Slider (used in "Our Story" on Main Page)
	$('#slider1').nivoSlider({
		effect:'fade',
		pauseOnHover:true,
		captionOpacity:0.7,
		pauseTime:5000
	});
	$('#slider2').nivoSlider({
		effect:'fade',
		pauseOnHover:true,
		captionOpacity:0.7,
		pauseTime:5000
	});
	
	if (!($.browser.msie)  && !(parseInt($.browser.version, 10) === 8)) {
		//Social button animation 
		$('#social-button img').mouseout(function(){
			$(this).css('opacity','0.6');
		}).mouseover(function(){
			$(this).css('opacity','1');
		});
		//Form submit button animation 
		$('#send-button, #contact-send-button').mouseout(function(){
			$(this).css('opacity','0.9');
		}).mouseover(function(){
			$(this).css('opacity','1');
		});
	}

	//Drop-down menu
	$("#item-blog").mouseenter(function(){
		$("#drop-down-blog").fadeIn(500);
	}).mouseleave(function(){
		$("#drop-down-blog").fadeOut(500);
	});
	$("#item-story").mouseenter(function(){
		$("#drop-down-story").fadeIn(500);
	}).mouseleave(function(){
		$("#drop-down-story").fadeOut(500);
	});
	
	//Smooth scrolling
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	
	//Lightbox plugin for menu page
	$(".food-wrap a").lightBox();
	
	//Lightbox plugin for gallery page
	$("#gallery-wrap .image-bg a").lightBox();
	
	//Lightbox plugin for blog and blog post page
	$(".blog-image").lightBox();
	
	//FancyCaption plugin for menu page
	$(".fancycaption-fade").fancyCaption({
		slideTopBar:false, 
		slideBottomBar:false, 
		slideLeftBar:false, 
		slideRightBar:false, 
		fadeFrom:1, 
		fadeTo:0.2
	});
	
	//FancyCaption plugin for gallery page
	$(".fancycaption-full").fancyCaption({
		slideLeftBar:false, 
		slideRightBar:false, 
		fadeFrom:1, 
		fadeTo:0.2
	});
	
	//Tweeter Feed for blog sidebar
	$(".tweet").tweet({
		//Enter username whose tweet you want to display
        username:"envatowebdesign",
        avatar_size:32,
        count:3
    });
	
	//Accordion widget initializing
	$(".accordion").accordion({
		icons: {
			'header':'accordionplus', 
			'headerSelected':'accordionminus'
		}
	});
	//Tabs widget initializing
	$(".tabs").tabs();

});