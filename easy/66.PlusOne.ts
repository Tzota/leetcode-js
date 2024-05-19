export function plusOne(digits: number[]): number[] {
    let overflow = 1;
    let i = digits.length - 1;
    do {
        const res = digits[i] + overflow;
        digits[i] = res % 10;
        overflow = Math.floor(res / 10);
        i--;
    } while (i >= 0 && overflow > 0);

    if (overflow) {
        digits.unshift(overflow);
    }

    return digits;
}
