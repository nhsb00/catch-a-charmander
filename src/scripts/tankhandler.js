export default class TankHandler {
    constructor(tank) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 37:
                    tank.moveLeft();
                    break;
                case 39:
                    tank.moveRight();
                    break;
                case 38: 
                    tank.moveUp();
                    break;
                case 40:
                    tank.moveDown();
                    break;
                case 32:
                    tank.charging = true;
                    tank.gauge += tank.gaugeSpeed
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
                    break;
            }
        })
    }
}
