export default class Target {
    constructor(game) {
        this.targetWidth = Math.floor(Math.random() * 50 + 100);
        this.targetHeight = Math.floor(Math.random() * 50 + 100);
        this.targetX = Math.floor(Math.random() * (300 - this.targetWidth) + 500);
        this.targetY = game.gameHeight - this.targetHeight;
        this.image4 = document.getElementById("target")
    }
    update(){}
    draw(ctx) {
        ctx.drawImage(this.image4, this.targetX, this.targetY, this.targetWidth, this.targetHeight);
        // ctx.fillStyle = "#7bc4c4";
        // ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
    }
}   