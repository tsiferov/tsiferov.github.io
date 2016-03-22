$(function () {
    $('.tabsItem a').on('click', function (event) {
        event.preventDefault();
    });
    $('.tabsItem').on('click', function () {
        $(this).addClass('tabsItem--activ').siblings().removeClass('tabsItem--activ');
        $($('.tabsItem--activ a').attr('href')).addClass('tabsContent--visibl').siblings().removeClass('tabsContent--visibl');
    });
    $('.formItem input').hover(function (e) {
            e.preventDefault();
            $(this).siblings('p').show();

        },
        function () {
            $(this).siblings('p').hide()
        }
    );
});
