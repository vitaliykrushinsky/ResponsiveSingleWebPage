$(function() {
	var topoffset = 43;
	
// on resize	
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
	
	var pin = new ScrollScene({
		triggerElement: '#nav'
	}).setPin('#nav').addTo(controller)
	
	
	var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 }, { delay: 1, opacity: 1, scale: 1, ease: Back.easeInOut });
	
	var scene = new ScrollScene({
		triggerElement: '#attractions',
		offset: -topoffset
	}).setTween(attractionstween)
	  .addTo(controller);
	
	
});