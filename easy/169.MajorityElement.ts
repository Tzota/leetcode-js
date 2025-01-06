export function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = 0;

    nums.forEach(num => {
        if (count === 0) {
            candidate = num;
            count++;
        } else {
            if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
        console.log(num, candidate, count);
    });

    return candidate;

    // naive
    // const map: Record<number, number> = {};
    // nums.forEach(num => {
    //     map[num] = (map[num] || 0) + 1;
    // });

    // const majPair = Object.entries(map).find(([_, v]) => v > nums.length / 2)!;

    // return Number(majPair[0]);
}
