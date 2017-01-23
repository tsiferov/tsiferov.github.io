
"use strict";

var testObj = void 0;
var convertToJson = void 0;
var convertFromJson = void 0;
var countingAnswers = void 0;
var generateMessage = void 0;

$(function () {

    convertToJson = function convertToJson(obj) {
        var result = JSON.stringify(obj);
        return result;
    };

    convertFromJson = function convertFromJson(jsonObj) {
        return JSON.parse(jsonObj);
    };

    var getAnswers = function getAnswers() {

        return $("input:radio:checked");;
    };

    countingAnswers = function countingAnswers(elementObj) {

        var count = 0;

        /*for(let elem of elementObj){
            if(testObj[elem.getAttribute('name')].answers[elem.getAttribute('value')].isCorrect)count++;
        }*/

        for (var i = 0; i < elementObj.length; i++) {
            if (testObj[elementObj[i].getAttribute('name')].answers[elementObj[i].getAttribute('value')].isCorrect) count++;
        }
        return count;
    };

    generateMessage = function generateMessage(elements) {

        var dialogMessage = void 0;

        if (elements.length === testObj.length) {

            var result = countingAnswers(elements);

            dialogMessage = result + " из " + testObj.length + " правильно!";

            elements.removeAttr("checked");
        } else {
            dialogMessage = "Натыкано мало ответов!";
        }

        return dialogMessage;
    };

    var generatePage = function generatePage() {

        var template = _.template($('#pattern').html());

        var content = template(testObj);
        $('body').append(content);
    };

    var showResultDialog = function showResultDialog(message) {

        $("#message").empty().append(message);

        $('.modalOverlay').fadeIn(function () {

            window.setTimeout(function () {
                $('.modalWindow').addClass('visible');
            }, 100);
        });
    };

    var jsonObj = convertToJson(testPage.questions);
    localStorage.setItem("test", jsonObj);

    testObj = convertFromJson(localStorage.getItem("test"));

    generatePage();

    $("#verificationBut").on("click", function () {

        var elements = getAnswers();
        var message = generateMessage(elements);
        showResultDialog(message);
    });

    $('.close').on("click", function () {
        $('.modalOverlay').fadeOut().end().find('.modalWindow').removeClass('visible');
    });
});
