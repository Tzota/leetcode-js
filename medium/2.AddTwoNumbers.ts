/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

export class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    public static fromArray(arr: number[]): ListNode {
        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    public static toArray(head: ListNode): number[] {
        let arr = [];
        let current: ListNode | null = head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

export const addTwoNumbers = function (l1: ListNode, l2: ListNode): ListNode {
    return new ListNode(0);
};
