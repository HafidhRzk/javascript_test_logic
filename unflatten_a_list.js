
const url = "https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/javascript"

function unflatten1(flatArray) {
    let data = []
    let arr = []
    let over = 0

    for (let numb of flatArray) {
        if (numb < 3 && arr.length === 0) {
            data.push(numb)
        } else {
            if (arr.length > 0) {
                if (arr.length < over) {
                    arr.push(numb)
                    if (arr.length === over) {
                        data.push(arr)
                        arr = []
                    }
                } else {
                    data.push(numb)
                }
            } else {
                over = numb
                arr.push(numb)
            }
        }
    }

    if (arr.length > 0) {
        data.push(arr)
    }

    return data
}

function unflatten2(arr) {
    var newarr = [];
    while (arr.length) {
        newarr.push(arr[0] < 3 ? arr.shift() : arr.splice(0, arr[0]));
        console.log(newarr, "ini")
    }
    return newarr;
};

const input1 = [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3];
const expected1 = [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]];

const input2 = [3, 5, 2, 1];
const expected2 = [[3, 5, 2], 1];

const input3 = [3, 1, 1, 3, 1, 1]
const expected3 = [[3, 1, 1], [3, 1, 1]]

const input4 = [5, 7, 8, 3, 2, 6, 3, 1]
const expected4 = [[5, 7, 8, 3, 2], [6, 3, 1]]

console.log(unflatten1(input4))
console.log(unflatten2(input4))