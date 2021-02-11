import Tank from './tank';
import TankHandler from './tankhandler';
import Target from './target';
import { buildLevel, level1 } from './levels';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;    
        this.gameWidth = gameWidth
    }
    
    start() {
        this.tank = new Tank(this);
        this.target = new Target(this);  
        
        let walls = buildLevel(this, level1);
        this.gameObjects = [this.tank, this.target, ...walls]

        new TankHandler(this.tank);
    }

    update(dt) {
       this.gameObjects.forEach(object => object.update(dt)); 

       this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
    }

    draw(ctx) {
        this.tank.draw(ctx);
        this.tank.drawGuage(ctx);
        this.tank.drawMissile(ctx);
        this.gameObjects.forEach(object => object.draw(ctx)); 
    }
}