export default function totalNQueens (n:number):number {
  let count:number = 0;
  let flagMap:Uint8Array = new Uint8Array(n ** 2);

  function trackBack (flagMap:Uint8Array, n:number, deep:number):void {
    let start:number = deep * n;
    if (deep === n) {
      count++;
    } else {
      for (let i = 0; i < n; i++) {
        const queen = start + i;
        flagMap[ queen ] = 2;
        if (check(flagMap, n, queen)) {
          trackBack(flagMap, n, deep + 1);
        }
        flagMap[ queen ] = 0;
      }
    }
  }

  trackBack(flagMap, n, 0);
  return count;
}

function check (array:ArrayLike<number>, width:number, position:number):boolean {
  const offset = position % width;
  const deep = (position / width) | 0;
  for (let i = 1; i <= deep; i++) {
    const moves = i * width;
    if (array[ position - moves ] !== 0) {
      return false;
    }
    if (offset - i >= 0) {
      if (array[ position - i - moves ] !== 0) {
        return false
      }
    }
    if (offset + i < width) {
      if (array[ position + i - moves ] !== 0) {
        return false
      }
    }
  }
  return true
}
