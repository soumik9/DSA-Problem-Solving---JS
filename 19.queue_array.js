class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(el) {
        this.items.push(el);
    }

    dequeue() {
        return this.items.shift();

        // * by using shift linear time complexity which is not favorable
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(20);
queue.enqueue(10);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek()); // the first element
queue.print();