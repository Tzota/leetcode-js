export function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0;

    let max = 0;
    let i = 0;
    let j = 1;
    while (j <= prices.length && i < prices.length) {
        const diff = prices[j] - prices[i];
        if (diff > max) {
            max = diff;
            j++;
        } else {
            if (prices[j] < prices[i]) {
                i = j;
                j = i + 1;
            } else {
                j++;
            }
        }
    }
    return max;
}
