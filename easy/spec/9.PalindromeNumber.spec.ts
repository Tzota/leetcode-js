import {isPalindrome} from '../9.PalindromeNumber';

describe('9. Palindrome Number', () => {
    test.each([
        [121, true],
        [-121, false],
        [123321, true],
        [1234321, true],
        [10, false],
        [1, true],
        [2 ** 31 - 1, false],
    ])('%i', (num, expected) => expect(isPalindrome(num)).toBe(expected));
});
