type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        console.log(this.head, this.tail);
        this.tail.next = node;
        this.tail = node;

        if (this.length === 1) {
            this.head = node;
        }
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--; //keep track of length of array

        const head = this.head; //store current head in head before removing it from the queue
        this.head = this.head.next; //update head to next node
        //free
        // head.next = undefined;

        return head.value; //return head
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
