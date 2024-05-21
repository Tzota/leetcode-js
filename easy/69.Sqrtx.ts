export function mySqrt(x: number): number {
    if (x <= 1) return x;

    let l = 0;
    let r = Math.floor(x / 2);
    let p = 0;

    do {
        p = Math.floor((l + r) / 2);

        if (p * p <= x && (p + 1) * (p + 1) > x) {
            break;
        }

        if (p * p > x) {
            r = p - 1;
        } else {
            l = p + 1;
        }
    } while (l <= r);

    return p;
}
