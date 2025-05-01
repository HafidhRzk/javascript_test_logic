function namaBebas(xyz) {
    return "Hai, aku " + xyz
}

const hobi = (abcd) => {
    return "aku suka " + abcd
}

function hasil(a, b) {
    const name = namaBebas(a)

    const hobby = hobi(b)

    const arr = [
        name,
        hobby
    ]

    const obj = {
        pertama: name,
        kedua: hobby,
    }

    console.log(arr)

    for (const val of arr) {
        console.log("--------For of---------")
        console.log(val)
        console.log("-----------------------")
    }

    for (const val in arr) {
        console.log("--------For in---------")
        console.log(val + " : " + arr[val])
        console.log("-----------------------")
    }

    return name + " " + hobby
}

hasil("budiono", "makan")

// console.log(hasil("budi", "makan"))