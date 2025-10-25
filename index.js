class Node {
  constructor (value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //  Add a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    //  make newNode head if list is empty
    if(this.head === null) {
      this.head = newNode;
      return;
    }

    // If list is not empty, find the last node
    let current = this.head;
    while(current.nextNode !== null) {
      current = current.nextNode;
    }

    //  link the nextnode with the new node
    current.nextNode = newNode;
  }

  //  Add a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  //  Returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;

    while(current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  //  Returns the first node in the list
  head() {
    return this.head;
  }

  //  Returns the last node in the list
  tail() {
    if(!this.head) return null;

    let current = this.head;
    while(current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }
}
