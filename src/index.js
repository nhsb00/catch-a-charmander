import "./styles/index.scss"
import Tank from './scripts/tank';
import TankHandler from './scripts/tankhandler';
import Target from './scripts/target';

const canvas = document.getElementById("gameBoard");

const ctx = canvas.getContext("2d");

// ctx.clearRect(0, 0, 800, 600);

// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(240, 200, 50, 50);

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const tank = new Tank(GAME_WIDTH, GAME_HEIGHT);
new TankHandler(tank);

const target = new Target(GAME_WIDTH, GAME_HEIGHT)

tank.draw(ctx);
target.draw(ctx);


let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  
  tank.update(dt);
  tank.draw(ctx);
  target.draw(ctx)

  requestAnimationFrame(gameLoop);
}

gameLoop();

// const draw = () => {
//   drawTank();
//   drawTarget();
//   drawMissile();
// }
// const drawTank = () =>   {}
// const drawTarget = () => {}
// const drawMissile = () => {}

// draw();

// function twinkle(){
//   if (flag === 0) {
//     document.querySelector('h1').style.color = '#d6806e';
//     flag ++;
//   } else if(flag === 1) {
//     document.querySelector('h1').style.color = '#fbb666';
//     flag ++;
//   }else if(flag === 2){
//     document.querySelector('h1').style.color = '#f9f871';
//     flag ++;
//   }else{
//     document.querySelector('h1').style.color = '#f2ecff';
//     flag = 0;
//   }
// }

// setInterval(twinkle, 1000);