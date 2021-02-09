export default class Tank {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 50; //tank width
        this.height = 50; //tank height
        this.maxSpeed = 5;
        this.speed = 0;
        this.position = {
            x: 0,
            y: this.gameHeight - this.height,
        }; // tank position
        //cannon
        this.tankCenterX = this.position.x + 0.5 * this.width;
        this.tankCenterY = this.gameHeight - 0.5 * this.height;
        this.cannonAngle = Math.PI / 4;
        this.cannonAngleSpeed = Math.PI / 60;
        this.cannonSpeed = 0;
        this.cannonLength = this.width * Math.sqrt(2);

    }

    draw(ctx) {
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height/2);
        ctx.lineTo(
            this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle),
            this.position.y + this.height/2 - this.cannonLength * Math.sin(this.cannonAngle));
        ctx.stroke();
        ctx.closePath();
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    moveUp() {
        this.cannonAngle += this.cannonAngleSpeed;
    }

    moveDown() {
        this.cannonAngle += -this.cannonAngleSpeed;
    }

    stop() {
        this.speed = 0;
    }

    stopcannonAngle() {
        this.cannonSpeed = 0;
    }
    
    update(dt) {
        if (!dt) return;

        this.position.x += this.speed;
        this.position.y += this.cannonAngleSpeed;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x  + this.width > this.gameWidth - this.width/2) this.position.x = this.gameWidth - this.width * 1.5;
        if(this.position.y + this.height/2 === this.position.y + this.height/2) this.position.y = this.gameHeight - this.height
    }

}