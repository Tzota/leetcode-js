/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

export function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    // uno
    // return x.toString() === x.toString().split('').reverse().join('');

    // dos
    // function digitByIndex(x: number, index: number): number {
    //     const cutLeft = x % Math.pow(10, index + 1);
    //     const digit = cutLeft / Math.pow(10, index);
    //     return Math.floor(digit);
    // }

    // let i = 0;
    // while (Math.pow(10, ++i) <= x) true;
    // for (let j = 0; j < i / 2; j++) {
    //     const right = digitByIndex(x, j);
    //     const left = digitByIndex(x, i - j - 1);
    //     if (left !== right) return false;
    // }
    // return true;

    // tres
    if (x % 10 == 0) return false;
    let reversedHalf = 0;
    let remains = x;
    while (remains > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (remains % 10);
        remains = Math.floor(remains / 10);
    }
    return reversedHalf == remains || Math.floor(reversedHalf / 10) == remains;
}
