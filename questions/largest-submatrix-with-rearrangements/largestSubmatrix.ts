export default function largestSubmatrix (matrix:number[][]):number {
  let width:number = matrix[ 0 ].length
  let height:number = matrix.length
  let count:Uint8Array = new Uint8Array(width)
  let result:number = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      count[ j ] = matrix[ i ][ j ] ? count[ j ] + 1 : 0
    }
    let b = count.sort((a, b) => b - a)
    for (let j = 0; j < height; j++) {
      result = Math.max(result, (j + 1) * b[ j ])
    }
  }
  return result
}
