// export default class Cannon {

//     constructor(gameWidth, gameHeight) {
//         this.gameWidth = gameWidth;
//         this.gameHeight = gameHeight
//         this.tankCenterWidth = 50;
//         this.tankCenterHeight = 50;
//         this.maxSpeed = 5;
//         this.speed = 0;
//         this.angle = Math.PI / 4;
//         this.angleSpeed = Math.PI / 60;
//         this.cannonLength = this.width * Math.sqrt(2);
        
//         this.position = {
//             x: this.width / 2,
//             y: gameHeight - this.height/2,
//         };
//     }

//     draw(ctx) {
//         ctx.beginPath();
//         ctx.moveTo(this.position.x, this.position.y);
//         ctx.lineTo(
//             this.position.x + this.cannonLength * Math.cos(this.angle),
//             this.position.y - this.cannonLength * Math.sin(this.angle));
//         ctx.stroke();
//         ctx.closePath();
//     }

//     moveUp() {
//         this.angle = this.angleSpeed;
//     }

//     moveDown() {
//         this.angle = -this.angleSpeed;
//     }
    
//     moveLeft() {
//         this.speed = -this.maxSpeed;
//     }

//     moveRight() {
//         this.speed = this.maxSpeed;
//     }

//     stop() {
//         this.speed = 0;
//     }

//     stopAngle() {
//         this.angle = 0;
//     }

//     update(dt) {
//         if (!dt) return;

//         this.position.x += this.speed;
//         this.position.y += this.angle;

//         if(this.position.x < this.width/2) this.position.x = this.width/2;
//         if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;

//         if(this.position.y < this.height/2) this.position.y = this.height/ 2;
//         if(this.position.y + this.height > this.gameHeight) this.position.y = this.gameHeight - this.height;
//     }

// }