/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
If there is no common prefix, return an empty string "".
*/

export function longestCommonPrefix(strs: string[]): string {
    if (strs.length < 2) return strs[0];

    let res = '';
    let pointer = 0;
    while (pointer < 201) {
        for (let i = 1; i < strs.length; i++) {
            const current = strs[i];
            if (current.length === pointer) {
                return res;
            }
            if (current[pointer] !== strs[0][pointer]) {
                return res;
            }
        }
        res += strs[0][pointer];
        pointer++;
    }

    return res;
}
