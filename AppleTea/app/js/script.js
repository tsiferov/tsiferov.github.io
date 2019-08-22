(function($){
  $(function() {
	$('.menu__icon').on('click', function() {
	  $(this).closest('.menu').toggleClass('menu_state_open');
	});
  });
  $('#bar1').barfiller({barColor: "#ffc20e"});
  $('#bar2').barfiller({barColor: "#ffc20e"});
  $('#bar3').barfiller({barColor: "#ffc20e"});

  $('.galleryFilter li').click(function() {
        $('.galleryFilter li').removeClass('activeFilter');
        $(this).addClass('activeFilter');
    });

  var $container = $(".filtr-container");

  $container.imagesLoaded(function () {
		$container.filterizr('setOptions', {layout: 'sameSize'});
	});
  	var lastScroll = $(window).scrollTop();
  $(window).scroll(function() {
	if ($(this).scrollTop()>lastScroll){  
		$('.navigation').fadeOut(500);
		lastScroll = $(this).scrollTop();
	}else {
		$('.navigation').fadeIn(500);
		lastScroll = $(this).scrollTop();
	}

	if($(this).scrollTop()<lastScroll){
	}
});


  var elemWithId = $("section[id]");
  console.log(elemWithId);



//подсветка меню
var menu_selector = "#topMenu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.menu__links-item--active").removeClass("menu__links-item--active");
			$(this).addClass("menu__links-item--active");
		} else {
			$(this).removeClass("menu__links-item--active");
		}
	});
}
$(document).ready(function () {
	$(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.menu__links-item--active").removeClass("menu__links-item--active");
		$(this).addClass("menu__links-item--active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
});
})(jQuery);