class Node {
  constructor (value) {
    this.value = value;
    this.nextNode = null;
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
}