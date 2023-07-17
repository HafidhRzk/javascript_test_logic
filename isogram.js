
const url = "https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript"

function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length
}

const input1 = "Dermatoglyphics";
const expected1 = true;

const input2 = "isogram"
const expected2 = true

const input3 = "aba"
const expected3 = false

const input4 = "moOse"
const expected4 = false

const input5 = "isIsogram"
const expected5 = false

console.log(descendingOrder(input1))