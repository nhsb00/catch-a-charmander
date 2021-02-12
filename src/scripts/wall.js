export default class Wall {
    constructor(game, position) {
        this.game = game
        this.position = position;
        this.width = 50;
        this.height = 50;
        this.markedForDeletion = false;
        this.image3 = document.getElementById("wall")
    }

    update() {
        let bottomOfMissile = this.game.tank.missileY + this.game.tank.missileRadius;
        let topOfMissile = this.game.tank.missileY;
        
        let topOfWall = this.position.y;
        let left = this.position.x;
        let right = this.position.x + this.width;
        let bottom = this.position.y + this.height;
        if (bottomOfMissile >= topOfWall && topOfMissile <= bottom && this.game.tank.missileX >= left && this.game.tank.missileX + this.game.tank.missileRadius <= right) {
            this.game.tank.missileX = - this.game.tank.missileX;
            this.game.tank.missileX = - this.game.tank.missileY;
            this.markedForDeletion = true;
            } 
    }

    draw(ctx) {
        ctx.drawImage(this.image3,this. position.x, this.position.y, this.width, this.height)
        
    }
}