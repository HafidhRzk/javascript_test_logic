function startUpCompetition(startUpList) {
    // Write your code here
    //** Error Handling
    if (!startUpList || startUpList.length === 0) {
        return "Invalid Data"
    }

    //** Define default value
    let result = []

    //** Logic Loop Data Array dari Startuplist
    for (let i = 0; i < startUpList.length; i++) {
        //** data masuk berupa string "Tikipidia-17-E"
        const dataStr = startUpList[i]
        // console.log("Loop " + i + " : " + dataStr)

        //** Define default value
        let splitedArray = []
        let currentStr = ""

        //** Loop string perhuruf dari "Tikipidia-17-E"
        for (let j = 0; j < dataStr.length; j++) {
            // console.log("Loop perhuruf" + j + " : " + dataStr[j])
            if (dataStr[j] !== "-") {
                currentStr += dataStr[j]
            } else {
                splitedArray.push(currentStr)
                currentStr = ""
            }
            // console.log("String splited " + i + " : " + currentStr)
        }

        if (currentStr === "E") {
            currentStr = "Ecommerce"
        } else if (currentStr === "T") {
            currentStr = "Technology"
        } else if (currentStr === "H") {
            currentStr = "Healthcare"
        } else if (currentStr === "A") {
            currentStr = "Agrotech"
        }

        splitedArray.push(currentStr)

        // console.log("Array splited " + i + " : " + splitedArray)

        //** Result Splited Array = [ "Tikipidia", "17", "Ecommerce" ]
        const nama = splitedArray[0]
        const valuasi = Number(splitedArray[1])
        const bidang = splitedArray[2]

        //** Filter Valuasi Min 14
        if (valuasi >= 14) {
            result.push([nama, valuasi, bidang])
        }
    }

    return result
}

// console.log(startUpCompetition(["Tokped-17-E"]));

// TEST CASE 1
console.log(startUpCompetition());
// Invalid Data

// TEST CASE 2
console.log(startUpCompetition([]));
// Invalid Data

// TEST CASE 3
const indonesia = [
    "Tikipidia-17-E",
    "Bikilipik-08-E",
    "Bhinniki-07-E",
    "BleBle.cim-15-E",
    "Triviliki-16-T",
    "Tikit.cim-12-T",
    "Hilidic-15-H",
    "Siyirbix-17-A",
    "TikingSiyir.ci-16-A",
];
console.log(startUpCompetition(indonesia));
/*
[
  [ 'Tikipidia', 17, 'Ecommerce' ],
  [ 'BleBle.cim', 15, 'Ecommerce' ],
  [ 'Triviliki', 16, 'Technology' ],
  [ 'Hilidic', 15, 'Healthcare' ],
  [ 'Siyirbix', 17, 'Agrotech' ],
  [ 'TikingSiyir.ci', 16, 'Agrotech' ]
]
*/

// TEST CASE 4
let singapore = [
    'Shipee-18-E',
    'Lizidi-19-E',
    'HalalTrip-07-T',
    'verylocaltrip.com-12-T',
    'Doctor Anywhere-14-H',
    'Healint-13-H',
    'SINGROW-19-A',
    'Simplyfresh-09-A',
    'eFeedLink-18-A',
]
console.log(startUpCompetition(singapore))
/*
[
  [ 'Shipee', 18, 'Ecommerce' ],
  [ 'Lizidi', 19, 'Ecommerce' ],
  [ 'Doctor Anywhere', 14, 'Healthcare' ],
  [ 'SINGROW', 19, 'Agrotech' ],
  [ 'eFeedLink', 18, 'Agrotech' ],
]
*/

// TEST CASE 5
let malaysia = [
    'Dropee-17-E',
    'BookDoc-18-H',
    'dahmakan-19-A',
]
console.log(startUpCompetition(malaysia))
/*
[
  [ 'Dropee', 17, 'Ecommerce' ],
  [ 'BookDoc', 18, 'Healthcare' ],
  [ 'dahmakan', 19, 'Agrotech' ],
]
*/