export default function containsCycle (grid:string[][]):boolean {
  const width = grid[ 0 ].length;
  const height = grid.length
  let flap:Array<Array<boolean>> = []
  for (let i = 0; i < height; i++) {
    flap.push(new Array(width).fill(false))
  }
  flap[ 0 ][ 0 ] = true;
  let flap2:Array<Array<boolean>> = []
  for (let i = 0; i < height; i++) {
    flap2.push(new Array(width).fill(false))
  }
  flap2[ 0 ][ 0 ] = true;
  return (DP(grid, [ [ 0, 0 ] ], 1, 0, flap, 'left', width, height))||(DP(grid, [ [ 0, 0 ] ], 0, 1, flap2, 'up', width, height))
}

function DP (grid:string[][], path:number[][], x:number, y:number, used:Array<Array<boolean>>, from:'up' | 'down' | 'left' | 'right', width:number, height:number):boolean {
  if (x >= width || y >= height || x < 0 || y < 0) {
    return false
  }
  const current = grid[ y ][ x ];
  const first = grid[ path[ 0 ][ 1 ] ][ path[ 0 ][ 0 ] ]
  if (used[ y ][ x ]) {
    return path.length > 3 && current === first
  }
  used[ y ][ x ] = true;
  if (current === first) {
    path.push([ x, y ])
  } else {
    path = [ [ x, y ] ];
  }
  return (from !== "up" && DP(grid, path, x, y - 1, used, "down", width, height)) ||
    (from !== "down" && DP(grid, path, x, y + 1, used, "up", width, height)) ||
    (from !== "left" && DP(grid, path, x - 1, y, used, "right", width, height)) ||
    (from !== "right" && DP(grid, path, x + 1, y, used, "left", width, height))
}
