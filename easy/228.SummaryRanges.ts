export function summaryRanges(nums: number[]): string[] {
    if (nums.length <= 1) return nums.map(o => o.toString());
    const res = [];
    let curr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            if (nums[i - 1] === curr) {
                res.push(`${nums[i - 1]}`);
            } else {
                res.push(`${curr}->${nums[i - 1]}`);
            }
            curr = nums[i];
        }
    }
    if (nums[nums.length - 1] === curr) {
        res.push(`${curr}`);
    } else {
        res.push(`${curr}->${nums[nums.length - 1]}`);
    }
    return res;
}
