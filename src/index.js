import Tank from './tank';
import TankHandler from './tankhandler';
import Cannon from './cannon';
import CannonHandler from './cannonhandler';
import Target from './target';

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

// const cannon = new Cannon(GAME_WIDTH, GAME_HEIGHT);
// new CannonHandler(cannon);
const target = new Target(GAME_WIDTH, GAME_HEIGHT)

tank.draw(ctx);
target.draw(ctx);
// cannon.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  tank.update(dt);
  tank.draw(ctx);
  target.draw(ctx)
  // cannon.update(dt);
  // cannon.draw(ctx);

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