import Fancy from './Fancy'
test('1',()=>{
  let obj = new Fancy();
  const value =[[2],[3],[7],[2],[0],[3],[10],[2],[0],[1],[2]];
  const result = [undefined,undefined,undefined,undefined,10,undefined,undefined,undefined,26,34,20];
  ["append","addAll","append","multAll","getIndex","addAll","append","multAll","getIndex","getIndex","getIndex"].forEach((t,index)=>{
    // @ts-ignore
    expect(obj[t](value[index][0])).toBe(result[index])
  })
})
test('2',()=>{
  let obj = new Fancy();
  const result = [undefined,undefined,8,undefined,12,undefined,undefined,24,24,undefined,undefined,4,undefined,12,undefined,20,undefined,24,undefined,undefined,37,undefined,undefined,42,undefined,360,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,220560,undefined,undefined,undefined,285845760,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,150746316];
  const value =  [[12],[8],[1],[12],[0],[12],[8],[2],[2],[4],[13],[4],[12],[6],[11],[1],[10],[2],[3],[1],[6],[14],[5],[6],[12],[3],[12],[15],[6],[7],[8],[13],[15],[15],[10],[9],[12],[12],[9],[9],[9],[9],[4],[8],[11],[15],[9],[1],[4],[10],[9]];
  ["append","append","getIndex","append","getIndex","addAll","append","getIndex","getIndex","append","append","getIndex","append","getIndex","append","getIndex","append","getIndex","multAll","addAll","getIndex","append","addAll","getIndex","multAll","getIndex","multAll","addAll","addAll","append","multAll","append","append","append","multAll","getIndex","multAll","multAll","multAll","getIndex","addAll","append","multAll","addAll","addAll","multAll","addAll","addAll","append","append","getIndex"].forEach((t,index)=>{
    // @ts-ignore
    expect(obj[t](value[index][0])).toBe(result[index])
  })
});
test('3',()=>{
  let obj = new Fancy();
  const result =[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,3144,undefined,undefined,undefined,undefined,1983,undefined,204,144,undefined,66408,33480,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,28926730,undefined,undefined,undefined,96,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1057757,undefined,undefined,749148,undefined,undefined,undefined,undefined,undefined,undefined,42025,undefined,undefined,undefined,undefined,undefined,24791,80163678,undefined,undefined,735272514,undefined,102776440,undefined,undefined,undefined,undefined,253266000,454381643,undefined,undefined,undefined,undefined,undefined,undefined,527278509,undefined,732171430];
  const value =   [[15],[6],[9],[13],[13],[7],[1],[14],[14],[10],[8],[2],[0],[15],[3],[12],[1],[2],[12],[7],[9],[2],[4],[1],[9],[1],[8],[13],[4],[12],[7],[8],[10],[1],[15],[14],[1],[15],[4],[9],[2],[7],[11],[12],[3],[14],[4],[2],[3],[4],[12],[7],[8],[12],[10],[1],[9],[4],[13],[4],[8],[15],[12],[12],[11],[8],[14],[18],[3],[15],[4],[0],[5],[13],[10],[6],[3],[15],[17],[0],[4],[12],[9],[14],[3],[10],[17],[8],[0]];
  ["append","append","append","append","append","append","addAll","multAll","multAll","append","addAll","append","getIndex","addAll","append","append","append","getIndex","multAll","getIndex","getIndex","multAll","getIndex","getIndex","multAll","append","append","append","append","multAll","append","multAll","addAll","getIndex","addAll","addAll","addAll","getIndex","addAll","append","addAll","addAll","addAll","append","multAll","addAll","append","append","addAll","append","addAll","getIndex","append","multAll","getIndex","addAll","multAll","append","append","addAll","append","getIndex","multAll","append","addAll","append","append","getIndex","getIndex","addAll","multAll","getIndex","multAll","getIndex","multAll","append","append","multAll","getIndex","getIndex","multAll","append","multAll","addAll","multAll","multAll","getIndex","append","getIndex"].forEach((t,index)=>{
    // @ts-ignore
    expect(obj[t](value[index][0])).toBe(result[index])
  })
});

