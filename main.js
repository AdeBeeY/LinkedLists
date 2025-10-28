import { Node, LinkedList } from './linkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Initial list:");
console.log(list.toString());

list.prepend("goat");
console.log("\nAfter prepending 'goat':");
console.log(list.toString());

console.log(`\nThe total number of nodes is: ${list.size()}`);
console.log(`The List head is: ${list.getHead().value}`);
console.log(`The List tail is: ${list.getTail().value}`);
console.log(`The node at index 2 is: ${list.at(2).value}`);
console.log(`The node at index 2 is: ${list.pop()}`);

console.log(`\nAfter popping the list:`);
console.log(list.toString());

console.log(`\nThe list contains 'dog': ${list.contains("dog")}`);
console.log(`The list contains 'cow': ${list.contains("cow")}`);
console.log(`The index of parrot is: ${list.find("parrot")}"`);