function showText() {
    let caixa = document.getElementById("caixa");
    if (caixa.style.display === "block") {
        caixa.style.display = "none";
    } else {
        caixa.style.display = "block";
    }
}

const myAudio = document.getElementById("itsmemario");
const myImg = document.getElementById("mariovermelho");

myImg.addEventListener("mouseover", function () {
    myAudio.currentTime = 0;
    myAudio.play();
})

const mamamia = document.getElementById("mamamia");
const luigi = document.getElementById("luigi");

luigi.addEventListener("mouseover", function () {
    mamamia.currentTime = 0;
    mamamia.play();
})

const peach = document.getElementById("yahoo");
const princess = document.getElementById("peachprincess");

princess.addEventListener("mouseover", function () {
    yahoo.currentTime = 0;
    yahoo.play();
})

const over = document.getElementById("gameover");
const bowser = document.getElementById("vilaobowser");

bowser.addEventListener("mouseover", function () {
    over.currentTime = 0;
    over.play();
})

const hoo = document.getElementById("woohoo");
const toad = document.getElementById("toad");

toad.addEventListener("mouseover", function () {
    hoo.currentTime = 0;
    hoo.play();
})

const hego = document.getElementById("herewego");
const yoshi = document.getElementById("yoshi");

yoshi.addEventListener("mouseover", function () {
    hego.currentTime = 0;
    hego.play();
})

