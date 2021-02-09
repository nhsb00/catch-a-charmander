import Tank from "./tank";

export default class CannonHandler {
    constructor(cannon) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 37:
                    cannon.moveLeft();
                    break;
                case 39:
                    cannon.moveRight();
                    break;
                case 38:
                    cannon.moveUp();
                    break;
                case 40:
                    cannon.moveDown();
                    break;
            }
        })

        document.addEventListener("keyup", (event) => {
            switch(event.keyCode) {
                case 37:
                    if (cannon.speed < 0)
                    cannon.stop();
                    break;
                case 39:
                    if (cannon.speed > 0)
                    cannon.stop();
                    break;
                case 38:
                     if (cannon.angle <= Math.PI)
                    cannon.stopAngle();
                    break;
                case 40:
                     if (cannon.angle >= 0)
                    cannon.stopAngle();
                    break;
            }
        })

    }
}