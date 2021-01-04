export default class BlackBox {
  mirror:Array<'closed' | 'open'>;
  // corner:number[];
  n:number;
  m:number;

  constructor (n:number, m:number) {
    this.mirror = new Array(2 * (m + n)).fill('closed');
    // this.corner = [ 0, m, n + m, n + 2 * m ];
    this.n = n;
    this.m = m;
  }

  open (index:number, direction:number):number {
    this.mirror[ index ] = "open";
    let x:number, y:number;
    const m = this.m;
    const n = this.n;
    if (index <= m) {
      y = 0;
      x = index;
    } else if (index <= n + m) {
      x = m;
      y = index - m;
    } else if (index <= n + 2 * m) {
      y = n;
      x = -(index - 2 * m - n)
    } else {
      x = 0;
      y = -(index - 2 * m - 2 * n)
    }
    /**
     * direction
     *
     * [1,1]  [-1,1]
     * [1,-1] [-1,-1]
     *
     */
    let changeX:number, changeY:number;
    while (true) {
      if(x===0){
        if (direction===1){
          changeX = Math.min(y,m);
          changeY = -changeX
        } else {
          changeX = Math.min(n-y,m);
          changeY = changeX
        }
      } else if (y===0){
        if (direction===1){
          changeX = -Math.min(x,n);
          changeY = -changeX
        } else {
          changeX = Math.min(m-x,m,n);
          changeY = changeX
        }
      } else if (y===n){
        if(direction===1){
          changeX = Math.min(m-x,m,n);
          changeY = -changeX
        } else {
          changeX = -Math.min(x,n);
          changeY = changeX
        }
      } else {///x===m
        if (direction===1){
          changeX = -Math.min(n-y,m,n);
          changeY = -changeX
        } else {
          changeX = -Math.min(y,m);
          changeY = changeX
        }
      }
      x += changeX;
      y += changeY;
      if (x === 0 || y === 0 || x === m || y === n) {
        let p:number;
        if (y === 0) {
          p = x;
        } else if (x === m) {
          p = x + y;
        } else if (y === n) {
          p = m + n + (m - x)
        } else {
          p = 2 * (m + n) - y
        }
        if (this.mirror[ p ] === "open") {
          return p
        }
        if (p === 0 || p === m || p === n + m || p === n + 2 * m) {
          return index
        }
        direction = -direction
      }
    }
  }

  close (index:number):void {
    this.mirror[ index ] = "closed";
  }
}
