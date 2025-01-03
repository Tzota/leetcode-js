export function getRow(rowIndex: number): number[] {
    if (rowIndex > 33) return [];
    if (rowIndex === 0) return [1];

    let prev = [];
    let current = [1];
    let i = 1;
    do {
        prev = current;
        current = [1];
        for (let j = 0; j < i - 1; j++) {
            current.push(prev[j] + prev[j + 1]);
        }
        current.push(1);
        i++;
    } while (i <= rowIndex);

    return current;
}
