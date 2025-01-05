export function singleNumber(nums: number[]): number {
    return nums.reduce((acc, v) => acc ^ v, 0);
}
