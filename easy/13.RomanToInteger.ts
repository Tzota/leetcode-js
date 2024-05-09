/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
 */

export const romanToInt = simpleWay;

function safeWay(s: string): number {
    const map: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1e3,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    const seq: Record<string, [string, string]> = {
        I: ['V', 'X'],
        X: ['L', 'C'],
        C: ['D', 'M'],
    };

    let res = 0;

    const arr = s.split('');
    while (arr.length > 0) {
        const char = arr.shift();
        if (!char) throw new Error('Miracle has happend');
        switch (char) {
            case 'I':
            case 'X':
            case 'C':
                if (arr.length > 0 && seq[char].includes(arr[0])) {
                    const next = arr.shift();
                    res += map[`${char}${next}`];
                } else {
                    res += map[char];
                }
                break;
            default:
                res += map[char];
                break;
        }
    }

    return res;
}

function simpleWay(s: string): number {
    const map: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1e3,
    };

    let res = 0;
    const arr = s.split('');
    while (arr.length) {
        const s = arr.shift();
        if (!s) throw new Error();
        let num = map[s];
        if (arr.length > 0 && map[arr[0]] > num) {
            // @ts-ignore
            res += map[arr.shift()] - num;
        } else {
            res += num;
        }
    }
    return res;
}
