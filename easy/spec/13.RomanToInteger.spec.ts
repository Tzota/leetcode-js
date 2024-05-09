import {romanToInt} from '../13.RomanToInteger';

describe('13. Roman To Integer', () => {
    test.each([
        ['III', 3],
        ['LVIII', 58],
        ['MCMXCIV', 1994],
        ['IV', 4],
        ['XIV', 14],
        ['IX', 9],
        ['XIX', 19],
        ['XL', 40],
        ['CXL', 140],
        ['XC', 90],
        ['CXC', 190],
        ['CD', 400],
        ['MCD', 1400],
        ['CM', 900],
        ['MCM', 1900],
    ])('%s', (a, expected) => expect(romanToInt(a)).toBe(expected));
});
