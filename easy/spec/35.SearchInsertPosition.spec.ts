import {searchInsert} from '../35.SearchInsertPosition';

describe('35. Search Insert Position', () => {
    test.each([
        [[1, 3, 5, 6], 5, 2],
        [[1, 3, 5, 6], 2, 1],
        [[1, 3, 5, 6], 7, 4],
    ])('%s %s', (a, b, e) => expect(searchInsert(a, b)).toBe(e));
});
