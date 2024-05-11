export function removeDuplicates(nums: number[]) {
    if (nums.length < 2) return nums.length;

    let delta = 1;
    let k = 0;
    do {
        if (nums[k] === nums[k + delta]) {
            delta++;
        } else {
            nums[k + 1] = nums[k + delta];
            k++;
        }
    } while (k + delta < nums.length);

    return k + 1;
}
