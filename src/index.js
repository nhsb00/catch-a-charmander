import "./styles/index.scss"

import Game from './scripts/game';

const canvas = document.getElementById("gameBoard");

const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT, ctx);

const button = document.getElementById('restart');
button.addEventListener('click', e => {
  game.restart();
})

const instruction = document.getElementById("instruction");
const modal = document.getElementById("modal");
instruction.addEventListener('click', e => {
  modal.style.display = "block";
})
modal.addEventListener('click', e => {
  modal.style.display = "none";
})

let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);

  game.update(dt);
  game.draw(ctx);
  
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

let count = 0;

function twinkle(){
  if (count === 0) {
    document.querySelector('h1').style.color = '#939597';
    count ++;
  } else if (count === 1) {
    document.querySelector('h1').style.color = '#e85450';
    count ++;
  } else if (count === 2) {
    document.querySelector('h1').style.color = '#a2c49b';
    count ++;
  } else if (count === 3) {
    document.querySelector('h1').style.color = '#f5df4d';
    count ++;
  } else {
    document.querySelector('h1').style.color = '#7bc4c4';
    count = 0;
  }
}

setInterval(twinkle, 1000);

function play() {
  const audio = document.getElementById("audio");
  audio.play()
}