/**
 * Created by TsiferovSerhii on 08.04.2016.
 */

var responseObj;

function fCallback(jqueryObj, data) {

    responseObj = data.results;

    var template = _.template($('#pattern').html());
    var content = template(responseObj);

    if (responseObj.length === 0) {
        content = '<div class="responseBox"><p class="content">На Ваш запит не знайдено жодного документа.</p></div>'
    }

    $('main').empty().append(content);
}

$(function () {

    function sendRequest() {

        var userRequest = encodeURI($("#searchInput").val());

        $.ajax({
            url: "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=" + userRequest + "&callback=fCallback&context=?",
            dataType: "jsonp",
        });
    }

    $("#searchButton").on("click", sendRequest);

    $("#searchInput").on("keypress", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            sendRequest();
        }
    });

    function Human(name, age, sex, height, weight){
        this.name = name;
            this.age = age;
            this.sex =  sex;
            this.height =  height;
            this.weight =  weight;
    }

    function Worker(name, age, sex, height, weight, wPlace, salary){
        Human.call(this, name, age, sex, height, weight);
        this.placeOfWork = wPlace;
        this.salary = salary;
        this.toWork = function(){
            console.log("I'm working!");
        };
    }

    /*Worker.prototype = new Human("John", 99, "man", 180, 72);*/

    function Student(name, age, sex, height, weight, sPlace, grants){
        Human.call(this, name, age, sex, height, weight);
        /*this.__proto__ = new Human(name, age, sex, height, weight);*/
        this.placeOfStudy = sPlace;
        this.grants = grants;
        this.watchTV = function(){
            console.log("I'm watching TV shows!");
        }
    }

    /*Student.prototype = new Human("Vasya", 18, "man", 180, 72);*/

    var worker1 = new Worker("John", 99, "man", 180, 72, "Bank of America", 50000);
    var student1 = new Student("Vasya", 18, "man", 180, 72, "KPI", 30);

    console.log("worker:", worker1, "worker.name:", worker1.name);
    console.log("student:", student1, "student.name:", student1.name, "student.age:", student1.age);

});