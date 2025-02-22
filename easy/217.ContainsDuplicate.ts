export function containsDuplicate(nums: number[]): boolean {
    const sorted = nums.sort();
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] === sorted[i + 1]) {
            return true;
        }
    }
    return false;
}
