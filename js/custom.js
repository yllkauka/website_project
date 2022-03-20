jQuery(document).ready(function () {
	var wh = jQuery(window).height();
	
	
	//resize js
	jQuery(window).resize(function(){
		var wh = jQuery(window).height();
	});

	
	jQuery(window).scroll(function () {
		if(jQuery(window).scrollTop() > 0){
			jQuery('.header').addClass('sticky');
		}else{
			jQuery('.header').removeClass('sticky');
		}
	});

  	jQuery('.m-menu').click(function(){
    	jQuery(this).toggleClass('open');
		jQuery('.header-navigation').toggleClass('open');
		jQuery('body').toggleClass('body-overlay');
	});
	
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 1500);
	});
	
	accordian();

});

function accordian(){
	
	jQuery(".faq-item .faq-que").click(function() {
		if(jQuery(this).next("div.faq-ans").is(":visible")){
			jQuery(this).next("div.faq-ans").slideUp();
			jQuery(this).parent('.faq-item').toggleClass("up");
		}
		else
		{
			jQuery(".faq-item .faq-ans").slideUp();
			jQuery(".faq-item").removeClass("up");
			jQuery(this).next("div.faq-ans").slideDown();
			jQuery(this).parent('.faq-item').toggleClass("up");
		}		
	});
}