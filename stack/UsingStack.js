var stack = require('./stack').stack;

console.log(stack);
console.log(stack.isEmpty());  	// => true

stack.push(6);
stack.push(8);
console.log(stack.peek());     	// => 8

stack.push(11);
console.log(stack.size());		// => 3
console.log(stack.isEmpty());	// => false

stack.push(45);
stack.pop();
stack.pop();
console.log(stack.size());		// => 2
stack.print(); 					// => '6,8,'