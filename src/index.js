import "./styles/index.scss"
import Tank from './scripts/tank';
import TankHandler from './scripts/tankhandler';
import Target from './scripts/target';

const canvas = document.getElementById("gameBoard");

const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const tank = new Tank(GAME_WIDTH, GAME_HEIGHT);
new TankHandler(tank);

const target = new Target(GAME_WIDTH, GAME_HEIGHT)

tank.drawTank(ctx);
tank.drawGuage(ctx);
tank.drawMissile(ctx);
target.draw(ctx);


let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  
  tank.update(dt);
  tank.drawTank(ctx);
  tank.drawGuage(ctx);
  tank.drawMissile(ctx);
  target.draw(ctx)
  
  requestAnimationFrame(gameLoop);
}

gameLoop();

let count = 0;

function twinkle(){
  if (count === 0) {
    document.querySelector('h1').style.color = '#d6806e';
    count ++;
  } else if (count === 1) {
    document.querySelector('h1').style.color = '#fbb666';
    count ++;
  } else if (count === 2) {
    document.querySelector('h1').style.color = '#f9f871';
    count ++;
  } else {
    document.querySelector('h1').style.color = '#f2ecff';
    count = 0;
  }
}

setInterval(twinkle, 1000);