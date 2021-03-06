export default function MapBFS (map:number[][], target:number,startX:number=0,startY:number=0):boolean {
  const m = map[ 0 ].length
  const n = map.length
  let current:number[][] = [ [ startX, startY ] ]
  let next:number[][] = []
  //记录使用过的点
  let flagMap:Array<Array<boolean>> = []
  for (let i = 0; i < n; i++) {
    flagMap.push(new Array(m).fill(true))
  }
  flagMap[ startY ][ startX ] = false
  while (current.length > 0) {
    for (let i = 0; i < current.length; i++) {
      const [ x, y ] = current[ i ]
      if (map[ y ][ x ] === target) {
        return true
      }
      //判断边界
      if (x > 0) {
        //判断是否使用过
        if (flagMap[ y ][ x - 1 ]) {
          //将点记录为使用过的点，且放入下一次查询的数组内
          flagMap[ y ][ x - 1 ] = false
          next.push([ x - 1, y ])
        }
      }
      if (y > 0) {
        if (flagMap[ y - 1 ][ x ]) {
          flagMap[ y - 1 ][ x ] = false
          next.push([ x, y - 1 ])
        }
      }
      if (x <= m - 2) {
        if (flagMap[ y ][ x + 1 ]) {
          flagMap[ y ][ x + 1 ] = false
          next.push([ x + 1, y ])
        }
      }
      if (y <= n - 2) {
        if (flagMap[ y + 1 ][ x ]) {
          flagMap[ y + 1 ][ x ] = false
          next.push([ x, y + 1 ])
        }
      }
    }
    current = next
    next = []
  }
  return false
}
