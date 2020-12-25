export default function containsCycle (grid:string[][]):boolean {
  let used:Set<string> = new Set<string>()
  return DP(0, 0, grid[ 0 ][ 0 ], used, grid, [])
}

function DP (X:number, Y:number, value:string, used:Set<String>, map:string[][], currentSnake:string[]):boolean {
  if (X < 0 || Y < 0 || X >= map[ 0 ].length || Y >= map.length) {
    return false
  }
  if (used.has(X + ',' + Y)) {
    if (map[ Y ][ X ] === value) {
      const index = currentSnake.findIndex(t => t === X + ',' + Y)
      if (index > -1 && (currentSnake.length - index >= 4)) {
        console.log([ X, Y ], currentSnake)
      }
      return index > -1 && (currentSnake.length - index >= 4)
    } else {
      return false
    }
  } else {
    used.add(X + ',' + Y)
  }
  if (map[ Y ][ X ] === value) {
    currentSnake.push(X + ',' + Y)
  } else {
    value = map[ Y ][ X ]
    currentSnake = []
  }
  return DP(X + 1, Y, value, used, map, currentSnake) || DP(X - 1, Y, value, used, map, currentSnake) || DP(X, Y + 1, value, used, map, currentSnake) || DP(X, Y - 1, value, used, map, currentSnake)
}
