import Wall from './wall';

export function buildLevel(game, level) {
    let walls = [];

    level.forEach((row, rowIndex) => {
        row.forEach((wall, wallIndex)=>{
            if(wall === 1) {
                let position = {
                    x: 375 - 50 * rowIndex, 
                    y: 550 - 50 * wallIndex
                }
                walls.push(new Wall(game, position))
            }
        })
    })
    return walls
}

export const level1 =[
[1,1,0,0,0,0,0,0,0]
]

export const level2 =[
[1,0,0,0,0,0,0,0,0]
]