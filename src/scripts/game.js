import Tank from './tank';
import TankHandler from './tankhandler';
import Target from './target';
import { buildStage, stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10 } from './stages';

export const GAMESTATE = {
    // PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWSTAGE: 4,
}

export default class Game {
    constructor(gameWidth, gameHeight, ctx) {

        this.gameHeight = gameHeight;    
        this.gameWidth = gameWidth
        this.gamestate = GAMESTATE.MENU;
        this.ctx = ctx;
        this.tank = new Tank(this);
        this.target = new Target(this);  
        this.gameObjects = [];
        this.walls = []
        this.attempts = 0;
        this.attemptsCount = document.getElementById('attempts')
        this.maxAttempts = 10;

        this.stages = [stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10]
        this.currentStage = 0;
        this.currentStageCount = document.getElementById("stage")
        new TankHandler(this.tank, this);

        this.image5 = document.getElementById("background")
        this.image6 = document.getElementById("gameover") 
    }
    
    start() {
        if(this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEWSTAGE) return;
            this.target = new Target(this);
            if (this.currentStage >= 11) {
                this.currentStage = 0;
            }
            this.walls = buildStage(this, this.stages[this.currentStage]);
            this.gameObjects = [this.tank, this.target]
            this.attempts = 0;
            this.tank.reset();
        this.gamestate = GAMESTATE.RUNNING
    }

    restart() {
        // this.gamestate = GAMESTATE.NEWSTAGE;
        
        this.tank = new Tank(this);
        this.target = new Target(this);
        this.walls = buildStage(this, this.stages[0]);
        this.gameObjects = [this.tank, this.target]
        new TankHandler(this.tank, this);
        this.attempts = 0;
        
        this.currentStage = 0;
       
    }

    update(dt) {
        if (this.attempts === this.maxAttempts) this.gamestate = GAMESTATE.GAMEOVER;

        if(this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER) return;

        if (this.tank.hit === true) {
            this.tank.hit = false;
            this.currentStage++;
            this.currentStageCount.innerText = `Stage: ${this.currentStage}`
            this.gamestate = GAMESTATE.NEWSTAGE;
            this.start();
        }


        [...this.gameObjects, ...this.walls].forEach(object => object.update(dt)); 

       this.walls = this.walls.filter(wall => !wall.markedForDeletion)
    }

    draw(ctx) {
        this.tank.draw(ctx);
        this.tank.drawGuage(ctx);
        this.tank.drawMissile(ctx);
        [...this.gameObjects, ...this.walls].forEach(object => object.draw(ctx)); 
        
        if(this.gamestate === GAMESTATE.MENU) {
            ctx.drawImage(this.image5, 0,0,this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign ="center";
            ctx.fillText("Press Enter to start", this.gameWidth /2 , this.gameHeight/2)
         }
         
         if(this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.drawImage(this.image6, 0,0,this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign ="center";
            ctx.fillText("GAME OVER", this.gameWidth /2 , this.gameHeight/2)
         }

          if(this.gamestate === GAMESTATE.NEWSTAGE) {
            ctx.drawImage(this.image6, 0,0,this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign ="center";
            ctx.fillText("NEW STAGE", this.gameWidth /2 , this.gameHeight/2)
         }
    }


    // togglePause() {
    //     if(this.gamestate == GAMESTATE.PAUSED) {
    //         this.gamestate = GAMESTATE.RUNNING;
    //     } else {
    //         this.gamestate = GAMESTATE.PAUSED;
    //     }
    // }
}