export class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    public static fromArray(arr: number[]): ListNode | null {
        if (arr.length == 0) return null;

        let head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    public static toArray(head: ListNode | null): number[] {
        let arr = [];
        let current: ListNode | null = head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    public toString() {
        let p: ListNode | null = this;

        let res = '';
        do {
            res = `${res}${res && '->'}${p.val}`;
            p = p.next;
        } while (p);

        return res;
    }
}
