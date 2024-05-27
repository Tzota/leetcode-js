import {merge} from '../88.MergeSortedArray';

describe('88. Merge Sorted Array', () => {
    test.each([
        [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
        [[1], 1, [], 0, [1]],
        [[0], 0, [1], 1, [1]],
        [[0, 0], 0, [1, 2], 2, [1, 2]],
    ])('%s %s', (nums1, m, nums2, n, e) => {
        merge(nums1, m, nums2, n);
        expect(nums1).toMatchObject(e);
    });
});
