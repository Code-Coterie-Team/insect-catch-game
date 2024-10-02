const screens = document.querySelectorAll('.screen');
const playBtn = document.querySelector(".playBtn");
const favInscetBtn = document.querySelector('.chooseInsectBtn');
const timer = document.querySelector('.timer');
let seconds = 0;

function startGame(){
    screens[0].classList.add('up');
}

function chooseFavInsect(){
    screens[1].classList.add('up')
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    console.log("salam")
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timer.innerHTML = `Time: ${m}:${s}`
    seconds++
}