const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8');
const numbersArray = data.split("\n").map(num => parseInt(num, 10)).filter(num => !isNaN(num));

const sortAsc = [...numbersArray].sort(function (a, b) {
    return a - b;
});
const sortDesc = [...numbersArray].sort(function (a, b) {
    return b - a;
});

fs.writeFileSync('sortAsc.txt', JSON.stringify(sortAsc));
fs.writeFileSync('sortDesc.txt', JSON.stringify(sortDesc));