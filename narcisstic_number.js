

const url = "https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript"

function narcissistic(value) {
    // Code me to return true or false
    const number = String(value).split("").map(Number)
    const n = number.length

    let result = 0;

    for (let data of number) {
        result += data ** n
    }

    const conc = result === value ? true : false;

    return conc
}

const input1 = 7;
const expected1 = true;

const input2 = 153
const expected2 = true

const input3 = 122
const expected3 = false

const input4 = 487
const expected4 = false

console.log(narcissistic(input1))