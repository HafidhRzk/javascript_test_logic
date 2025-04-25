function fill(data, value, start, end) {
    console.log("starting value")
    console.log(data, value, start, end);
    console.log("--------------------")
    //** Error Handling jika value kosong
    if (!data || !value) {
        return "Invalid input"
    }

    //** Define default value start end
    if (!start) {
        start = 0;
    }

    if (!end) {
        end = data.length;
    }

    console.log("value after error handling")
    console.log(data, value, start, end);
    console.log("--------------------")

    //** Error Handling jika start lebih besar dari end
    if (start > end) {
        return "Invalid input"
    }

    //** Initial index
    let i = 0;

    //** Function Looping
    while (i < data.length) {
        // console.log("Looping ke: " + i + " - " + data[i]);

        //** Check i apakah diantara start dan end
        if (i >= start && i < end) {
            // console.log("Index " + i + " diantara start dan end");
            data[i] = value;
        } else {
            // console.log("Index " + i + " tidak diantara start dan end");
        }

        //** Increment i
        i++;
    }

    // let z = 0;
    // while (z < data.length) {
    //     console.log("Looping ke: " + z + " - " + data[z]);
    //     z++
    // }
    // console.log("----------------------------------------------");

    // data.map((val, z) => {
    //     console.log("Looping ke: " + z + " - " + val);
    // })
    // console.log("----------------------------------------------");

    // for (let i = 0; i < data.length; i++) {
    //     console.log("Looping ke: " + i + " - " + data[i]);
    // }
    // console.log("----------------------------------------------");

    // data.forEach((val, z) => {
    //     console.log("Looping ke: " + z + " - " + val);
    // })
    // console.log("----------------------------------------------");

    // console.log(i, " Looping selesai");

    //** Done Return data
    return data
}

// console.log(fill(["single", "double", "triple", "quadruple", "quintuple", "sextuple"], "Echo"));

//** Test Case
console.log("Result Case 1: " + fill());
//** 1 Invalid input
console.log("Result Case 2: " + fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"]));
//** 2 Invalid input
console.log("Result Case 3: " + fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4));
//** 3 [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
console.log("Result Case 4: " + fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3));
//** 4 [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
console.log("Result Case 5: " + fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20));
//** 5 [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
console.log("Result Case 6: " + fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1));
//** 6 [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
console.log("Result Case 7: " + fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1));
//** 7 [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
console.log("Result Case 8: " + fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India"));
//** 8 [ 'India', 'India', 'India', 'India', 'India', 'India' ]


