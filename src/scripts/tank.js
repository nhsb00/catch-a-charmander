export default class Tank {

    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        //tank
        this.width = 50;
        this.height = 50;
        this.maxSpeed = 1;
        this.speed = 0;
        this.position = {
            x: 0,
            y: this.gameHeight - this.height,
        }; // tank position
        //cannon
        this.cannonAngle = Math.PI / 4;
        this.cannonAngleSpeed = Math.PI / 60;
        this.cannonSpeed = 0;
        this.cannonLength = this.width * Math.sqrt(2);
        //gauge
        this.gauge = Math.PI;
        this.gaugeSpeed = Math.PI / 30;
        this.gaugeBarRaidus = 30;
        //missile
        this.missileX = this.position.x + this.width/2 + this.cannonLength * Math.cos(this.cannonAngle),
        this.missileY = this.position.y + this.height/2 - this.cannonLength * Math.sin(this.cannonAngle)
        this.missileRadius = 10;
        this.missileDx = this.gauge * Math.cos(this.cannonAngle);
        this.missileDy = this.gauge * Math.sin(this.cannonAngle);
        this.gravity = 0.0981;
        this.charging = false;
        this.fire = false;
        this.hit = false;
        this.game = game;
    }

    draw(ctx) {
        //tank
        ctx.fillStyle = '#a2c49b';
        ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
        //cannon
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.width/2, this.position.y + this.height/2);
        ctx.lineTo(
            this.position.x + this.width/2 + this.cannonLength * Math.cos(this.cannonAngle),
            this.position.y + this.height/2 - this.cannonLength * Math.sin(this.cannonAngle));
        ctx.stroke();
        ctx.closePath();    
    } 
    drawGuage(ctx) {
        //gauge
        ctx.beginPath();
        ctx.arc(
            this.position.x + this.width / 2,
            this.position.y - this.height / 2,
            this.gaugeBarRaidus,
            Math.PI,
            this.gauge,
            false
        );
        ctx.stroke();
        
    }

    drawMissile(ctx) {
        //missile
        if (!this.fire) {
            this.missileX = this.position.x + this.width/2 + this.cannonLength * Math.cos(this.cannonAngle),
            this.missileY = this.position.y + this.height/2 - this.cannonLength * Math.sin(this.cannonAngle)
        } else {
            this.missileDy -= this.gravity;
            this.missileX += this.missileDx;
            this.missileY -= this.missileDy;
        }
          
        ctx.beginPath();
        ctx.arc(
            this.missileX,
            this.missileY,
            this.missileRadius,
            0,
            Math.PI * 2
        )
        ctx.fillStyle = "#e85450";
        ctx.fill();
        ctx.closePath()
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }
    
    stop() {
        this.speed = 0;
    }

    moveUp() {
        this.cannonAngle += this.cannonAngleSpeed;
    }

    moveDown() {
        this.cannonAngle += -this.cannonAngleSpeed;
    }

    stopcannonAngle() {
        this.cannonSpeed = 0;
    }

    update(dt) {
        if (!dt) return;
        

        this.position.x += this.speed;
        // this.position.y += this.cannonAngleSpeed;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x  + this.width > this.gameWidth/2 - this.width * 1.5) this.position.x = (this.gameWidth/2) - this.width * 2.5;
        if(this.position.y + this.height/2 === this.position.y + this.height/2) this.position.y = this.gameHeight - this.height

        //guage
        if(this.gauge > Math.PI * 2) {this.gauge = Math.PI * 2} 

        //missile wall on left/right/top/bottom
        if(this.missileX - this.missileRadius < 0 || this.missileX + this.missileRadius > this.gameWidth || this.missileY < 0 || this.missileY + this.missileRadius > this.gameHeight) {
            this.fire = false;
            console.log(this.missileX)
        }
        
        //missile hitting obejct
         if (this.missileX >= this.game.target.targetX &&
            this.missileX <= this.game.target.targetX + this.game.target.targetWidth &&
            this.missileY >= this.game.target.targetY) {
                this.hit = true;
                this.missileX = - this.missileX;
                this.missileX = - this.missileY;
                console.log('hit object')
                clearInterval();
         }
    }
    
    // check() {
    //     if(this.missileX < 0 || this.missileX > this.gameWidth || this.missileY < 0 || this.missileY > this.gameHeight) {
    //         this.fire = false;
    //     }
    //     if (this.missileX >= this.game.targetX &&
    //         this.missileX <= this.game.targetX + this.game.targetWidth &&
    //         this.missileY >= this.game.targetY) {
    //             this.hit = true;
    //             clearInterval(start);
    //             if(confirm("You got this, want to play again?")) {
    //                 location.reload();
    //             }
    //         }
    // }
}