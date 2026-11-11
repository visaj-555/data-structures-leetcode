class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    const removedElement = this.items[this.front];
    this.front++;
    return removedElement;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.items.length;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.isEmpty()); // false
