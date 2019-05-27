(function($, undefined) {
	$(function() {
		if ($.fn.slick) {
			var fnSetCounter = function(event, slick, currentSlide, nextSlide) {
				var frames = Math.ceil(slick.slideCount / slick.options.slidesToScroll);
				var currentFrame = (nextSlide || 0) / slick.options.slidesToScroll + 1;
				var $counter = slick.$slider.prev(".counter");
				if (frames === 1) {
					$counter.hide();
					return;
				} else {
					$counter.show();
				}
				if (!$counter.length) {
					$counter = $("<div class=\"counter\" />").insertBefore(slick.$slider);
				}
				$counter.html("<span>" + currentFrame + "</span> / " + frames);
				//console.log(currentFrame, '/', frames, '(',nextSlide, '/', slick.slideCount , ':', slick.options.slidesToScroll, ')');
			};

			
		
			//отзывы
			$('.js-slider-spec')
			//.on("init beforeChange", fnSetCounter)
			.slick({
				dots: false,
				arrows: true,
				infinite: false,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [{
					breakpoint: 740,
					settings: {
						arrows: true,
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},				
				{
					breakpoint: 480,
					settings: {
						arrows: true,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]});
			
		} else {
			console.log("$.slick is not defined!");
		}		
		
	}); // end $.ready()
})(jQuery); // end or closure