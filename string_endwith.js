
const url = "https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript"

function solution(str, ending) {
    return str.endsWith(ending);
}

const input1 = {
    a: "abcde",
    b: "cde"
};
const expected1 = true;

const input2 = {
    a: "abcde",
    b: "abc"
}
const expected2 = false

console.log(solution(input1.a, input1.b))