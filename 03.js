//PILAS 03
class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(book) {
        this.stack.push(book);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

// Create book objects
const book1 = new Book('Libro A', '001', 'Pepito', 'Editorial X');
const book2 = new Book('Libro B', '002', 'Juanito', 'Editorial Y');
const book3 = new Book('Libro C', '003', 'Maria', 'Editorial Z');

// Create a new stack
const stack = new Stack();

// Add the book objects to the stack
stack.push(book1);
stack.push(book2);
stack.push(book3);

stack.print(); // Print the stack of books
console.log('Stack size:', stack.size());

const poppedBook = stack.pop();
console.log('Popped book:', poppedBook);
console.log('Stack size after pop:', stack.size());

const peekedBook = stack.peek();
console.log('Peeked book:', peekedBook);
