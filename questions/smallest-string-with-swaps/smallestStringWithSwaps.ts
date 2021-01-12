import UnionFind from "../../functions/UnionFind/UnionFind";
import PriorityQueue from "../../functions/PriorityQueue/PriorityQueue";

export default function smallestStringWithSwaps (s:string, pairs:number[][]):string {
  if (pairs.length===0) return s;
  const len = s.length;
  let unionFind = new UnionFind(len);
  for (let i = 0; i < pairs.length; i++) {
    const index1 = pairs[i][0];
    const index2 = pairs[i][1];
    unionFind.union(index1,index2);
  }
  let charArray:string[] = s.split('');
  let map:Map<number,PriorityQueue<string>> = new Map();
  for (let i = 0; i < len; i++) {
    const root = unionFind.find(i);
    if (!map.has(root)){
      const minHeap = new PriorityQueue<string>()
      minHeap.insert(charArray[i]);
      map.set(root,minHeap)
    } else {
      (<PriorityQueue<string>>map.get(root)).insert(charArray[i]);
    }
  }
  let result:string = '';
  for (let i = 0; i < len; i++) {
    let root = unionFind.find(i);
    result+=(<PriorityQueue<string>>map.get(root)).pull();
  }
  return result;
}
