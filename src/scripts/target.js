export default class Target {
    constructor(game) {
        this.targetWidth = Math.floor(Math.random() * 100 + 30);
        this.targetHeight = Math.floor(Math.random() * 100 + 10);
        this.targetX = Math.floor(Math.random() * (375 - this.targetWidth) + 425);
        this.targetY = game.gameHeight - this.targetHeight;
    }
    update(){}
    draw(ctx) {
        ctx.fillStyle = "#7bc4c4";
        ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
    }
}