export default function eraseOverlapIntervals(intervals: number[][]): number {
  intervals = intervals.sort((m,n)=>m[1]-n[1]);
  const n = intervals.length;
  let right = intervals[0][1];
  let ping = 1;
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] >= right) {
      ping++;
      right = intervals[i][1];
    }
  }
  return n - ping;
}
