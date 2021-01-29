export default function maxNumEdgesToRemove (n:number, edges:number[][]):number {
  const type1 = new UnionFind(n+1);
  const type2 = new UnionFind(n+1);
  const type3 = new UnionFind(n+1);
  let remove:number = 0;
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const line1 = edge[1];
    const line2 = edge[2];
    if (edge[0]===1){
      if (type1.find(line1)===type1.find(line2)){
        remove++
      }
      type1.union(line1,line2)
    } else if (edge[0]===2){
      if (type2.find(line1)===type2.find(line2)){
        remove++
      }
      type2.union(line1,line2)
    } else {
      if (type3.find(line1)===type3.find(line2)){
        remove++
      } else {
        if (type1.find(line1)===type1.find(line2)){
          remove++
        }
        if (type2.find(line1)===type2.find(line2)){
          remove++
        }
        type1.union(line1,line2)
        type2.union(line1,line2)
        type3.union(line1,line2)
      }
    }
  }
  if (type1.count!==2||type2.count!==2){
    return -1
  }
  return remove
}

class UnionFind {
  private parent:Uint32Array;
  private rank:Uint32Array;
  count:number;
  constructor (n:number) {
    this.parent = new Uint32Array(n);
    this.rank = new Uint32Array(n);
    this.count=n;
    for (let i = 0; i < n; i++) {
      this.parent[ i ] = i;
      // this.rank[ i ] = i;
    }
  }

  union (x:number, y:number):void {
    let rootX:number = this.find(x);
    let rootY:number = this.find(y);
    if (rootX === rootY) {
      return;
    }
    if (this.rank[ rootX ] === this.rank[ rootY ]) {
      this.parent[ rootX ] = rootY;
      this.rank[ rootY ]++;
    } else if (this.rank[ rootX ] < this.rank[ rootY ]) {
      this.parent[ rootX ] = rootY;
    } else {
      this.parent[ rootY ] = rootX;
    }
    this.count--
  }

  find (index:number):number {
    if (index !== this.parent[ index ]) {
      this.parent[ index ] = this.find(this.parent[ index ]);
    }
    return this.parent[ index ]
  }
}
