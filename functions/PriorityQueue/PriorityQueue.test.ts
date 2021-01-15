import PriorityQueue from "./PriorityQueue";

test('1', () => {
  let P = new PriorityQueue<number>();
  const s = 'rdpycmpktsnujtkw';
  for (let i = 0; i < s.length; i++) {
    P.insert(s.charCodeAt(i)-90);
  }
  console.log(P.queue);
  while (P.peak() !== undefined) {
    let a = P.pull();
    let b = P.pull();
    // if (a && b) {
    //   expect(a <= b).toBe(true)
    // }
  }
})
