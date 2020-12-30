# 树的广度优先查找
树的结构如下,使用更通用的树，二叉树只需要自行将children替换为Node.left和Node.right。

如果需要在森林里查找，可以并行查找或者构件一个虚拟的根节点。
```typescript
class Node {
  children:Node[]|undefined;
  value:number;
}
```
