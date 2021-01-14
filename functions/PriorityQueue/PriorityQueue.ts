export default class PriorityQueue<T> {
  private length:number;
  private queue:T[];
  private compare?:(arg0:T, arg1:T) => boolean
  private maxLength?:number;

  constructor (length?:number, compare?:(arg0:T, arg1:T) => boolean) {
    this.length = 0;
    this.queue = [];
    if (length !== undefined) {
      this.maxLength = length
    }
    if (compare) {
      this.compare = compare
    }
  }

  insert (value:T) {
    if (this.maxLength && this.length >= this.maxLength) {
      throw 'your PriorityQueue has matched max length'
    }
    this.queue.push(value);
    this.length++;
    this.bubbleUp(this.length - 1);
  }

  peak ():T {
    return this.queue[ 0 ];
  }

  pull ():T {
    if (this.length <= 0) {
      throw 'there is no more element in you PriorityQueue';
    }
    const oldRoot = this.queue[ 0 ];
    const newRoot = this.queue.pop() as T;
    this.length--;
    if (this.length > 0) {
      this.queue[ 0 ] = newRoot;
      this.reorder(0);
    }
    return oldRoot
  }

  bubbleUp (index:number) {
    if (index === 0) {
      return
    }
    let parent = this.getParentOf(index);
    if (this.evaluate(index, parent)) {
      this.swap(index, parent);
      this.bubbleUp(parent)
    } else {
      return
    }
  }

  reorder (index:number) {
    let left = this.getLeftOf(index);
    let right = this.getRightOf(index);
    if (this.evaluate(left, index)) {
      this.swap(index, left);
      this.reorder(left);
    } else if (this.evaluate(right, index)) {
      this.swap(index, right);
      this.reorder(right);
    } else if (index === 0) {
      return
    } else {
      this.reorder(0);
    }
  }

  swap (self:number, target:number) {
    const temp = this.queue[ self ];
    this.queue[ self ] = this.queue[ target ];
    this.queue[ target ] = temp;
  }

  evaluate (node:number, root:number):boolean {
    if (this.queue[ root ] === undefined || this.queue[ node ] === undefined) {
      return false;
    }
    if (this.compare) {
      return this.compare(this.queue[ node ], this.queue[ root ])
    } else {
      return this.queue[ node ] < this.queue[ root ]
    }
  }

  getParentOf (index:number):number {
    return (index-1) >>> 1;
  }

  getLeftOf (index:number):number {
    return (index << 1) + 1;
  }

  getRightOf (index:number):number {
    return (index << 1) + 2;
  }
}
