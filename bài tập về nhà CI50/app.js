var Red = document.getElementById("red");
var Yellow = document.getElementById("yellow");
var Green = document.getElementById("green");
var Time = document.getElementById("time");
function Lights() {
    setTimeout(function () {
        Green.style.opacity = 1;
        Red.style.opacity = 0.2;
        Time.innerText = 20;
    }, 0);

    setTimeout(function () {
        Yellow.style.opacity = 1;
        Green.style.opacity = 0.2;
        Time.innerText = 4;
    }, 20000);
    setTimeout(function () {
        Green.style.opacity = 0.2;
        Yellow.style.opacity = 0.2;
        Red.style.opacity = 1;
        Time.innerText = 20;
    }, 24000);
    setInterval(function () {
        Time.innerText -= 1;
    }, 1000);
}

setInterval(function () {
    Lights();
}, 45000);
Lights();