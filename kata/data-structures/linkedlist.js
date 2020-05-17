/** Node to contain data and hold pointer to next Node
 * @param  {any} data
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/** Linkedlist will create lists of nodes that contain any sort of data
 * @param  {Object} head
 */
class LinkedList {
    constructor(head) {
        this.head = head || null;
    }
    /** prepend a node to the front of the list */
    /**
     * @param  {any} data
     */
    prepend(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let temp = this.head;
            this.head = new Node(data);
            this.head.next = temp;
        }
    }
    /** append to the end of the list */
    /**
     * @param  {any} data
     */
    append(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }
    /** Delete a Node by its data value */
    /**
     * @param  {any} data
     */
    deleteNode(data) {
        if (this.head) {
            if (this.head.data === data) {
                if (!this.head.next) {
                    this.head = null;
                } else {
                    this.head = this.head.next;
                }
            } else {
                let current = this.head;
                while (current.next) {

                    if (current.next.data === data) {
                        current.next = current.next.next;
                        return current.next;
                    }
                }
            }
        }
    }
    /** Count up the number of nodes that currently exist. */
    countNodes() {
        let count = 1;
        let current = this.head;
        if (current) {
            while (current.next) {
                current = current.next;
                count++;
            }
            return count;
        }
        return 0;
    }
}