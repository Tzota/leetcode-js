export function generate(numRows: number): number[][] {
    if (numRows <= 0) return [];

    const res: number[][] = [[1]];

    if (numRows == 1) return res;

    for (let i = 1; i < numRows; i++) {
        const curr: number[] = [1];
        res.push(curr);
        const prev = res[i - 1];
        // console.log({prev});
        for (let j = 0; j < prev.length - 1; j++) {
            curr.push(prev[j] + prev[j + 1]);
        }

        curr.push(1);
    }

    // console.log(res);

    return res;
}
