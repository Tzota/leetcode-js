export function strStr(haystack: string, needle: string) {
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                continue;
            }
        }
        if (found) {
            return i;
        }
    }

    return -1;
}
