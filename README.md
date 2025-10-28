# LinkedLists

A simple yet complete LinkedList implementation built using JavaScript classes (or factories). This project demonstrates core data structure concepts through clean, modular code and essential linked list operations.

## 🚀 Features

### 🧱 Node Class

Each node contains:

- `value` — stores the data.
- `nextNode` — points to the next node (default: `null`).

### 🔗 LinkedList Class

Represents the entire list with the following methods:

| Method            | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| `append(value)`   | Adds a new node containing `value` to the end of the list.                         |
| `prepend(value)`  | Adds a new node containing `value` to the start of the list.                       |
| `size()`          | Returns the total number of nodes in the list.                                     |
| `getHead()`       | Returns the first node in the list.                                                |
| `getTail()`       | Returns the last node in the list.                                                 |
| `at(index)`       | Returns the node at the specified index.                                           |
| `pop()`           | Removes the last node from the list.                                               |
| `contains(value)` | Returns `true` if the list contains the given value; otherwise, `false`.           |
| `find(value)`     | Returns the index of the node containing `value`, or `null` if not found.          |
| `toString()`      | Returns a string representation of the list: <br> `( value ) -> ( value ) -> null` |

---

## 🧠 Extra Credit Methods

| Method                   | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `insertAt(value, index)` | Inserts a node with the provided `value` at the specified index.   |
| `removeAt(index)`        | Removes the node at the given index and updates links accordingly. |

> 💡 **Tip:** When inserting or removing nodes, make sure to adjust the `nextNode` references to maintain proper linkage.

---

🎯 Learning Goals
Understand how linked lists work under the hood.

Practice object-oriented programming or factory functions in JavaScript.

Strengthen your grasp of node references and list traversal.

Gain hands-on experience with data structures and algorithms.

🧑‍💻 Perfect For
Students learning data structures

Developers preparing for coding interviews

Programmers exploring JavaScript algorithms

⭐ If you find this project helpful, don’t forget to star the repo!
