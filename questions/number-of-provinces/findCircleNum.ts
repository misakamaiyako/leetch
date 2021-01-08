export default function findCircleNum(isConnected: number[][]): number {
  let treeOfForest:number = 0;
  let used:Set<number> = new Set<number>();
  let pin:number = 0;
  while (used.size!==isConnected.length){
    if (!used.has(pin)){
      let tree=pin;
      treeOfForest++
      used.add(pin);
      let current:number[] = [tree];
      let next:number[] = [];
      while (current.length!==0){
        for (let i = 0; i < current.length; i++) {
          let city = isConnected[ current[ i ] ];
          for (let j = 0; j < city.length; j++) {
            if (city[j]===1&&!used.has(j)){
              used.add(j);
              next.push(j);
            }
          }
        }
        current = next;
        next = [];
      }
    }
    pin++;
  }
  return treeOfForest;
}
