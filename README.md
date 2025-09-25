**Introduction to JavaScript**

JavaScript is:
•	A high-level, interpreted programming language.
•	Single-threaded and dynamically typed.
•	Used mainly for web development to make websites interactive.
•	Runs inside browsers (via JavaScript engine like V8 in Chrome) but can also run on servers (via Node.js).
________________________________________
🟡 **Core JavaScript Concepts**
1. Variables
•	Used to store data.
•	Declared using:
•	var name = "John";  // Function-scoped (old way)
•	let age = 25;       // Block-scoped
•	const PI = 3.14;    // Block-scoped, cannot be reassigned
________________________________________
**2. Data Types**
•	Primitive Types (immutable):
o	String ("Hello")
o	Number (42)
o	Boolean (true, false)
o	Undefined (variable declared but no value assigned)
o	Null (intentional empty value)
o	BigInt (123n)
o	Symbol (unique identifier)
•	Reference Types (mutable):
o	Objects ({name: "John"})
o	Arrays ([1, 2, 3])
o	Functions (function greet() {})
________________________________________
**3. Operators**
•	Arithmetic: + - * / % **
•	Assignment: = += -= *= /=
•	Comparison: == === != !== > < >= <=
•	Logical: && || !
•	Ternary: condition ? value1 : value2
________________________________________
**4. Functions**
Reusable blocks of code:
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Dhanraj"));
•	Arrow Functions:
const greet = name => `Hello, ${name}`;
________________________________________
**5. Control Flow**
•	If-Else:
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
•	Switch:
switch(day) {
  case "Mon": console.log("Work"); break;
  case "Sun": console.log("Rest"); break;
  default: console.log("Unknown");
}
•	Loops: for, while, do...while, for...of, for...in
________________________________________
**6. Objects**
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello!");
  }
};
console.log(person.name);
person.greet();
________________________________________
**7. Arrays**
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits[0]); // apple
Common methods: map(), filter(), reduce(), forEach(), find()
________________________________________
8. Events
Used to react to user actions:
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
________________________________________
**9. DOM Manipulation**
•	DOM (Document Object Model) lets JavaScript change HTML/CSS dynamically.
document.getElementById("title").textContent = "New Title";
document.querySelector(".box").style.color = "red";
________________________________________
**10. ES6+ Features**
•	Template literals: `Hello ${name}`
•	Destructuring:
const {name, age} = person;
•	Spread/Rest operator: ...
•	Default parameters, Classes, Modules (import/export)
________________________________________
**🔵 Advanced JavaScript**
1. **Scope**
•	Global Scope – accessible everywhere
•	Function Scope – var variables
•	Block Scope – let, const variables
________________________________________
2. **Hoisting**
Variables and functions are moved to top of scope during execution:
console.log(x); // undefined
var x = 5;
________________________________________
3. **Closures**
A function remembers its lexical scope even when executed outside:
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  }
}
const count = outer();
console.log(count()); // 1
console.log(count()); // 2
________________________________________
4. ** Asynchronous JS**
•	Callbacks – pass function as argument
•	Promises – .then().catch()
•	Async/Await – cleaner syntax
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}
________________________________________
5. **Prototype & OOP**
JavaScript uses prototype-based inheritance:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};
Or class syntax:
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
________________________________________
6. **Event Loop**
JS is single-threaded but handles async tasks using:
•	Call Stack
•	Callback Queue
•	Microtask Queue
•	Event Loop
________________________________________
7. **Modules**
•	Export/Import to organize code:
// file1.js
export const PI = 3.14;

// file2.js
import { PI } from './file1.js';
console.log(PI);

