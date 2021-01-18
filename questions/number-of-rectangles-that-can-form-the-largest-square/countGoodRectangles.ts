function countGoodRectangles (rectangles:number[][]):number {
  let area:{ [ key:number ]:number } = Object.create(null)
  let max:number = 0
  let count:number = 0
  for (let rectangle of rectangles) {
    let line = Math.min.apply(null, rectangle)
    if (line > max) {
      max = line
      count = 1
    } else if (line === max) {
      count++
    }
  }
  return count
}
