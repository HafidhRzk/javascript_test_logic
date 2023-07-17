

const url = "https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript"

function addBinary(a,b) {
    let aa = a.toString(2)
    let bb = b.toString(2)
    let carry = 0;
    const res = [];
    let l1 = aa.length, l2 = bb.length;
    for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
        let a = 0 <= i ? Number(aa[i]) : 0,
            b = 0 <= j ? Number(bb[j]) : 0;
        res.push((a + b + carry) % 2);
        carry = 1 < a + b + carry;
    };
    if (carry) {
        res.push(1);
    }
    return res.reverse().join('');
}

const input1 = {
    a: 1,
    b: 1
};
const expected1 = 10;

const input2 = {
    a: 5,
    b: 9
}
const expected2 = 1110

console.log(addBinary(input2.a, input2.b))