(function($, undefined) {
	$.fn.toggleNext = function(targetSelector, selfClass, targetClass) {
		var $self = $(this),
			$target = $self.next(targetSelector);

		// проверка параметров
		selfClass = selfClass || "active";
		targetClass = targetClass || "nav-active";

		// навешиваем событие на click
		$self.on("click", function() {
			if ($self.hasClass(selfClass)) {
				$self.removeClass(selfClass);
				$target.removeClass(targetClass);
			} else {
				$self.addClass(selfClass);
				$target.addClass(targetClass);
			}
		});
		return $self;
	};

	$(function() {
		// разворачиваем/сворачиваем панель поиска
		$("#nav_search").toggleNext(".searchTop");

		// разворачиваем/сворачиваем мобильное меню
		if (window.innerWidth < 992) {
			var navBackPath = [];
			var $navBack = $("#nav_back").on("click", function() {
				if (!navBackPath.length) {
					$("#nav_dropdown").trigger("click"); // сворачиваем меню
					return;
				}
				navBackPath.pop().removeClass("clicked");
				console.log("#nav-back clicked: ", navBackPath);
			});

			var saveScrollTop = 0;
			$("#nav_dropdown").toggleNext(".menuTop").click(function() {
				var $self = $(this);
				if ($self.hasClass("active")) {
					saveScrollTop = $(window).scrollTop();
					$(document.body).addClass("dropdown-menu-active").css("top", -saveScrollTop + "px");
				} else {
					$(document.body).removeClass("dropdown-menu-active").css("top", 0);
					$(window).scrollTop(saveScrollTop);
				}
				$self.find("+ ul.clicked, +ul ul.clicked, +ul li.clicked").removeClass("clicked");
				navBackPath = [];
			});

			$(document).on("click", ".menuTop li", function(event) {
				var $self = $(this);
				// если у LI есть вложенное подменю и не установлен класс "clicked" 
				// тогда - разворачиваем вложенное меню
				// иначе - переходим по ссылке
				if ($self.find("> ul").length && !$self.hasClass("clicked") ) {
					event.preventDefault();
					$self.addClass("clicked");
					navBackPath.push($self); // добавляем LI в массив для возврата по кнопке back
					console.log("menu item clicked: ", navBackPath);
				} 
			});
		}
	});
})(jQuery);