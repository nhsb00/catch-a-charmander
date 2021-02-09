import Tank from "./tank";

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
                     if (tank.angle <= Math.PI)
                    tank.stopAngle();
                    break;
                case 40:
                     if (tank.angle >= 0)
                    tank.stopAngle();
                    break;
            }
        })
    }
}
