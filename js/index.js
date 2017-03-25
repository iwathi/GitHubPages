$(function(){
	setTimeout(function(){
       $(".l1").velocity({opacity:1, top: 0 }, {delay:0, duration:600, easing:"spring" });
		$(".l2").velocity({opacity:1, top: 0 }, {delay:100, duration:600, easing:"spring" });
		$(".l3").velocity({opacity:1, top: 0 }, {delay:200, duration:600, easing:"spring" });
		$(".l4").velocity({opacity:1, top: 0 }, {delay:300, duration:600, easing:"spring" });
		$(".l5").velocity({opacity:1, top: 0 }, {delay:400, duration:600, easing:"spring" });
		$(".l6").velocity({opacity:1}, {delay:1000, duration:800, easing:"easeInOutQuad" });
		$(".l7").velocity({opacity:1}, {delay:1000, duration:800, easing:"easeInOutQuad" });
		$("#gnav").velocity({opacity:1}, {delay:1000, duration:800, easing:"easeInOutQuad" });
		$("#footer").velocity({opacity:1}, {delay:1000, duration:800, easing:"easeInOutQuad" });
		$(".blue-cover").velocity({height:0, top:-10}, {delay:1000, duration:1000, easing:"easeInOutQuad" });
    },1000);

	setTimeout(function(){
       $(".logo-set-sp").velocity({opacity:1 }, {delay:0, duration:600, easing:"easeInOutQuad" });
    },1000);


	var data = new Array();
	data.push({
		lat: '32.783400',
		lng: '130.754256',
		url: 'https://goo.gl/maps/5bjA12WDyqp'
	});

	var myLatlng = new google.maps.LatLng(32.783400, 130.754256);

	var mapOptions = {
			zoom: 17,
			center: myLatlng,
			scrollwheel: false,
			draggable: true
		};

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: "STUDIO Goofy"
	});
	google.maps.event.addListener(marker, 'click', function() {window.open("https://goo.gl/maps/5bjA12WDyqp" );});

});
