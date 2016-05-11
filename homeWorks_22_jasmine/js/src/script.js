
"use strict";

let testObj;
let convertToJson;
let convertFromJson;
let countingAnswers;
let generateMessage;

$(function () {

    convertToJson = function(obj){
        let result = JSON.stringify(obj);
        return result;
    }

    convertFromJson = function(jsonObj){
        return JSON.parse(jsonObj);
    }

    let getAnswers = function(){
       
       return $("input:radio:checked");; 
    }

    countingAnswers = function(elementObj){
        
        let count = 0;

        /*for(let elem of elementObj){
            if(testObj[elem.getAttribute('name')].answers[elem.getAttribute('value')].isCorrect)count++;
        }*/
        
        for (let i = 0; i < elementObj.length; i++) {
                if (testObj[elementObj[i].getAttribute('name')].answers[elementObj[i].getAttribute('value')].isCorrect)count++;
            }
        return count;
    }

    generateMessage = function(elements){

        let dialogMessage;

        if (elements.length === testObj.length) {
            
            let result = countingAnswers(elements);

            dialogMessage = `${result} из ${testObj.length} правильно!`;
           
            elements.removeAttr("checked");
        } else {
            dialogMessage = `Натыкано мало ответов!`;
        }

        return dialogMessage;
    }

    let generatePage = function(){
        
        let template = _.template($('#pattern').html());

        let content = template(testObj);
        $('body').append(content);
    }

    let showResultDialog = function (message) {

        $("#message").empty().append(message);

        $('.modalOverlay').fadeIn(function () {

            window.setTimeout(function () {
                $('.modalWindow').addClass('visible');
            }, 100);
        });
    };

    let jsonObj = convertToJson(testPage.questions);
    localStorage.setItem("test", jsonObj);


    testObj = convertFromJson(localStorage.getItem("test"));

    generatePage();


    $("#verificationBut").on("click", function () {

        let elements = getAnswers();
        let message = generateMessage(elements);
        showResultDialog(message);
    })

    $('.close').on("click", function () {
        $('.modalOverlay').fadeOut().end().find('.modalWindow').removeClass('visible');
    });


});