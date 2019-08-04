function node(data) {
  let next = null;
  return { data, next };
}

function linkedList() {
  head = null;
  size = 0;
  // addData
  function addData(data) {
    let n = node(data);
    let current;

    if (head == null) {
      head = n;
      console.log(head);
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = n;
    }
    size += 1;
    console.log(size);
  }

  function printLinkedList() {
    let curr = head;

    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }

  return { addData, printLinkedList };

  // insertAt
  // removeFrom
  // removeAt
}

const ls1 = linkedList();
ls1.addData({ name: "Jason" });
ls1.addData({ name: "Alison" });
ls1.printLinkedList();

class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = null;
    this.size = 0;
    this.node = node;
  }

  add(el) {
    let node = new this.node(el);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }

  printLinkedList() {
    let curr = this.head;
    while (curr) {
      console.log(curr);
      curr = curr.next;
    }
  }
}

const ls = new LinkedList(Node);
ls.add({ name: "Alison" });
ls.add({ name: "Jason" });
ls.add({ name: "Ben" });
ls.add({ name: "Andre" });
ls.printLinkedList();
