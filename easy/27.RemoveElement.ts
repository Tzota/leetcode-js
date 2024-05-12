export function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) return 0;

    let k = 0;
    let j = 0;

    do {
        nums[k] = nums[j];
        if (nums[k] !== val) {
            k++;
        }
        j++;
    } while (j < nums.length);

    return k;
}
