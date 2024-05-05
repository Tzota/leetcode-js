export const twoSum = function (nums: number[], target: number): number[] {
    // n^2
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    const diffs = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (diffs.has(num)) {
            return [i, diffs.get(num)!].sort();
        }

        const diff = target - num;
        if (!diffs.has(diff)) {
            // "each input would have exactly one solution" - so this is definitely not the case
            diffs.set(diff, i);
        }
    }

    throw new Error('???');
};
