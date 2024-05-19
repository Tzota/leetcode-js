export function addBinary(a: string, b: string): string {
    let overflow = 0;
    let p1 = a.length - 1;
    let p2 = b.length - 1;
    let res = '';

    const add = (d1: number, d2: number) => {
        const res = d1 + d2;
        if (res == 2) {
            return [1, 0];
        }
        return [0, res];
    };

    do {
        let [o, d] = add(p1 >= 0 ? Number(a[p1]) : 0, p2 >= 0 ? Number(b[p2]) : 0);

        if (o) {
            d = d || overflow;
            overflow = o;
        } else {
            [overflow, d] = add(overflow, d);
        }
        res = d.toString() + res;

        p1--;
        p2--;
    } while (p1 >= 0 || p2 >= 0);

    if (overflow) {
        res = overflow.toString() + res;
    }

    return res;
}
