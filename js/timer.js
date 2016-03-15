var interval;
var start = 0;
var total = 0;

var buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener("click", buttonCheck);
document.getElementById("buttonClear").addEventListener("click", stopTimer);

function buttonCheck() {

    var value = document.getElementById("buttonStartValue").innerHTML;

    if (value == "start" || value == "continue") {
        start = Date.now();
        interval = setInterval(timer, 1);
        document.getElementById("buttonStartValue").innerHTML = "pause";
    } else {
        total = total + Date.now() - start;
        clearInterval(interval);
        document.getElementById("buttonStartValue").innerHTML = "continue";
    }
}

function timer() {

    var current = Date.now() - start + total;
    var t = new Date(current);

    var sec = t.getSeconds();
    var min = t.getMinutes();
    var hour = t.getUTCHours();

    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;

    document.getElementById("millis").innerHTML = t.getMilliseconds();
    document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
}

function stopTimer() {

    clearInterval(interval);
    total = 0;

    document.getElementById("buttonStartValue").innerHTML = "start";
    document.getElementById("my_timer").innerHTML = "00:00:00";
    document.getElementById("millis").innerHTML = "000";
}






