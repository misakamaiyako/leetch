import PriorityQueue from "./PriorityQueue";

test('1', () => {
  let P = new PriorityQueue<number>();
  const s = 'rdpycmpktsnujtkw';
  // for (let i = 0; i < 1000; i++) {
  //   P.insert((Math.random()*100)|0);
  // }
  while (P.peak() !== undefined) {
    let a = P.pull();
    let b = P.pull();
    if (a && b) {
      expect(a <= b).toBe(true)
    }
  }
})
