var interval;
var start = 0;
var total = 0;
var counter = 1;
var paragraphElement;

var buttonStartValue = document.getElementById("buttonStartValue");
var display = document.getElementById("my_timer");
var buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener("click", buttonCheck);
document.getElementById("buttonClear").addEventListener("click", stopTimer);
document.getElementById("buttonSplit").addEventListener("click", split);

function buttonCheck() {

    var value = buttonStartValue.innerHTML;

    if (value == "start") {
        start = Date.now();
        interval = setInterval(timer, 1);
        buttonStartValue.innerHTML = "stop";
    } else {
        total = total + Date.now() - start;
        clearInterval(interval);
        buttonStartValue.innerHTML = "start";
        logOut(" Stop: ");
    }
}

function timer() {

    var current = Date.now() - start + total;
    var t = new Date(current);

    var milliSec = t.getMilliseconds();
    var sec = t.getSeconds();
    var min = t.getMinutes();
    var hour = t.getUTCHours();


    if (milliSec < 10) milliSec = "00" + milliSec;
    if (milliSec < 100 && milliSec > 9) milliSec = "0" + milliSec;
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;

    document.getElementById("millis").innerHTML = milliSec;
    document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
}

function stopTimer() {

    clearInterval(interval);
    total = 0;
    counter = 1;

    document.getElementById("buttonStartValue").innerHTML = "start";
    document.getElementById("my_timer").innerHTML = "00:00:00";
    document.getElementById("millis").innerHTML = "000";

    var arrayElementsParagraph = document.getElementsByName("logout");

    while(arrayElementsParagraph){
        document.body.removeChild(arrayElementsParagraph[0]);
    }
}

function logOut(source){

    paragraphElement = document.createElement("p");
    paragraphElement.setAttribute("name", "logout");
    paragraphElement.innerHTML = (counter++) + source + display.innerHTML + "." + document.getElementById("millis").innerHTML;
    document.body.appendChild(paragraphElement);
}

function split(){
    if(buttonStartValue.innerHTML == "stop"){
        logOut(" Split: ")
    }
}


