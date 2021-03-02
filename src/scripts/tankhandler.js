export default class TankHandler {
    constructor(tank, game, ctx) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 37:
                    tank.moveLeft();
                    tank.srcY = 1;
                    tank.srcX += 1;
                    break;
                case 39:
                    tank.moveRight();
                    tank.srcY = 2;
                    tank.srcX += 1;
                    break;
                case 38: 
                    tank.moveUp();
                    tank.srcY = 0;
                    tank.srcX += 1;
                    break;
                case 40:
                    tank.moveDown();
                    tank.srcY = 0;
                    tank.srcX += 1;
                    break;
                case 32:
                    tank.srcY = 0;
                    tank.srcX = 0;
                    if (!tank.fire) {
                        tank.charging = true;
                        tank.gauge += tank.gaugeSpeed
                        tank.missileDx = tank.gauge * 1.5 * Math.cos(tank.cannonAngle);
                        tank.missileDy = tank.gauge * 1.5 * Math.sin(tank.cannonAngle);
                    } else {
                        return;
                    }
                    break;
                case 13:
                    game.start();
                    break;
            }
        })

        document.addEventListener("keyup", (event) => {
            switch(event.keyCode) {
                case 37:
                    if (tank.speed < 0)
                    tank.stop();
                    break;
                case 39:
                    if (tank.speed > 0)
                    tank.stop();
                    break;
                case 38:
                    if (tank.cannonAngle >=0 )
                    tank.stopcannonAngle();
                    break;
                case 40:
                    if (tank.cannonAngle <= Math.PI)
                    tank.stopcannonAngle();
                    break;
                case 32:
                    tank.charging = false;
                    tank.fire = true;
                    tank.gauge = Math.PI;
                    break;
            }
        })
    }
}
