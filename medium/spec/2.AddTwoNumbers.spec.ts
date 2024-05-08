import {addTwoNumbers, ListNode} from '../2.AddTwoNumbers';

describe('2.AddTwoNumbers', () => {
    it('1', () => {
        const node = addTwoNumbers(ListNode.fromArray([2, 4, 3]), ListNode.fromArray([5, 6, 4]));

        expect(ListNode.toArray(node)).toMatchObject([7, 0, 8]);
    });
    it('2', () => {
        const node = addTwoNumbers(new ListNode(0), new ListNode(0));

        expect(ListNode.toArray(node)).toMatchObject([0]);
    });
    it('3', () => {
        const node = addTwoNumbers(ListNode.fromArray([9, 9, 9, 9, 9, 9, 9]), ListNode.fromArray([9, 9, 9, 9]));

        expect(ListNode.toArray(node)).toMatchObject([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});
