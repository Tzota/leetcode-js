import {longestCommonPrefix} from '../14.LongestCommonPrefix';

describe('14. Longest Common Prefix', () => {
    test.each([
        [['flower', 'flow', 'flight'], 'fl'],
        [['dog', 'racecar', 'car'], ''],
        [[''], ''],
        [['test'], 'test'],
        [['', ''], ''],
        [['a', ''], ''],
        [['a', 'b'], ''],
        [['abb', 'ab'], 'ab'],
        [['test', 'test'], 'test'],
    ])('%s', (input, expected) => expect(longestCommonPrefix(input)).toBe(expected));
});
