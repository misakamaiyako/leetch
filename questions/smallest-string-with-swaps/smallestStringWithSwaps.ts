export default function smallestStringWithSwaps (s:string, pairs:number[][]):string {
  // pairs.sort((a,b)=>a[0]-b[0]);
  let forest:Array<Set<number>> = new Array<Set<number>>()
  for (let i = 0; i < pairs.length; i++) {
    let root:number = pairs[ i ][ 0 ]
    let value:number = pairs[ i ][ 1 ]
    if (root === value) {
      continue
    }
    let rootTree:Set<number> | undefined = forest[ root ]
    let subTree:Set<number> | undefined = forest[ value ]
    if (rootTree && !subTree) {
      rootTree.add(value)
      forest[ value ] = rootTree
    } else if (!rootTree && subTree) {
      subTree.add(root)
      forest[ root ] = subTree
    } else if (!rootTree && !subTree) {
      let t:Set<number> = new Set()
      t.add(root)
      t.add(value)
      forest[ root ] = t
      forest[ value ] = t
    } else if (subTree !== rootTree) {
      subTree.forEach(t => {
        (<Set<number>>rootTree).add(t)
        forest[ t ] = <Set<number>>rootTree
      })
    }
  }
  let result:string[] = s.split('')
  let forests = new Set(forest)
  // @ts-ignore
  forests.delete(undefined)
  let woods = forests.entries()
  let tree:IteratorResult<[ Set<number>, Set<number> ], any>
  while (!(tree = woods.next()).done) {
    let temp1 = Array.from(tree.value[ 0 ])
    if (temp1[ 0 ] === undefined) continue
    let temp = temp1.sort((a, b) => a - b)
    let letters:string[] = []
    for (let j = 0; j < temp.length; j++) {
      letters.push(s[ temp[ j ] ])
    }
    letters.sort()
    for (let j = 0; j < temp.length; j++) {
      result[ temp[ j ] ] = letters[ j ]
    }
  }
  return result.join('');
}
