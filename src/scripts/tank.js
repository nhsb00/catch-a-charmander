export default class Tank {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
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
        this.missileRadius = 10;
        this.missilePower = this.gauge * 1.5;
        this.missileDx = this.gauge * 1.5 * Math.cos(this.cannonAngle);
        this.missileDy = this.gauge * 1.5 * Math.sin(this.cannonAngle);
        this.gravity = 0.0981;
        this.charging = false;
        this.fire = false;
    }

    draw(ctx) {
        //tank
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
        //cannon
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.width/2, this.position.y + this.height/2);
        ctx.lineTo(
            this.position.x + this.width/2 + this.cannonLength * Math.cos(this.cannonAngle),
            this.position.y + this.height/2 - this.cannonLength * Math.sin(this.cannonAngle));
        ctx.stroke();
        ctx.closePath();
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
        ctx.fillStyle = "blue";
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
        if(this.position.x  + this.width > this.gameWidth/2 - this.width/2) this.position.x = (this.gameWidth/2) - this.width * 1.5;
        if(this.position.y + this.height/2 === this.position.y + this.height/2) this.position.y = this.gameHeight - this.height

        //missile
        if(this.gauge > Math.PI * 2) this.gauge = Math.PI * 2
        
    }

}