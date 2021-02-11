import "./styles/index.scss"

import Game from './scripts/game';

const canvas = document.getElementById("gameBoard");

const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
// const tank = new Tank(GAME_WIDTH, GAME_HEIGHT);
// new TankHandler(tank);

// const target = new Target(GAME_WIDTH, GAME_HEIGHT)

// tank.drawTank(ctx);
// tank.drawGuage(ctx);
// tank.drawMissile(ctx);
// target.draw(ctx);


let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  
  // tank.update(dt);
  // tank.drawTank(ctx);
  // tank.drawGuage(ctx);
  // tank.drawMissile(ctx);
  // target.draw(ctx)
  game.update(dt);
  game.draw(ctx);
  // if (!tank.hit) {
  //   tank.drawTank(ctx);
  //   tank.drawGuage(ctx);
  //   tank.drawMissile(ctx);
  // }
  
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