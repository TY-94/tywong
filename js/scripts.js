(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrollto-top').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrollto-top').fadeIn();
			} else {
				jQuery('.scrollto-top').fadeOut();
			}
		});

		jQuery(".develop-btmcnt a").click(function() {
			jQuery(this).hide()
			jQuery(".more-part").show()
			jQuery(".more-part a").show()
			return false;
		});

		jQuery(".more-part a").click(function() {
			jQuery(this).hide()
			jQuery(".more-part").hide()
			jQuery(".develop-btmcnt a").show()
			return false;
		});

		jQuery(".showmore-btn a").click(function() {
			jQuery(this).hide()
			jQuery(".community-more").show()
			jQuery(".community-more a").show()
			return false;
		});

		jQuery(".community-more a").click(function() {
			jQuery(this).hide()
			jQuery(".community-more").hide()
			jQuery(".showmore-btn a").show()
			return false;
		});

		jQuery(".cross-btn").click(function() {
			jQuery(".top-bar").hide()
			return false;
		});


		$('.main-carousel').flickity({				
			cellAlign: 'center',
			contain: true,
			groupCells: true,
			freeScroll: false,
			wrapAround: true,
			groupCells: 1,
			autoPlay: true,
			pauseAutoPlayOnHover: false,
			initialIndex: 1,
			wrapAround: true,
			prevNextButtons: true,
			pageDots: true

		});



		
		
		
		
	});
})(jQuery);