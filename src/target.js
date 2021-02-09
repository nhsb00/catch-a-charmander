export default class Target {
    constructor(width, height) {
        this.targetWidth = Math.floor(Math.random() * 100 + 30);
        this.targetHeight = Math.floor(Math.random() * 100 + 10);
        this.targetX = Math.floor(Math.random() * (500 - this.targetWidth) + 500);
        this.targetY = height - this.targetHeight;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
    }
}