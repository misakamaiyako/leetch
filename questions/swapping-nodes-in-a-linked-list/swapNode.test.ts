import ListNode from '../ListNode'
import swapNodes from './swapNodes'

test('1', () => {
  let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  console.log(expect(swapNodes(list, 2)))
})
