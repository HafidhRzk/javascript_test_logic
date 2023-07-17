
const url = "https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript"

function descendingOrder(n) {
    return Number(String(n).split('').sort().reverse().join(''));
}

const input1 = 42145;
const expected1 = 54421;

const input2 = 145263
const expected2 = 654321

const input3 = 123456789 
const expected3 = 987654321

console.log(descendingOrder(input1))