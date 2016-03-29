$(function () {

// Инициализация

    $('.jcarousel').jcarousel({});
    $('select').niceSelect();
    $('.jQueryCheckbox input').iphoneStyle();

    $('.dropdown').hover(
        function () {
            var subMenu = $(this).children('.sub-menu');
            subMenu.slideDown(200);
            subMenu.animate({
                backgroundColor: "rgb(200, 66, 66)",
            }, 800);
        },
        function () {
            var subMenu = $(this).children('.sub-menu');
            subMenu.slideUp(200);
            subMenu.animate({
                backgroundColor: "rgb(255,100,100)",
            }, 200);
        }
    );
    /*$(".sub-menu li").hover(
     function() {
     $(this).animate({
     backgroundColor: "rgb(225,100,100)",
     }, 200);
     },
     function() {
     $(this).animate({
     backgroundColor: "rgb(225,75,75)",
     }, 200);
     }
     );*/
// Кнопка PREV

    $('.jcarousel-prev')

    // Триггер класса inactive

        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })

        // Инициализация кнопки PREV

        .jcarouselControl({
            target: '-=1'
        });

// Кнопка NEXT

    $('.jcarousel-next')

    // Триггер класса inactive

        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })

        // Инициализация кнопки NEXT

        .jcarouselControl({
            target: '+=1'
        });

// Пагинация слайдера

    $('.jcarousel-pagination')

    // Триггер класса active

        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })

        // Инициализация пагинации

        .jcarouselPagination({
            item: function (page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });

// Автопрокрутка слайдера

    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });

});


