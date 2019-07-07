(function($, undefined) {
	$(function() {
		$('.post').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeIn',
			classToRemove: 'hidden'
		});
		$('.post-left').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			classToRemove: 'hidden'
		});
		$('.post-right').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			classToRemove: 'hidden'
		});
		$('.post-down').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInDown',
			classToRemove: 'hidden'
		});
		$('.post-up').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp',
			classToRemove: 'hidden'
		});
		$('.models').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated zoomIn sequentialChild',
			classToRemove: 'hidden'
		});
		$('.catalog').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated zoomIn sequentialChild',
			classToRemove: 'hidden'
		});
		$('.details').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated zoomIn sequentialChild',
			classToRemove: 'hidden'
		});
		$('.actions').addClass("hidden").viewportChecker({
			classToAdd: 'visible animated zoomIn sequentialChild',
			classToRemove: 'hidden'
		});
	}); // end $.ready()
})(jQuery); // end or closure