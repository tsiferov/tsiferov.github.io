/**
 * Created by TsiferovSerhii on 05.04.2016.
 */
"use strict";

var testObj;

$(function () {

    var jsonObj = JSON.stringify(testPage.questions);
    localStorage.setItem("test", jsonObj);

    testObj = JSON.parse(localStorage.getItem("test"));


    var template = _.template($('#pattern').html());

    var content = template(testObj);
    $('body').append(content);


    $("#verificationBut").on("click", function () {

        var dialogMessage;
        var elements = $("input:radio:checked");

        if (elements.length === testObj.length) {
            var count = 0;
            for (var i = 0; i < elements.length; i++) {
                if (testObj[elements[i].getAttribute('name')].answers[elements[i].getAttribute('value')].isCorrect)count++;
            }
            dialogMessage = count + " из " + testObj.length + " правильно!";
            showResultDialog(dialogMessage);
            elements.removeAttr("checked");
        } else {
            dialogMessage = "Натыкано мало ответов!";
            showResultDialog(dialogMessage);
        }
    })

    var showResultDialog = function (message) {

        $("#message").empty().append(message);

        $('.modalOverlay').fadeIn(function () {

            window.setTimeout(function () {
                $('.modalWindow').addClass('visible');
            }, 100);
        });
    };

    $('.close').click(function () {
        $('.modalOverlay').fadeOut().end().find('.modalWindow').removeClass('visible');
    });

});