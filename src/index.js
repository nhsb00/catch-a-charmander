import Tank from './tank';

const canvas = document.getElementById("gameBoard");

const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 800, 600);

ctx.fillStyle = "#f00";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#00f";
ctx.fillRect(240, 200, 50, 50);

const GAME_WIDTH = 800;

const GAME_HEIGHT = 600;


const tank = new Tank(GAME_WIDTH, GAME_HEIGHT);

tank.draw(ctx);


// const draw = () => {
//   drawTank();
//   drawTarget();
//   drawMissile();
// }
// const drawTank = () =>   {}
// const drawTarget = () => {}
// const drawMissile = () => {}

// draw();