export default function maximumUnits (boxTypes:number[][], truckSize:number):number {
  boxTypes = boxTypes.sort((m, n) => -m[ 1 ] + n[ 1 ])
  let total:number = 0
  let j:number = 0
  for (let i = 0; i < truckSize && j < boxTypes.length;) {
    if ((truckSize - i) < boxTypes[ j ][ 0 ]) {
      total += (truckSize - i) * boxTypes[ j ][ 1 ]
    } else {
      total += boxTypes[ j ][ 1 ] * boxTypes[ j ][ 0 ]
    }
    i += boxTypes[ j ][ 0 ]
    j++
  }
  return total
}
