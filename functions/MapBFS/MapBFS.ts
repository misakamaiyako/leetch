export default function MapBFS (map:number[][],target:number):boolean{
  const m=map[0].length;
  const n = map.length;
  let current:number[][]=[[0,0]];
  let next:number[][]=[];
  //记录使用过的点
  let flagMap:Array<Array<boolean>> = [];
  for (let i = 0; i < n; i++) {
    flagMap.push(new Array(m).fill(true))
  }
  flagMap[0][0] = false;
  while (current.length>0){
    for (let i = 0; i < current.length; i++) {
      const [x,y] = current[i];
      if (map[y][x]===target){
        return true;
      }
      if (x>0){
        if (flagMap[y][x-1]){
          flagMap[y][x-1]=false;
          next.push([x-1,y])
        }
      }
      if (y>0){
        if (flagMap[y-1][x]){
          flagMap[y-1][x] = false;
          next.push([x,y-1])
        }
      }
      if (x<m-2){
        if (flagMap[y][x+1]){
          flagMap[y][x+1] = true;
          next.push([y,x+1])
        }
      }
      if (y<n-2){
        if (flagMap[y+1][x]){
          flagMap[y+1][x] = true;
          next.push([y+1,x])
        }
      }
    }
    current = next;
    next = [];
  }
  return false;
}
