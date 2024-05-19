export function lengthOfLastWord(s: string): number {
    // from right to the left
    // todo

    // from left to the right
    let i = -1;
    let j = 0;
    let n = 0;
    while (j <= s.length) {
        if (s[j] === ' ' || j === s.length) {
            if (j - i > 1) {
                n = j - i - 1;
            }
            i = j;
        }
        j++;
    }
    return n;
}
