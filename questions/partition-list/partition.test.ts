import partition from "./partition";
import ListNode from "../ListNode";

test('1',()=>{
  const list = new ListNode(1,new ListNode(4,new ListNode(3,new ListNode(2,new ListNode(5,new ListNode(2))))));
  expect(partition(list,3)).toStrictEqual(
    new ListNode(1,new ListNode(2,new ListNode(2,new ListNode(4,new ListNode(3,new ListNode(5))))))
  )
})
