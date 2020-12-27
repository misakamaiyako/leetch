export default function isIsomorphic(s: string, t: string): boolean {
  let map:Map<string,string> = new Map<string, string>()
  let mapB:Map<string,string> = new Map<string, string>()
  for (let i = 0; i < t.length; i++) {
    const Ls = s[i]
    const Ts = t[i]
    if (map.has(Ls)){
      if (map.get(Ls)!==Ts){
        return false
      }
    } else if (!mapB.has(Ts)) {
      map.set(Ls,Ts)
      mapB.set(Ts,Ls)
    } else {
      return false
    }
  }
  return true
}
