/**
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

