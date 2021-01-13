export default class UnionFind {
  private parent:Uint32Array;
  private rank:Uint32Array;

  constructor (n:number) {
    this.parent = new Uint32Array(n);
    this.rank = new Uint32Array(n);
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
  }

  find (index:number):number {
    if (index !== this.parent[ index ]) {
      this.parent[ index ] = this.find(this.parent[ index ]);
    }
    return this.parent[ index ]
  }
}
