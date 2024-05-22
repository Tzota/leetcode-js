import {climbStairs} from '../70.ClimbingStairs';

describe('70. Climbing Stairs', () => {
    test.each([
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
    ])('%s', (i, e) => expect(climbStairs(i)).toBe(e));
});
