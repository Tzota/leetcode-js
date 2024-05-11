import {removeDuplicates} from '../26.RemoveDuplicatesfromSortedArray';

describe('26. Remove Duplicates from Sorted Array', () => {
    test.each([
        [[1, 1, 2], 2],
        [[], 0],
        [[1], 1],
        [[1, 1, 1], 1],
        [[1, 2, 3, 4], 4],
        [[1, 1, 3, 4], 3],
        [[1, 2, 2, 2], 2],
        [[1, 2, 3, 3], 3],
    ])('%s', (a, e) => expect(removeDuplicates(a)).toBe(e));
});
