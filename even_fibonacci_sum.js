

const url = "https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript"

function fibonacci(max) {
    // Your code goes here
    let temp, sum = 0, a = 0, b = 1;
    while (b < max) {
        if (b % 2 === 0) {
            sum += b;
        };
        temp = a;
        a = b;
        b += temp;
    };
    return sum;
}

const input1 = 0
const expected1 = 0

const input2 = 33
const expected2 = 10

const input3 = 25997544
const expected3 = 19544084

console.log(fibonacci(input3))