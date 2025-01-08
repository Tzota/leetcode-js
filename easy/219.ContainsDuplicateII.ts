export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (map.has(element)) {
            const prevIndex = map.get(element)!;
            if (i - prevIndex <= k) {
                return true;
            }
        }
        map.set(element, i);
    }

    return false;

    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < Math.min(i + k + 1, nums.length); j++) {
    //         if (nums[i] === nums[j]) {
    //             return true;
    //         }
    //     }
    // }
    // return false;
}
