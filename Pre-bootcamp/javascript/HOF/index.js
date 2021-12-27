// HIGH ORDER FUNCTIONS
const companies = [
  {
    name: "Telesom Company",
    category: "Telecomunication",
  },
  {
    name: "Dahabshiil",
    category: "Finance",
  },
  {
    name: "Somtel Company",
    category: "Telecomunication",
  },
  {
    name: "Darasalaam",
    category: "Finance",
  },
];

const numbersOfMultiplication = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const store = [11, 5, 6, 10, 9, 81, 15, 26, 94, 22, 33, 37, 49, 26, 95];

// Maps
// ====
// const namesOfCompanies = companies.map(function (company) {
//   console.log(company.name);
// });

// function multiplicationTable(multiple) {
//   numbersOfMultiplication.map(function (number) {
//     console.log(number * multiple);
//   });
// }

// multiplicationTable(5);

// numbersOfMultiplication.map(function (mohamed) {
//   console.log(mohamed);
// });

// store.map(function (hassan) {
//   console.log(hassan);
// });

// companies.map(function (category) {
//   console.log(category.category);
// });

// const priceBelow10 = store.map(function (price) {
//   return price;
// });

// Filter
// ======

// const belowTwenty = store.filter((price) => {
//   return price <= 20;
// });

// const TelecomComponies = companies.filter((company) => {
//   return company.category === "Telecomunication";
// });

// const belowFive = numbersOfMultiplication.filter((number) => {
//   return number < 5;
// });

// Reduce
// ======

const totalQuantity = store.reduce(function (total, numberOfQuantity) {
  return total + numberOfQuantity;
}, 0);

const totalOfNumbers = numbersOfMultiplication.reduce(function (
  total,
  numberOfTotal
) {
  return total + numberOfTotal;
},
0);

const totalPrice = store.reduce((totalPrice, totalQuantity) => {
  return totalPrice + totalQuantity;
});

// 950

const checkMyProfit = store.reduce((revenue, expenses) => {
  return revenue - expenses;
}, 900);
