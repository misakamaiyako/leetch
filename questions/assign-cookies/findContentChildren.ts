export default function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a,b)=>a-b);
  s = s.sort((a,b)=>a-b);
  let sPin = 0
  let fit:number = 0;
  for (let i = 0; i < g.length; i++) {
    const need = g[i];
    for (; sPin < s.length; sPin++) {
      if (s[sPin]>=need){
        fit++;
        sPin++
        break
      }
    }
    if (sPin>s.length-1){
      return fit
    }
  }
  return fit;
}
