

function reverseWords(string) {
    const splitStr = string.split(" ")
    let newArr = []

    for (let str of splitStr) {
        str = str.split('').reverse().join('')
        str = str.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        newArr.push(str)
    }

    return newArr.join("")
}

const input1 = "Jenius cara mudah mengatur kehidupan dan keuangan";
const expected1 = "SuinejAracHadumRutagnemNapudihekNadNagnauek"

console.log(reverseWords(input1))
