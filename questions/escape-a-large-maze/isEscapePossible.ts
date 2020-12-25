export default function isEscapePossible (blocked:number[][], source:number[], target:number[], hasNext:boolean = true):boolean {
  if (blocked.length === 0) return true
  let currentPoints:IterableIterator<[ string, string ]>
  let nextPoints:Set<string> = new Set<string>()
  nextPoints.add(source.join(','))
  let used:Set<string> = new Set<string>()
  const maxArea = Math.ceil((blocked.length ** 2 / 2))
  used.add(source.join())
  let blockedSet:Set<string> = new Set<string>()
  const targetX = target[ 0 ]
  const targetY = target[ 1 ]
  for (let i = 0; i < blocked.length; i++) {
    blockedSet.add(blocked[ i ].join(','));
  }
  while (nextPoints.size > 0) {
    currentPoints = nextPoints.entries()
    nextPoints = new Set
    let current;
    while (!(current = currentPoints.next()).done) {
      let x:any;
      let y:any;
      [ x, y ] = current.value[ 0 ].split(',');
      used.add(x + ',' + y)
      x = parseInt(x)
      y = parseInt(y)
      if (used.size > maxArea) {
        if (hasNext) {
          return isEscapePossible(blocked, target, source, false)
        } else {
          return true
        }
      }
      if (x === targetX && y === targetY) {
        return true
      } else {
        if (x !== 0) {
          if (notHave(used, [ x - 1, y ], blockedSet)) {
            nextPoints.add([ x - 1, y ].join());
          }
        }
        if (y !== 0) {
          if (notHave(used, [ x, y - 1 ], blockedSet)) {
            nextPoints.add([ x, y - 1 ].join());
          }
        }
        if (x < 1e6 - 1) {
          if (notHave(used, [ x + 1, y ], blockedSet)) {
            nextPoints.add([ x + 1, y ].join());
          }
        }
        if (y < 1e6 - 1) {
          if (notHave(used, [ x, y + 1 ], blockedSet)) {
            nextPoints.add([ x, y + 1 ].join());
          }
        }
      }
    }
  }
  return false
}

function notHave (used:Set<string>, value:number[], blockedSet:Set<string>) {
  const v = value[ 0 ] + ',' + value[ 1 ]
  return !used.has(v) && !blockedSet.has(v)
}
