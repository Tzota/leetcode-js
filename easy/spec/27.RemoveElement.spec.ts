import {removeElement} from '../27.RemoveElement';

describe('27 Remove Element', () => {
    test.each([
        [[3, 2, 2, 3], 3, {val: 2, a: [2, 2, 0, 0]}],
        [[0, 1, 2, 2, 3, 0, 4, 2], 2, {val: 5, a: [0, 1, 4, 0, 3, 0, 0, 0]}],
        [[], 7, {val: 0, a: []}],
        [[3], 3, {val: 0, a: []}],
        [[3, 3], 3, {val: 0, a: []}],
        [[1, 3, 3], 3, {val: 1, a: [1]}],
        [[1, 2, 4], 3, {val: 3, a: [1, 2, 4]}],
    ])('%s', (input, k, e) => {
        expect(removeElement(input, k)).toBe(e.val);
        for (let i = 0; i < e.a.length; i++) {
            expect(input[i] === e.a[i]);
        }
    });
});
