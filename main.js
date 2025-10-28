import { Node, LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.prepend("goat");
console.log(list.toString());
console.log(`The total number of list is: ${list.size()}`);
console.log(`The List head is: ${list.head}`);
console.log(`The List tail is: ${list.getTail()}`);
console.log(`The node at index 2 is: ${list.at(2)}`);
