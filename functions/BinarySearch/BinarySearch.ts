export default function BinarySearch (source:number[], target:number):number {
  let l:number = source.length;
  let low:number = 0;
  let high:number = l - 1;
  let middle:number;
  let middleValue:number;
  while (low <= high) {
    middle = Math.ceil((low + high) / 2);
    middleValue = source[ middle ]
    if (middleValue === target) {
      return middle;
    }
    if (middleValue > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}
