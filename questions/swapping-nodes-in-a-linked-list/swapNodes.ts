import ListNode from '../ListNode'

export default function swapNodes (head:ListNode | null, k:number):ListNode | null {
  if (head === null) return null
  let a:ListNode
  let b:ListNode
  let h = head
  for (let i = 1; i < k; i++) {
    if (h.next) {
      h = h.next
    }
  }
  a = h
  b = head
  while (true) {
    if (h.next) {
      h = h.next
      b = <ListNode>b.next
    } else {
      break
    }
  }
  let temp = a.val
  a.val = b.val
  b.val = temp
  return head
}
