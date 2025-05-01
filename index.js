// MAKAN SKUY

function mergeOrder(data) {
  // Your code here
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let iterasi = data[i];
    // console.log(iterasi);
    let arrayOrder = [];
    let order = iterasi.orders

    for (let j = 0; j < order.length; j++) {
      let iterasiOrder = order[j];
      // console.log(iterasiOrder);
      arrayOrder.push(iterasiOrder[0], iterasiOrder[1]);
    }
    result.push(arrayOrder);
    // console.log(arrayOrder);

  }
  return result
}

// console.log(
//   mergeOrder([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );

/*
[
 [
   'Burger',   200,
   'Kentang',  130,
   'CocaCola', 400,
   'IceCream', 186
 ],
 [
   'Ayam',     126,
   'CocaCola', 206,
   'Burger',   368,
   'IceCream', 80
 ],
 [ 'Ayam', 85, 'CocaCola', 150, 'Burger', 450, 'Kentang', 20 ],
]
*/

function calculateTotalSales(data) {
  let priceList = [
    { name: "Burger", price: 25000 },
    { name: "Kentang", price: 1000 },
    { name: "Ayam", price: 17000 },
    { name: "CocaCola", price: 7000 },
    { name: "IceCream", price: 3000 },
  ];
  // Your code here

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let iterasi = data[i];
    let totalHarga = 0;
    // console.log(iterasi);
    for (let j = 0; j < iterasi.length; j += 2) {
      let menu = iterasi[j];
      let jumlah = iterasi[j + 1];
      // console.log(menu);

      for (const produk of priceList) {
        if (produk.name === menu) {
          totalHarga += produk.price * jumlah
        }
      }
    }
    result.push(totalHarga)
  }
  return result
}

// console.log(
//   calculateTotalSales([
//     ["Burger", 200, "Kentang", 130, "CocaCola", 400, "IceCream", 186],
//     ["Ayam", 126, "CocaCola", 206, "Burger", 368, "IceCream", 80],
//     ["Ayam", 85, "CocaCola", 150, "Burger", 450, "Kentang", 20],
//   ])
// );
// [ 8488000, 13024000, 13765000 ]

function calculateTotalVote(data) {
  // Your code here
  let result = [];
  for (let i = 0; i < data.length; i++) {
    // let iterasi = data[i];
    // let dataReview = iterasi.reviewers
    // let hitungVoting = (dataReview * 25) / 100
    // console.log(dataReview);

    // result.push(hitungVoting)
    result.push(data[i].reviewers * 25 / 100)
  }
  return result
}

// console.log(
//   calculateTotalVote([
//     {
//       restaurant: "MekDun",
//       orders: [
//         ["Burger", 200],
//         ["Kentang", 130],
//         ["CocaCola", 400],
//         ["IceCream", 186],
//       ],
//       reviewers: 140,
//     },
//     {
//       restaurant: "Lawmore",
//       orders: [
//         ["Ayam", 126],
//         ["CocaCola", 206],
//         ["Burger", 368],
//         ["IceCream", 80],
//       ],
//       reviewers: 260,
//     },
//     {
//       restaurant: "Burger Queen",
//       orders: [
//         ["Ayam", 85],
//         ["CocaCola", 150],
//         ["Burger", 450],
//         ["Kentang", 20],
//       ],
//       reviewers: 80,
//     },
//   ])
// );
// [ 35, 65, 20 ]

function makanSkuy(data) {
  // Your code here
  if (data === undefined) {
    return 'Invalid Data'
  }
  if (data.length === 0) {
    return 'Tidak ada order, order dulu ngab!'
  }

  //** Cari Total Sales dan Total Vote
  let result = {}

  //** Merge order sebelum total sales
  const merger = mergeOrder(data)

  //** Cari Total Sales
  const totalSales = calculateTotalSales(merger)

  //** Cari Total Vote
  const totalVote = calculateTotalVote(data)

  let OneStar = []
  let TwoStar = []
  let ThreeStar = []
  for (let i = 0; i < data.length; i++) {
    if (totalSales[i] > 20000000 && totalVote[i] > 100) {
      ThreeStar.push(data[i].restaurant)
    } else if (totalSales[i] >= 10000000 && totalSales[i] <= 20000000 && totalVote[i] >= 50 && totalVote[i] <= 100) {
      TwoStar.push(data[i].restaurant)
    } else {
      OneStar.push(data[i].restaurant)
    }
  }

  if (OneStar.length !== 0) {
    result.OneStar = OneStar
  }

  if (TwoStar.length !== 0) {
    result.TwoStar = TwoStar
  }

  if (ThreeStar.length !== 0) {
    result.ThreeStar = ThreeStar
  }

  return result
}

// TEST CASES

// console.log(makanSkuy()); // Invalid Data!
// console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

let order1 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 126],
      ["CocaCola", 206],
      ["Burger", 368],
      ["IceCream", 80],
    ],
    reviewers: 260
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 380],
      ["CocaCola", 246],
      ["Burger", 166],
      ["Kentang", 190],
    ],
    reviewers: 292
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412
  }
]

console.log(makanSkuy(order1))
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],
  TwoStars: [ 'Lawmore', 'Pendys' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/

let order2 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 468],
      ["IceCream", 280],
    ],
    reviewers: 460
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 580],
      ["CocaCola", 246],
      ["Burger", 366],
      ["Kentang", 290],
    ],
    reviewers: 432
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412
  }
]

console.log(makanSkuy(order2))
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],        
  ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
}
*/
let order3 = [
  {
    restaurant: "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 13],
      ["CocaCola", 40],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant: "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 68],
      ["IceCream", 280],
    ],
    reviewers: 84
  },
  {
    restaurant: "Burger Queen",
    orders: [
      ["Ayam", 80],
      ["CocaCola", 10],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant: "Pendys",
    orders: [
      ["Ayam", 58],
      ["CocaCola", 26],
      ["Burger", 36],
      ["Kentang", 20],
    ],
    reviewers: 20
  },
  {
    restaurant: "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 51],
      ["Burger", 69],
      ["Kentang", 74],
    ],
    reviewers: 120
  }
]

console.log(makanSkuy(order3))
/*
{
  OneStar: [ 'MekDun', 'Lawmore', 'Burger Queen', 'Pendys', 'Karl Sr' ]
}
*/

module.exports = {
  mergeOrder,
  calculateTotalSales,
  calculateTotalVote,
  makanSkuy,
};
