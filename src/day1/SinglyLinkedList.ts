export default class SinglyLinkedList<T> {
    public length: number;

    

    constructor() {
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}

/* (A) => (B) => (C) => (D) 

node<T> //container
val: T
next?: Node<T>
prev?: Node<T> //doubly linked list

O(1) insertion and deletion
*/