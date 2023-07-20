

const url = "https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript"

function spinWords(string) {
    //TODO Have fun :)
    const splitStr = string.split(" ")
    let newArr = []

    for (let str of splitStr) {
        if (str.length > 4) {
            str = str.split('').reverse().join('')
        }
        newArr.push(str)
    }

    return newArr.join(" ")
}


const input1 = "Welcome";
const expected1 = "emocleW"

const input2 = "This is a test"
const expected2 = "This is a test"

const input3 = "This is another test"
const expected3 = "This is rehtona test"

console.log(spinWords(input3))
