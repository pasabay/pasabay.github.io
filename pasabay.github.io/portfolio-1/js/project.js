$(document).ready(function() {
    $('.single-item').slick({
        dots: true,
        arrows: false
    });

    var $status = $('.pagingInfo');
    var $slickElement = $('.single-item');
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });
});