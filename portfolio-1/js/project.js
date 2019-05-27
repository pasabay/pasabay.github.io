(function($, undefined) {
	// Скрипт выравнивает высоту передаваемых блоков по самому высокому из них
	$.fn.ravno = function() {
		var maxH = -1;
		var $cols = $(this).height("auto").each(function() {
			var h = $(this).height();
			maxH = (h > maxH) ? h : maxH;
		});
		$cols.height(maxH);
	};

	
	// Скрипт делает блоки квадратными устанавливая высоту равной ширине 
	$.fn.squareBox = function() {
		var $self = this;
		var width = $self.outerWidth();
		$self.css({ height: width + "px" });

		return $self;
	};


	/// ГЛАВНЫЙ ОБРАБОТЧИК DOCUMENT.READY
	$(function() {		

		//begin Ravno
		// уравниваем по высоте нужные блоки
		var fnRavno = function() {
			// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
			var vh = window.innerHeight * 0.01;
			// Then we set the value in the --vh custom property to the root of the document
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			$(".ravno").ravno();
			//$(".galleryList h3").squareBox();			
		
			if (window.innerWidth < 992) {
				$(".courses__item").ravno();
			}		
			if (window.innerWidth > 992) {
			$(".courses").each(function() {
				$(this).find(".courses__item").squareBox();
			});
		}

			// video on main
			var $videos = $(".js-slider-video video");
			if (window.innerWidth > 992) {
				$videos.trigger("play");
				if ($.browser && $.browser.safari) {
					$videos.show();
				}
			} else {
				$videos.trigger("pause");
				if ($.browser && $.browser.safari) {
					$videos.hide();
				}
			}
		};

		// активируем fnRavno после загрузки изображений (если подключена соответствующая библиотека), а также при ресайзе окна
		if ($.fn.imagesLoaded) {
			$("#body").imagesLoaded(fnRavno);
		} else {
			$(fnRavno);
		}
		$(window).on("resize", fnRavno);
		// end Ravno

		// внутристраничное меню с плавной прокруткой
		$('.js-menu-item').on('click', function(event) {
			event.preventDefault();
			var $self = $(this),
				target = $("#" + $self.attr('href').split("#").pop());
			$(".js-menu-item").removeClass("active");
			$self.addClass("active");
			$('html, body').animate({ scrollTop: (target.offset() || { top: 0 }).top - 80 }, 500);    
		});
		
		// Form styler
		if ($.fn.styler) {
			$('input, select').not(".styler-ignore").styler({
				selectSearch: true
			});
			$("label a").click(function(event) {
				event.stopPropagation();
			});
		} else {
			console.log("$.styler is not defined");
		}

		// Tabs
		if ($.fn.tabs) {
			$('.js-tabs').each(function(){
				$(this).tabs({tabs: ".tab-nav > .tab", boxes: "> .box"});
			});
			$('.js-tabs-outer').each(function(){ 
				$(this).tabs({tabs: ".tab-nav-outer > .tab", boxes: "> .box-outer"});
			});
			$('.js-tabs-inner').each(function(){
				$(this).tabs({tabs: ".tab-nav-inner > .tab, .js-zone-tab", boxes: "> .box-inner"});
			});

			$(".js-zones").each(function() {
				$(this).tabs({
					tabs: ".js-zones-menu li,.js-zones-points >img,.js-zones-points .clearpoint",
					boxes: ".js-zones-points .point",
					dataTabIndex: "zone",
					allowBidirectional: true,
					allowDeactivate: true,
					activateFirst: false,
				});
			});
		} else {
			console.log("$.tabs is not defined");
		}

		// TwentyTwenty - сравнение пар изображений 
		// (убрано в slick_init, т.к. завязано на слайдеры)
		// if ($.fn.twentytwenty) {
		// 	$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty();
		// 	$(".twentytwenty-container[data-orientation='vertical']").twentytwenty({ orientation: 'vertical', click_to_move : true});
		// } else {
		// 	console.log("$.twentytwenty is not defined");
		// }

		if (window.innerWidth < 1000) {
			$(".celebrities").on("click", ".celebrity", function(){
				$(this).toggleClass("active");
			});
		}
		$(".faq__item").click(function () {
			$(this).toggleClass("active");		
		});

		$(".faqList li h3").click(function() {
			var $self = $(this);
			if ($self.next("p").is(":visible")) {
				$self.next("p").slideUp(250);
				$self.removeClass("active");
			} else {
				$(".faqList li h3").removeClass("active");
				$(".faqList li p").slideUp(250);
				$self.addClass("active");
				$self.next("p").slideDown(300);
			}
		});
		$(".filtertop .filtertop__ico").click(function() {
			var $self = $(this);
			if ($self.next(".filtertop__desc").is(":visible")) {
				$self.next(".filtertop__desc").slideUp(250);
				$self.removeClass("active");
			} else {
				$(".filtertop .filtertop__ico").removeClass("active");
				$(".filtertop .filtertop__desc").slideUp(250);
				$self.addClass("active");
				$self.next(".filtertop__desc").slideDown(300);
			}
		});
		if (window.innerWidth < 700) {
		$(".footer .footer__title").click(function() {
			var $self = $(this);
			if ($self.next(".footer__text").is(":visible")) {
				$self.next(".footer__text").slideUp(250);
				$self.removeClass("active");
			} else {
				$(".footer .footer__title").removeClass("active");
				$(".footer .footer__text").slideUp(250);
				$self.addClass("active");
				$self.next(".footer__text").slideDown(300);
			}
		});
	}

		if ($.fn.autocolumnlist) {
			$('.col2').autocolumnlist({
				columns: 2,
				childSelector: "> li"
			});
			$('.list-menu').autocolumnlist({
				columns: 2,
				childSelector: "> .list-menu__item"
			});
			$('.list').autocolumnlist({
				columns: 2,
				childSelector: "> .recommendations__item"
			});			
			
			if (window.innerWidth > 992) {
				$('.sectionMenu-inner').autocolumnlist({
					columns: 3,
					childSelector: "> li"
				});
			}
			if (window.innerWidth < 991) {
				$('.sectionMenu-inner').autocolumnlist({
					columns: 2,
					childSelector: "> li"
				});
			}
			
		} else {
			console.log("$.autocolumnlist is not defined");
		}

		// body stick
		$(window).scroll(function() {
			var target = $(document.body),
				className = 'stickTop';
			if ((window.innerWidth > 992 && window.pageYOffset >= 197)
				|| (window.innerWidth <= 992 && window.pageYOffset >= 50)
				) {
				target.addClass(className);
			} else {
				target.removeClass(className);
			}
		});

		//$('.scroll-pane').jScrollPane();

		// ToTop button
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 1500) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
			$('body,html').animate({ scrollTop: 0 }, 800);
		});
		//$('.col2').autocolumnlist({ columns: 2 });

		
		
		// LightBox
		if ($.fn.magnificPopup) {
			// Попап для форм (обратная связь и др.)
			$(".formOpener").magnificPopup({
				type: 'inline'
			});
			$(".textOpener").magnificPopup({
				type: 'inline',
				mainClass: 'mfp-text-group',
				callbacks: {
					open: function() {
						if ($.fn.customScroll && this.content.find(".js-scroll-pane").length !== 0) {
							$(".js-scroll-pane").customScroll({
								barMinWidth: 5,
								trackWidth: 5,
								vertical: true,
								horizontal: false
							});
						}
					}
				}
			});
			$(".magnific").magnificPopup({
				type: 'image'
			});

			// попап для фотогалерей в новостях и т.п.
			if ($('.photo-gallery:not(.eighteen)').length !== 0) {
				$('.photo-gallery:not(.eighteen)').magnificPopup({
					delegate: ".photo-gallery__item a",
					type: "image",
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						titleSrc: "title"
					}
				});				
			}

			// попап для фотогалерей в новостях и т.п.
			if ($('.gallery').length !== 0) {
				$('.gallery').magnificPopup({
					delegate: ".gallery__item a",
					type: "image",
					mainClass: 'mfp-img-group',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						titleSrc: "title"
					}
				});				
			}

			$(".js-video-popup").magnificPopup({
				type:'iframe',
				markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close mfp-close-wht"></div>'+
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				'</div>',
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: '//www.youtube.com/embed/%id%?autoplay=1'
					},
				},
			});

			if ($('.photo-gallery.eighteen').length !== 0) {
				var has18Years = JSON.parse(sessionStorage.getItem("Has18Years")) || false;
				if (!has18Years) {
					$(".photo-gallery.eighteen .eighteen__item").magnificPopup({
						items: {
							type: "inline",
							src: "#body18",
						}, 
						callbacks: {
							open: function() {
								// console.log("onOpen", has18Years)
								if (!has18Years) {
									return;
								}
								$.magnificPopup.open({
									items: {
										src: $.magnificPopup.instance.ev[0].href,
										type: 'image',
										title: $.magnificPopup.instance.ev[0].title,
									}
								});
							}
						}
					});
					$("#body18 .js-modal-cancel").click(function(e){
						e.preventDefault();
						$.magnificPopup.instance.close();
					});
					$("#body18 .js-modal-confirm").click(function(e){
						e.preventDefault();
						// console.log($.magnificPopup.instance);

						has18Years = true;
						sessionStorage.setItem("Has18Years", true);
						
						$.magnificPopup.open({
							items: {
								src: $.magnificPopup.instance.ev[0].href,
								type: 'image',
								title: $.magnificPopup.instance.ev[0].title,
							}
						});
					});
				} else {
					$(".photo-gallery.eighteen").magnificPopup({
						delegate: ".photo-gallery__item a",
						type: "image",
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
						},
						image: {
							titleSrc: "title"
						}
					});
				}
			}

		} else {
			console.log("$.magnificPopup is not defined");
		}
		// end LightBox
		

		if ($.mask) {
			$("input.phone, .phone input").mask("+9 999 999-99-99");
		} else {
			console.log("$.mask is not defined!");
		}

	}); // end $.ready()
})(jQuery); // end or closure


