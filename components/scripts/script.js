$(function() {
	var topoffset = 43;
	var isTouch = 'ontouchstart' in document.documentElement;
	
// window height	
	var wheight = $(window).height(); // get height of the window
	
	$('.fullheight').css('height', wheight);
	
	$(window).resize(function() {
		var wheight = $(window).height(); // get height of the window
	
		$('.fullheight').css('height', wheight);
	}); //on resize
	
//Snippet to performs a smooth page scroll to an anchor on the same page.
	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') === 
	  this.pathname.replace(/^\//,'') && 
	  location.hostname === this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top-topoffset
		}, 500);
		return false;
	  } //target.length
	} //click function
	}); //smooth scrolling

	
//Highlighting menu items on scroll
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop() + topoffset;
		$('nav li a').removeClass('active');
		
		if (windowpos > $('#hotelinfo').offset().top) {
			$('nav li a').removeClass('active');
			$('a[href$=#hotelinfo]').addClass('active');
		}
		
		if (windowpos > $('#rooms').offset().top) {
			$('nav li a').removeClass('active');
			$('a[href$=#rooms]').addClass('active');
		}
		
		if (windowpos > $('#dining').offset().top) {
			$('nav li a').removeClass('active');
			$('a[href$=#dining]').addClass('active');
		}
		
		if (windowpos > $('#events').offset().top) {
			$('nav li a').removeClass('active');
			$('a[href$=#events]').addClass('active');
		}
		
		if (windowpos > $('#attractions').offset().top) {
			$('nav li a').removeClass('active');
			$('a[href$=#attractions]').addClass('active');
		}
	});
	
	
//Set up Scrollmagic and TweenMax
	var controller = new ScrollMagic({
		globalSceneOptions: {
			triggerHook: "onLeave"
		}
	});
	
	// pin the navigation
	var pin = new ScrollScene({
		triggerElement: '#nav'
	}).setPin('#nav').addTo(controller);
	
//rooms animation	
	//not a touch device
	if (!isTouch) {
		var roomOrigin = {
			bottom: -700,
			opacity: 0,
			scale: 0
		}
		var roomDest = {
			repeat: 1,
			yoyo: true,
			bottom: 0,
			opacity: 1,
			scale: 1,
			ease: Back.easeOut
		}

		var roomtween = TweenMax.staggerFromTo('#westminster .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#westminster',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#westminster')
		  .setTween(roomtween)
		  .addTo(controller);

		var roomtween = TweenMax.staggerFromTo('#piccadilly .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#piccadilly',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#piccadilly')
		  .setTween(roomtween)
		  .addTo(controller);

		var roomtween = TweenMax.staggerFromTo('#cambridge .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#cambridge',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#cambridge')
		  .setTween(roomtween)
		  .addTo(controller);

		var roomtween = TweenMax.staggerFromTo('#oxford .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#oxford',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#oxford')
		  .setTween(roomtween)
		  .addTo(controller);

		var roomtween = TweenMax.staggerFromTo('#victoria .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#victoria',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#victoria')
		  .setTween(roomtween)
		  .addTo(controller);

		var roomtween = TweenMax.staggerFromTo('#manchester .content', 1, roomOrigin, roomDest);
		var sceneroom = new ScrollScene({
			triggerElement: '#manchester',
			offset: -topoffset,
			duration: 500 //effect by scrolling
		}).setPin('#manchester')
		  .setTween(roomtween)
		  .addTo(controller);
	} //not a touch device
	
	
//attractions animation
	var attractionstween = TweenMax.staggerFromTo('#attractions article', 1,
												  { opacity: 0, scale: 0 },
												  { delay: 1, opacity: 1, scale: 1,
												   ease: Back.easeInOut });
	
	var scene = new ScrollScene({
		triggerElement: '#attractions',
		offset: -topoffset
	}).setTween(attractionstween)
	  .addTo(controller);
	
	
});