var queue = require('./queue').queue;

console.log(queue.isEmpty()); // => true
queue.enqueue("John");
queue.enqueue("Jack");
queue.print();				// => 'John,Jack,'
queue.enqueue("Camila");	
queue.print();				// => 'John,Jack,Camila,'
console.log(queue.size()); // => 3
console.log(queue.isEmpty()); // => false
queue.dequeue();
queue.print();				// => 'Jack,Camila,'