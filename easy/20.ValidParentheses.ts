export function isValid(str: string): boolean {
    if (str.length % 2 == 1) return false;

    const left = ['[', '(', '{'];
    const right = [']', ')', '}'];

    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (left.includes(str[i])) {
            stack.push(str[i]);
        } else {
            const last = stack.pop();
            // @ts-expect-error
            if (left.indexOf(last) !== right.indexOf(str[i])) return false;
        }
    }
    return stack.length === 0;
}
