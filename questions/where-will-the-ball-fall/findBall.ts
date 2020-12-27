export default function findBall(grid: number[][]): number[] {
  let balls:number[] = [];
  const ballCount = grid[0].length;
  for (let i = 0; i < ballCount; i++) {
    balls.push(i)
  }
  for (let row = 0; row < grid.length; row++) {
    const currentRow = grid[row]
    for (let i = 0; i < balls.length; i++) {
      if (balls[i]!==-1){
        const ballStatus = balls[i]
        if (
          (ballStatus===0&&currentRow[0]===-1)||
          (currentRow[ballStatus]===-1&&currentRow[ballStatus-1]===1)||
          (currentRow[ballStatus]===1&&currentRow[ballStatus+1]===-1)||
          (ballStatus===ballCount-1&&currentRow[ballCount-1]===1)
        ){
          balls[i] = -1
        } else {
          balls[i]+=currentRow[ballStatus]
        }
      }
    }
  }
  return balls
}
