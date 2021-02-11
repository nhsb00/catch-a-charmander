export function detectionCollision(tank, gameObject) {
    let bottomOfMissile = tank.missileY + tank.missileRadius;
    let topOfMissile = tank.missileY;

    let topOfgameObject = gameObject.position.y;
    let left = gameObject.position.x;
    let right = gameObject.position.x + gameObject.width;
    let bottom = gameObject.position.y + gameObject.height;

    if (bottomOfMissile >= topOfgameObject &&
        topOfMissile <= bottom &&
            tank.missileX >= left &&
            tank.missileX + tank.missileRadius <= right) {
                return true;
         } else {
             return false;
         }
}