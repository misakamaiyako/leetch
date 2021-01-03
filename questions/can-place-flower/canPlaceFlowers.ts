export default function canPlaceFlowers (flowerbed:number[], n:number):boolean {
  if (flowerbed.length === 0) {
    return false
  }
  let zeroCount:number = 1
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[ i ] === 0) {
      if (++zeroCount === 3) {
        if (--n <= 0) {
          return true
        } else {
          zeroCount = 1
        }
      }
    } else {
      zeroCount = 0
    }
  }
  if (zeroCount === 2) {
    n--
  }
  return n <= 0
}
