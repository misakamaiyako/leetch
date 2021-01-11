export default function smallestStringWithSwaps (s:string, pairs:number[][]):string {
  pairs.sort((a,b)=>a[0]-b[0]);
  let forest:Map<number,Set<number>> = new Map<number,Set<number>>();
  for (let i = 0; i < pairs.length; i++) {
    let root:number= pairs[ i ][ 0 ];
    let value:number = pairs[ i ][ 1 ];
    if (root === value) {
      continue
    }
    let rootTree:Set<number> | undefined = forest.get(root);
    let subTree:Set<number> | undefined = forest.get(value);
    if (rootTree && !subTree) {
      rootTree.add(value);
      forest.set(value, rootTree);
    } else if (!rootTree && subTree) {
      subTree.add(root);
      forest.set(root, subTree);
    } else if (!rootTree && !subTree) {
      let t:Set<number> = new Set();
      t.add(root);
      t.add(value);
      forest.set(root, t);
      forest.set(value, t);
    } else if (subTree !== rootTree) {
     // @ts-ignore
      subTree.add(root);
    }
  }
  let result:string[] = s.split('');
  let woods = forest.values()
  let tree;
  while (!(tree=woods.next()).done){
    let temp = Array.from(tree.value).sort((a,b)=>a-b);
    let letters:string[] = [];
    for (let j = 0; j < temp.length; j++) {
      letters.push(s[ temp[ j ] ]);
    }
    letters.sort();
    for (let j = 0; j < temp.length; j++) {
      result[ temp[ j ] ] = letters[ j ]
    }
  }
  // for (let i = 0; i < forest.length; i++) {
  //   let temp = Array.from(forest[ i ]).sort((a, b) => a - b);
  //   let letters:string[] = [];
  //   for (let j = 0; j < temp.length; j++) {
  //     letters.push(s[ temp[ j ] ]);
  //   }
  //   letters.sort();
  //   for (let j = 0; j < temp.length; j++) {
  //     result[ temp[ j ] ] = letters[ j ]
  //   }
  // }
  return result.join('');
}
