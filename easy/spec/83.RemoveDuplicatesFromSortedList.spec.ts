import {ListNode} from '~/domain/structures/ListNode';
import {deleteDuplicates} from '../83.RemoveDuplicatesFromSortedList';

describe('83. Remove Duplicates from Sorted List', () => {
    test.each([
        [ListNode.fromArray([1, 2, 2]), [1, 2]],
        [ListNode.fromArray([1, 1, 2, 3, 4, 4]), [1, 2, 3, 4]],
        [ListNode.fromArray([1, 1, 2]), [1, 2]],
    ])('%s', (input, expected) => {
        expect(ListNode.toArray(deleteDuplicates(input!))).toMatchObject(expected);
    });
});
