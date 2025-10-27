export { Node, LinkedList };

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

  //  Returns the node at the given index
  at(index) {
    let current = this.head;
    let count = 0;

    while(current) {
      if(count === index) return current;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  //  Removes the last element from the list
  pop() {
    if (!this.head) return null;

    if(!this.head.nextNode) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
    
  }

  //  Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this.head;

    while(current) {
      if(current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  //  Returns the index of the node containing value, or null if not found
  find(value) {
    let index = 0;
    let current = this.head;

    while(current) {
      if(current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  //  Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.head;
    let str = "";

    while (current) {
      str += ` ( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }

  //  Inserts a new node with the provided value at the given index
  insertAt(value, index) {

    // If index is 0, then prepend(value)
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let count = 0;

    // Find node before the target position
    while (current && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    // If current is null, index is out of range
    if (!current) {
      console.log("Index out of range");
      return;
    }

    const newNode = new Node(value, current.nextNode);
    current.nextNode = newNode;


  }

  
  
  

  // 🟥 removeAt(index): remove node at given index
  removeAt(index) {
    if (!this.head) return null;

    // If removing the head
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    let count = 0;

    // Find node before the one to remove
    while (current.nextNode && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    // If nextNode doesn’t exist, index out of range
    if (!current.nextNode) {
      console.log("Index out of range");
      return;
    }

    // Skip the node to remove
    current.nextNode = current.nextNode.nextNode;
  }

}


