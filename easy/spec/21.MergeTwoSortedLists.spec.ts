import {ListNode} from '~/domain/structures/ListNode';
import {mergeTwoLists} from '../21.MergeTwoSortedLists';

describe('21. Merge Two Sorted Lists', () => {
    test.each(
        [
            [
                [1, 2, 4],
                [1, 3, 4],
                [1, 1, 2, 3, 4, 4],
            ],
            [
                [1, 2, 3],
                [4, 5, 6],
                [1, 2, 3, 4, 5, 6],
            ],
            [
                [4, 5, 6],
                [1, 2, 3],
                [1, 2, 3, 4, 5, 6],
            ],
            [[], [], []],
            [[], [2], [2]],
        ].map(([a, b, e]) => [ListNode.fromArray(a), ListNode.fromArray(b), e]),
    )('%s + %s = %s', (a: ListNode | null, b: ListNode | null, e: number[]) =>
        expect(ListNode.toArray(mergeTwoLists(a, b))).toMatchObject(e),
    );
});
