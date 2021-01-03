export default function countPairs (deliciousness:number[]):number {
  let total:number = 0
  let counted:Map<number, boolean> = new Map<number, boolean>()
  const mode = 1e9 + 7
  const deliciousnessLength = deliciousness.length
  for (let i = 0; i < deliciousnessLength; i++) {
    const pin1 = deliciousness[ i ]
    for (let j = i + 1; j < deliciousnessLength; j++) {
      const pin2 = deliciousness[ j ]
      let count = (pin1 + pin2) % (mode)
      let r = counted.get(count)
      if (r === true) {
        total++
      } else if (r === undefined) {
        let flag = getis2(count)
        counted.set(count, flag)
        if (flag) {
          total++
        }
      }
    }
  }
  return total
}

function getis2 (num:number):boolean {
  return (Math.log(num) / Math.log(2)) % 1 === 0
}
