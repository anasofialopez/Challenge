//COLAS 04
class person {
    constructor(name, time) {
        this.name = name;
        this.time = time;
						}
	}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
				return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }
		
		isEmpty (){
				return this.queue.length===0;
		}


    print() {
        return this.queue;
    }
}

// Create book objects
const person1 = new person('Andres Aguilar', '11:00');
const person2 = new person('Luisa Chima', '12:30');
const person3 = new person('Manuel Florez', '1:00');

// Create a new stack
const queue = new Queue();

// Add the book objects to the stack
Queue.enqueue(book1);
Queue.enqueue(book2);
Queue.enqueue(book3);

queue.print(); // Print the stack of books
console.log('queue size:', queue.size());

const dequeueperson = queue.dequeue();
console.log('dequeue person:', dequeueperson);
console.log('Queue size after dequeue:', queue.size());

const peekedperson = queue.peek();
console.log('Peeked person:', peekedperson);
