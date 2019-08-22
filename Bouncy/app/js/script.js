var map;


function showMap() {

	var latitude = 50.441211;
	var longitude = 30.521590;


	var mapOptions = {
		zoom: 12,
		center: { lat: latitude, lng: longitude }
	};

	var mapDiv = document.getElementById("map");

	map = new google.maps.Map(mapDiv, mapOptions);

	var marker = new google.maps.Marker({
		position: { lat: latitude, lng: longitude },
		map: map,
		title: 'We are here!'
	});
}

$(window).load(function() {

	var flag = true;

	$(window).scroll(function() {
		var toServises = $("#services").offset().top - $(window).height() / 4;
		var setRadius = 60;

		if ($(window).width() < 992) {
			setRadius = 40;
		}

		if ($(this).scrollTop() > toServises & flag) {


			var myCircle = Circles.create({
				id: 'circles-1',
				radius: setRadius,
				value: 80,
				maxValue: 100,
				width: 3,
				text: function(value) { return value + '%'; },
				colors: ['#047378', '#19BD9A'],
				duration: 1600,
				wrpClass: 'circles-wrp',
				textClass: 'circles-text',
				valueStrokeClass: 'circles-valueStroke',
				maxValueStrokeClass: 'circles-maxValueStroke',
				styleWrapper: true,
				styleText: true
			});

			var myCircle1 = Circles.create({
				id: 'circles-2',
				radius: setRadius,
				value: 75,
				maxValue: 100,
				width: 3,
				text: function(value) { return value + '%'; },
				colors: ['#047378', '#19BD9A'],
				duration: 1500,
				wrpClass: 'circles-wrp',
				textClass: 'circles-text',
				valueStrokeClass: 'circles-valueStroke',
				maxValueStrokeClass: 'circles-maxValueStroke',
				styleWrapper: true,
				styleText: true
			});

			var myCircle2 = Circles.create({
				id: 'circles-3',
				radius: setRadius,
				value: 60,
				maxValue: 100,
				width: 3,
				text: function(value) { return value + '%'; },
				colors: ['#047378', '#19BD9A'],
				duration: 1200,
				wrpClass: 'circles-wrp',
				textClass: 'circles-text',
				valueStrokeClass: 'circles-valueStroke',
				maxValueStrokeClass: 'circles-maxValueStroke',
				styleWrapper: true,
				styleText: true
			});

			flag = false;

		}
	});

	var filterizd = $('.filtr-container').filterizr({});

	var slider = $('#fs1').flexslider({
		animation: "fade",
		direction: "vertical"
	});

	var slider2 = $('#fs2').flexslider({
		animation: "fade",
		direction: "vertical"
	});

	var slider3 = $('#fs3').flexslider({
		animation: "fade",
		direction: "vertical"
	});


	$().UItoTop({
		min: 400,
		easingType: 'easeOutQuart'
	});

});

$(document).ready(function() {


	if ($(window).scrollTop() > 5) {
		$(".navbar").addClass("navbar--fixed");
	} else {
		$(".navbar").removeClass("navbar--fixed");
	}



	$(".nav, #toDownButton").on("click", "a", function(event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$("#mapOverlayButton").on("click", function() {

		event.preventDefault();
		$("#ao").hide(800);
		$(window).scroll(function() {
			var toTop = $("#ao").scrollTop();

			if ($(window).scrollTop() > 10) {
				$("#ao").show(800);
			}
		})
	});

	$('.galleryFilter li').click(function() {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.nav').click(function() {
		$('#bs-example-navbar-collapse-1').removeClass('in');
	})

	$('button.navbar-toggle').click(function() {
		if ($(window).scrollTop() <= 5) {
			$(".navbar").addClass("navbar--fixed");
		}
	})

	$(window).scroll(function() {
		if ($(this).scrollTop() > 5) {
			$(".navbar").addClass("navbar--fixed");
		} else {
			$(".navbar").removeClass("navbar--fixed");
		}
	});

	new WOW().init();

});