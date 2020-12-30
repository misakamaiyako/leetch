import MedianFinder from './MedianFinder'

test('1',()=>{
  let obj = new MedianFinder();
  obj.addNum(1)
  obj.addNum(2)
  expect(obj.findMedian()).toBe(1.5)
  obj.addNum(3)
  expect(obj.findMedian()).toBe(2)
},50)
test('2',()=>{
  let obj = new MedianFinder();
  obj.addNum(-1)
  expect(obj.findMedian()).toBe(-1)
  obj.addNum(-2)
  expect(obj.findMedian()).toBe(-1.5)
  obj.addNum(-3)
  expect(obj.findMedian()).toBe(-2)
  obj.addNum(-4)
  expect(obj.findMedian()).toBe(-2.5)
  obj.addNum(-5)
  expect(obj.findMedian()).toBe(-3)

},50)
