export default function find (grid:number[][], target:number, startX:number = 0, startY:number = 0):boolean {
  const m:number = grid[ 0 ].length;
  const n:number = grid.length;
  let flagMap:Array<Array<boolean>> = new Array<Array<boolean>>();
  for (let i = 0; i < n; i++) {
    flagMap.push(new Array(n).fill(false));
  }

  function MapDFS (x:number, y:number):boolean {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return false
    }
    if (flagMap[ y ][ x ]) {
      return false;
    }
    flagMap[ y ][ x ] = true;
    if (grid[ y ][ x ] === target) {
      return true;
    }
    return MapDFS(x + 1, y) || MapDFS(x - 1, y) || MapDFS(x, y + 1) || MapDFS(x, y - 1);
  }

  return MapDFS(startX, startY);
}
