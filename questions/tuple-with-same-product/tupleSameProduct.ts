export default function tupleSameProduct (nums:number[]):number {
  nums.sort((a, b) => a - b)
  let count:number = 0
  let map:Map<number, number> = new Map<number, number>()
  let length = nums.length
  for (let i = 0; i < length; i++) {
    let a = nums[ i ]
    for (let j = i + 1; j < length; j++) {
      let b = nums[ j ]
      let number = a * b
      if (map.has(number)) {
        map.set(number, <number>map.get(number) + 1)
      } else {
        map.set(number, 1)
      }
    }
  }

  map.forEach(t => {
    if (t > 1) {
      count += factorial(t) / factorial(t - 2)
    }
  })
  return count * 4
}

function factorial (num:number):number {
  if (num < 0) {
    return -1
  } else if (num === 0 || num === 1) {
    return 1
  } else {
    return (num * factorial(num - 1))
  }
}
