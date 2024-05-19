import {plusOne} from '../66.PlusOne';

describe('66. Plus One', () => {
    test.each([
        [
            [1, 2, 3],
            [1, 2, 4],
        ],
        [[9], [1, 0]],
        [[1], [2]],
        [
            [9, 9],
            [1, 0, 0],
        ],
    ])('%s', (i, e) => expect(plusOne(i)).toMatchObject(e));
});
