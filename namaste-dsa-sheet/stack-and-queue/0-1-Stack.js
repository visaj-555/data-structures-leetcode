class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    const element = this.items.pop();
    return element;
  }

  peek() {
    const top = this.items[this.items.length - 1];
    return top;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Expected: 30
console.log(stack.pop()); // Expected: 30
console.log(stack.peek()); // Expected: 20
console.log(stack.isEmpty()); // Expected: false
