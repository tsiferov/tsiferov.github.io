/**
 * Created by TsiferovSerhii on 30.03.2016.
 */

(function($){

    $.fn.carouselPlag = function() {

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
        var $imgElements = $('.carousel-element img');

        var pixelsOffset = 225;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var maxCount = elementsCount - 3;
        var counter = 0;

        leftUIEl.click(function() {

            if(counter > 0){
                currentLeftValue += 225;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
                counter--;
            }
        });

        rightUIEl.click(function() {

            if(counter < maxCount){
                currentLeftValue -= 225;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
                counter++;
            }
        });

        return this;
    };
})(jQuery);
;/**
 * Created by TsiferovSerhii on 30.03.2016.
 */


(function ($) {

    var defaults = { delay: '5000' };

    $.fn.myCarousel = function (options) {

        var settings  = $.extend(defaults, options);

        var $imgCollection = $('.box img');
        var $quantityImgs = $imgCollection.length;
        var $counter = 0;
        var $numerator = $('.numerator');
        var $interval;

        $numerator.append(($counter + 1) + "/" + $quantityImgs);

        $('#carouselButton').on('click', buttonChange);

        function buttonChange() {

            if (this.innerHTML === "start") {
                moveImg();
                this.innerHTML = "stop";
            } else {
                clearTimeout($interval);
                this.innerHTML = "start";
            }
        };

        function moveImg() {

            var $rightOutElem = $imgCollection.eq(($counter + 4) % $quantityImgs);
            var $rightInElem = $imgCollection.eq(($counter + 3) % $quantityImgs);
            var $centrElem = $imgCollection.eq(($counter + 2) % $quantityImgs);
            var $leftInElem = $imgCollection.eq(($counter + 1) % $quantityImgs);
            var $leftOutElem = $imgCollection.eq(($counter) % $quantityImgs);


            $rightOutElem.animate({
                width: '240px',
                height: '180px',
                top: '+=30px',
                left: '-=275px',
                opacity: '.2',
            }, 1000);

            $rightInElem.animate({
                width: '320px',
                height: '240px',
                top: '+=30px',
                left: '-=350px',
                opacity: '1',
            }, 1000);

            $centrElem.animate({
                width: '240px',
                height: '180px',
                top: '-=30px',
                left: '-=270px',
                opacity: '.2',
            }, 1000);

            $leftInElem.animate({
                width: '160px',
                height: '120px',
                top: '-=30px',
                left: '-=195px',
                opacity: '0',
            }, 1000);

            $leftOutElem.animate({
                top: '0',
                left: '925px',
            }, 1000);

            $leftOutElem.removeClass().addClass('top');
            $leftInElem.removeClass().addClass('leftOut');
            $centrElem.removeClass().addClass('leftIn');
            $rightInElem.removeClass().addClass('centr');
            $rightOutElem.removeClass().addClass('rightIn');
            $imgCollection.eq(($counter + 5) % 10).removeClass().addClass('rightOut');

            ($counter == $quantityImgs - 1) ? $counter = 0 : $counter++;
            $numerator.empty().append(($counter + 1) + "/" + $quantityImgs);

            $interval = setTimeout(moveImg, settings.delay );
        };

        return this;
    };
})(jQuery);

;$(function () {

    $('.carouselBox').carouselPlag();

    $('.box').myCarousel({ delay: '3000' });

    $('#buttonJohnResig').on('click', function(){
        myWindow = open("templatePages/templateJohnResig.html");
    })

    $('#buttonLoDash').on('click', function(){
        myWindow = open("templatePages/templateLoDash.html");
    })

});


;// Simple JavaScript Templating
// John Resig – http://ejohn.org/ – MIT Licensed
(function(){
var cache = {};

this.tmpl = function tmpl(str, data){
// Figure out if we're getting a template, or if we need to
// load the template – and be sure to cache the result.
var fn = !/\W/.test(str) ?
cache[str] = cache[str] ||
tmpl(document.getElementById(str).innerHTML) :

// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function("obj",
"var p=[],print=function(){p.push.apply(p,arguments);};" +

// Introduce the data as local variables using with(){}
"with(obj){p.push('" +

// Convert the template into pure JavaScript
str
.replace(/[\r\t\n]/g, " ")
.split("<%").join("\t") 
.replace(/((^|%>)[^\t]*)'/g, "$1\r")
.replace(/\t=(.*?)%>/g, "',$1,'")
.split("\t").join("');")
.split("%>").join("p.push('")
.split("\r").join("\\'")
+ "');}return p.join( '');");

// Provide some basic currying to the user
return data ? fn( data ) : fn;
};
})();;/**
 * Created by TsiferovSerhii on 02.04.2016.
 */
$(function () {

    var data = {
        name: "Иванов Иван Иванович",
        urlFoto: "../img/foto.png",
        status: "Студент курса GoFrontend Online от компании GoIt",
        want: "Хочу стать Frontend-разработчиком, потому что это:",
        listItem: ["перспективная и востребованная на рынке профессия",
            "интересная и постоянно развивающаяся сфера деятельности",
            "хорошие условия и достойная оплата труда"],
        phon: "+380 50 777 77 77",
        skype: "ivanovivan",
        urlFacebook: "https://www.facebook.com/ivanovII",
        feedback: "Мне нравятся организация учебного процесса и преподаватели," +
        "которые доступно и понятно объясняют материал. Надеюсь на плодотворное и интересное" +
        "обучение, в результате которого, я смогу преобрести новую профессию)",
    };

    var template = $('#pattern').html();

    var content = tmpl(template, data);

    $('body').append(content);
});
;/**
 * Created by TsiferovSerhii on 02.04.2016.
 */
$(function () {

    var data = {
        name: "Иванов Иван Иванович",
        urlFoto: "../img/foto.png",
        status: "Студент курса GoFrontend Online от компании GoIt",
        want: "Хочу стать Frontend-разработчиком, потому что это:",
        listItem: ["перспективная и востребованная на рынке профессия",
            "интересная и постоянно развивающаяся сфера деятельности",
            "хорошие условия и достойная оплата труда"],
        phon: "+380 50 777 77 77",
        skype: "ivanovivan",
        urlFacebook: "https://www.facebook.com/ivanovII",
        feedback: "Мне нравятся организация учебного процесса и преподаватели," +
        "которые доступно и понятно объясняют материал. Надеюсь на плодотворное и интересное" +
        "обучение, в результате которого, я смогу преобрести новую профессию)",
    };

    var template = _.template($('#pattern').html());

    var content = template(data);
    $('body').append(content);
});
