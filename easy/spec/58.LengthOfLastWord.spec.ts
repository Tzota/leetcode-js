import {lengthOfLastWord} from '../58.LengthOfLastWord';

describe('58. Length of Last Word', () => {
    test.each([
        [' ', 0],
        ['1', 1],
        ['1234', 4],
        ['  1234', 4],
        ['1234  ', 4],
        ['1234  567', 3],
        ['  1234  567   ', 3],
    ])('"%s"', (a, e) => expect(lengthOfLastWord(a)).toBe(e));
});
