function namaBebas(xyz) {
    return "Hai, aku " + xyz
}

const hobi = (abcd) => {
    return "aku suka " + abcd
}

function hasil(a, b) {
    const name = namaBebas(a)

    const hobby = hobi(b)

    return name + " " + hobby
}

console.log(hasil("budi", "makan"))