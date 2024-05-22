export function climbStairs(n: number) {
    const memo = new Map<number, number>();

    const calc = (x: number): number => {
        if (x <= 2) return x;

        return memoOrCalc(x - 2) + memoOrCalc(x - 1);
    };

    const memoOrCalc = (x: number): number => {
        if (!memo.has(x)) {
            memo.set(x, calc(x));
        }

        return memo.get(x)!;
    };

    return calc(n);
}
