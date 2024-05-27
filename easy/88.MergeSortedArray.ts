export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = nums1.length - 1;
    let p1 = m - 1;
    let p2 = n - 1;
    while (i >= 0 && p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
        i--;
    }
}
