export default class UnionFind {
  private parent:Array<number>;
  private rank:Array<number>;

  constructor (n:number) {
    this.parent = new Array<number>(n);
    this.rank = new Array<number>(n);
    for (let i = 0; i < n; i++) {
      this.parent[ i ] = i;
      this.rank[ i ] = i;
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
