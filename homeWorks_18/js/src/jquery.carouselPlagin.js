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
