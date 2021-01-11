export default function maximumGain (s:string, x:number, y:number):number {

  let strs:string[] = []
  let last:string = ''
  for (let i = 0; i < s.length; i++) {
    let char = s[ i ]
    if (char === 'a' || char === 'b') {
      last += char
    } else {
      if (char !== '') {
        strs.push(last)
        last = ''
      }
    }
  }
  strs.push(last)

  function dp (str:string, scllor:number):number {
    if (!/(ab|ba)/.test(str)) {
      return scllor
    } else {
      let r:number[] = []
      for (let i = 0; i < str.length - 1; i++) {
        let letter = str[ i ] + str[ i + 1 ]
        if (letter === 'ab') {
          r.push(dp(str.substring(0, i) + str.substring(i + 2), scllor + x))
        } else if (letter === 'ba') {
          r.push(dp(str.substring(0, i) + str.substring(i + 2), scllor + y))
        }
      }
      return Math.max.apply(null, r)
    }
  }

  let total:number = 0
  for (let i = 0; i < strs.length; i++) {
    total += dp(strs[ i ], 0)
  }
  return total
}


