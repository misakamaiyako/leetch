export default function decode (encoded:number[], first:number):number[] {
  let result:number[] = [ first ]
  for (let i = 0; i < encoded.length; i++) {
    result.push(result[ i ] ^ encoded[ i ])
  }
  return result
}
