
"use strict";

var testObj;
var convertToJson;
var convertFromJson;
var countingAnswers;
var generateMessage;

$(function () {

    convertToJson = function(obj){
        var result = JSON.stringify(obj);
        return result;
    }

    convertFromJson = function(jsonObj){
        return JSON.parse(jsonObj);
    }

    var getAnswers = function(){
       
       return $("input:radio:checked");; 
    }

    countingAnswers = function(elementObj){
        
        var count = 0;
        
        for (var i = 0; i < elementObj.length; i++) {
                if (testObj[elementObj[i].getAttribute('name')].answers[elementObj[i].getAttribute('value')].isCorrect)count++;
            }
        return count;
    }

    generateMessage = function(elements){

        var dialogMessage;

        if (elements.length === testObj.length) {
            
            var result = countingAnswers(elements);

            dialogMessage = result + " из " + testObj.length + " правильно!";
           
            elements.removeAttr("checked");
        } else {
            dialogMessage = "Натыкано мало ответов!";
        }

        return dialogMessage;
    }

    var generatePage = function(){
        
        var template = _.template($('#pattern').html());

        var content = template(testObj);
        $('body').append(content);
    }

    var showResultDialog = function (message) {

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
    })

    $('.close').on("click", function () {
        $('.modalOverlay').fadeOut().end().find('.modalWindow').removeClass('visible');
    });


});
/*module.exports = convertToJson;*/
/*module.exports.convertToJson = convertToJson;*/
