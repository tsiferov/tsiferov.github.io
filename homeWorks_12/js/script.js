$(function () {

    $('.carouselBox').carouselPlag();

    $('.box').myCarousel({ delay: '3000' });

    $('#buttonJohnResig').on('click', function(){
        myWindow = open("templatePages/templateJohnResig.html");
    })

    $('#buttonLoDash').on('click', function(){
        myWindow = open("templatePages/templateLoDash.html");
    })

});


