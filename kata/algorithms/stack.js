// create a FIFO stack

class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  inspectStack() {
    return this.storage;
  }

  isEmpty() {
    if (this.count === 0) {
      return true;
    }

    return false;
  }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push("hello there!");
myStack.push("How are ya?!");
console.log(myStack.peek());
myStack.push("I'm pretty stacked! How about you?");
console.log(myStack.peek());
myStack.push("Hell yea I am too!");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.inspectStack());
console.log(myStack.isEmpty());
