"use strict";

var testPage = {

    questions: [
        {
            title: "Вопрос №1",
            answers: [{
                answer: "Ответ №1",
                isCorrect: false,
            }, {
                answer: "Ответ №2",
                isCorrect: true,
            }, {
                answer: "Ответ №3",
                isCorrect: false,
            }],
        },
        {
            title: "Вопрос №2",
            answers: [{
                answer: "Ответ №1",
                isCorrect: false,
            }, {
                answer: "Ответ №2",
                isCorrect: true,
            }, {
                answer: "Ответ №3",
                isCorrect: false,
            }],
        },
        {
            title: "Вопрос №3",
            answers: [{
                answer: "Ответ №1",
                isCorrect: false,
            }, {
                answer: "Ответ №2",
                isCorrect: true,
            }, {
                answer: "Ответ №3",
                isCorrect: false,
            }],
        }
    ],

    generationTestPage: function () {

        var headerH3 = document.createElement("h3");
        headerH3.innerHTML = "Тест по программированию";
        document.body.appendChild(headerH3);

        var questionList = document.createElement("ol");
        questionList.setAttribute("id", "questionList");
        document.body.appendChild(questionList);


        for (var i = 0; i < this.questions.length; i++) {
            var questionItem = document.createElement("li");
            questionItem.innerHTML = this.questions[i].title;
            questionList.appendChild(questionItem);

            var answerList = document.createElement("ul");
            answerList.listStyle = "none";
            questionItem.appendChild(answerList);

            for (var j = 0; j < this.questions[i].answers.length; j++) {
                var answerItem = document.createElement("li");
                answerList.appendChild(answerItem);

                var check = document.createElement("input");
                check.type = "checkbox";
                check.id = "check" + i + j;
                answerItem.appendChild(check);

                var lable = document.createElement("label");
                lable.setAttribute("for", "check" + i + j);
                lable.innerHTML = this.questions[i].answers[j].answer;
                answerItem.appendChild(lable);
            }
        }

        var sendButton = document.createElement("button");
        sendButton.innerHTML = "Проверить мои результаты";
        document.body.appendChild(sendButton);
    }
}
