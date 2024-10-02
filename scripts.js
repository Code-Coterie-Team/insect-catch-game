const screens = document.querySelectorAll('.screen');
const playBtn = document.querySelector(".playBtn");
const favInscetBtn = document.querySelector('.chooseInsectBtn')

function startGame(){
    screens[0].classList.add('up');
}

function chooseFavInsect(){
    screens[1].classList.add('up')
}