import Wall from './wall';

export function buildStage(game, stage) {
    let walls = [];

    stage.forEach((row, rowIndex) => {
        row.forEach((wall, wallIndex)=>{
            if(wall === 1) {
                let position = {
                    x: 450 - 50 * rowIndex, 
                    y: 550 - 50 * wallIndex
                }
                walls.push(new Wall(game, position))
            }
        })
    })
    return walls
}

export const stage0 = [
[1]
]
export const stage1 =[
[0,0,0,0,0,0,0,1,0],
[1,1,1,1,1,1,1,1,0],
[0,0,0,0,0,0,0,1,0]
]
export const stage2 =[
[1,1,1,1,1,1,1,1,0],
[0,0,0,0,1,0,0,0,0],
[1,1,1,1,1,1,1,1,0]
]
export const stage3 =[
[1,1,1,1,1,1,1,0,0],
[0,0,0,1,0,0,0,1,0],
[1,1,1,1,1,1,1,0,0]
]
export const stage4 =[
[1,1,1,1,1,1,1,0,0],
[0,0,0,0,0,0,1,0,0],
[1,1,1,1,1,1,1,1,0]
]
export const stage5 =[
[1,1,1,1,0,1,1,0,0],
[0,0,0,0,1,0,0,0,0],
[1,1,1,1,1,1,1,1,0]
]
export const stage6 =[
[0,1,1,0,1,0,0,0,1],
[1,0,0,1,0,1,1,1,0],
[0,1,1,0,1,0,0,0,1]
]
export const stage7 =[
[1,0,1,0,1,0,1,0,1],
[0,1,0,1,0,1,0,1,0],
[1,0,1,0,1,0,1,0,1]
]
export const stage8 =[
[1,0,1,0,1,1,0,0,0],
[1,1,1,0,1,1,1,1,0],
[1,0,1,1,0,1,0,0,0]
]
export const stage9 =[
[1,1,1,1,1,1,0,0,0],
[1,1,1,1,1,1,1,1,0],
[1,1,1,1,1,1,0,0,0]
]
export const stage10 =[
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1]
]