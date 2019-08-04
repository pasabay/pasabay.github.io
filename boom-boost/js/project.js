<<<<<<< HEAD
/*hamburger*/
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".hamburger-button");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }

})();

/*slider*/


/*$('.slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true,
=======
/*hamburger*/
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".hamburger-button");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }

})();

/*slider*/


/*$('.slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true,
>>>>>>> master
});