import {mySqrt} from '../69.Sqrtx';

describe('69. Sqrt(x)', () => {
    test.each([
        [0, 0],
        [1, 1],
        [49, 7],
        [48, 6],
        [50, 7],
    ])('%s', (i, e) => expect(mySqrt(i)).toBe(e));
});
