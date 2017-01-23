
var fCallback;

$(document).ready(function() {
 /*$(".slider").each(function () { // обрабатываем каждый слайдер
  var obj = $(this);
  $(obj).append("<div class='nav'></div>");
  $(obj).find("li").each(function () {
   $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
 });
});
function sliderJS (obj, sl) { // slider function
 var ul = $(sl).find("ul"); // находим блок
 var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
 var step = $(bl).width(); // ширина объекта
 $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
 var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
 $(sl).find("span").removeClass("on"); // убираем активный элемент
 $(this).addClass("on"); // делаем активным текущий
 var obj = $(this).attr("rel"); // узнаем его номер
 sliderJS(obj, sl); // слайдим
 return false;*/


var responseObj;
var userRequest;

fCallback = function(jqueryObj) {

	console.log(jqueryObj);
	console.log(jqueryObj.hits[0].webformatURL);
	console.log(jqueryObj.hits[0].tags);

    /*responseObj = data.results;

    var template = _.template($('#pattern').html());
    var content = template(responseObj);

    if (responseObj.length === 0) {
        content = '<div class="responseBox"><p class="content">На Ваш запит не знайдено жодного документа.</p></div>'
    }

    $('main').empty().append(content);*/
   var gridItems = $('.grid-item img');
    
   for(var i = 0; i < gridItems.length; i++){
    	
		gridItems[i].setAttribute("src", jqueryObj.hits[i].webformatURL);
}
		$('.grid-item').imagefill();
}



function sendRequest() {

        userRequest = "active traveling";
        if(encodeURI($("#searchInput").val()).length > 0){
        userRequest = encodeURI($("#searchInput").val());
        };
		

        $.ajax({
            url: "https://pixabay.com/api/?key=2682999-1883d01edc8260e66f61138e7&q="+userRequest+"&image_type=photo&per_page=7&callback=fCallback&context=?",
            dataType: "jsonp",
        });
}

sendRequest();
$("#searchButton").on("click", sendRequest);

    $("#searchInput").on("keypress", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            sendRequest();
        }
    });

var $container = $(".grid");
$container.imagesLoaded(function () {
	$container.masonry({
		columnWidth: ".grid-item",
		gutter: '.gutter-sizer',
		itemSelector: ".grid-item",
		percentPosition: true,
		/*gutter: 10%,*/
	});
});
/* $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 2
});*/
});
