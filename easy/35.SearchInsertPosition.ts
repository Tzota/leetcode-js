export function searchInsert(nums: number[], target: number) {
    let start = 0;
    let end = nums.length - 1;

    let mid = 0;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        // console.log({start, end, mid});

        if (nums[mid] === target) {
            return mid;
        }

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    if (nums[mid] < target) {
        return mid + 1;
    }

    return mid;
}

// 0, 3
// 1
// 3 < target
// 1, 3
// p = 2, n = 5
// 5 < target
// 2, 3
// 2 + 0
