export default function halvesAreAlike (s:string):boolean {
  const length = s.length
  const a:string = s.substring(0, length / 2)
  const b:string = s.substring(length / 2);
  let regexp = /[aeiouAEIOU]/g;
  return (a.match(regexp)||[]).length===(b.match(regexp)||[]).length
  // let map:Map<string, number> = new Map()
  // map.set('a', 0)
  // map.set('e', 0)
  // map.set('i', 0)
  // map.set('o', 0)
  // map.set('u', 0)
  // map.set('A', 0)
  // map.set('E', 0)
  // map.set('I', 0)
  // map.set('O', 0)
  // map.set('U', 0)
  // // let bMap:Set<string> = new Set(['a','e','i','o','u','A','E','I','O','U']);
  // for (let i = 0; i < length / 2; i++) {
  //   const charA:string = a[ i ]
  //   const charB:string = b[ i ]
  //   if (map.has(charA)) {
  //     map.set(charA, <number>map.get(charA) + 1)
  //   }
  //   if (map.has(charB)) {
  //     map.set(charB, <number>map.get(charB) - 1)
  //   }
  // }
  // let en = map.entries()
  // let next
  // while (!(next = en.next()).done) {
  //   if (next.value[ 1 ] !== 0) {
  //     return false
  //   }
  // }
  // return true
}
