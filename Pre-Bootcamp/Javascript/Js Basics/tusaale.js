// Variables
var x = 12;
let y = 14;
const z = 16;
const xyz = x + y + z;

// Rules Of Variables
// * In aanu ahayn javascript keywords
// * In aanad ku bilaabin number
// * Waa inuu noqdaa Meaninfull
// * Waa inaanuu space u dhaxynin kalamda aad ku qeexanayso variables

// Javascript Operators
// ====================

// #1 Arithmetic Operators
// -----------------------

// +  = Addition
// -  = Substraction
// *  = Multiplication
// /  = Division
// %  = Modulus(Divider Remainder)
// ** = Exponentiation
// -- = Decrement
// ++ = Increment

// console.log(16 % 6); // remainder

// console.log(5 ** 4); // Exponentiation

// console.log(x--);
// console.log(x--);

// console.log(x); Decrement

// console.log(x++);

// console.log(x++);

// console.log(x);

// #2 Comparison Operators
// --------------------

// == Equal value
// === Equal type and value
/* != Is not equal value */
/* !== Is not equal type and value */
// > greater then
// >= greater then or equal to
// < less then
// <= less then or equal to\

var num1 = 5;
var num2 = "5";

// console.log(num1 == num2); // true

// console.log(num1 === num2); // false

// console.log(num1 != num2); // false

// console.log(num1 !== num2); // true

var xy = 25;
var xz = 25;

// console.log(xy > xz); // true

// console.log(xy >= xz);

var xc = 13;
var xd = 13;

// console.log(xc < xd); // true

// console.log(xd < xc); // true

// console.log(xd <= 10); // false

// #3 Logical Operators
// -------------------

// && = AND
// || = OR
/* ! = NOT */

var xn = 18;
var xm = 20;

// console.log(xn === 20 && xm === 20); false

// console.log(xn === 18 || xm === 25); true

var isTrue = true;

// console.log(!isTrue);

var isFalse = false;

// console.log(!isFalse);

// Data Types
// ==========

// #1 Primitive Datatype
// =================

// * Numbers : 12, 10, 1, 2,
// * String : "Ahmed Habib", "Mern Stack" , '10'
// * Boolean : true , false
// * Null : Waxba Kuma jiraan
// * Undefined : Wax aan jiran ex: variables

let numbers = 15;

let courseName = "MERN Stack";

let tureOrFalse = false;

// #2 Non-Primitive Datatype
// =========================

// * Funtions
// * Objects
// * Array

// #1 Functions
//----------

// ES5
function name(x, y) {
  console.log("Parmater 1 is ", xy, " Parmater 2 is ", xz);
}

// ES6 = Arrow Function
const nameFunction = (x, y) => {
  console.log(y - x);
};

const addition = (num) => {
  return num * 5;
};

// examples
function sayHello(name) {
  return "Hello mr/mrs " + name;
}

const mo = "Abdirahman";

// Multiplication by 4
const multiBy5 = (value) => {
  return value * 5;
};

// FAHRENHIET TO CELSIUS
// (F − 32) × 5/9

function toCel(feh) {
  return ((feh - 32) * 5) / 9;
}

// #2 Objects
// ----------

const car = {
  name: "Parado",
  color: "black",
  modal: 2009,
  wieght: "1500KG",
  start: () => {
    return "Waa method dhaqaajinaya gaadhiga";
  },
  stop: function () {
    return "Waa method is taajinaya gaadhiga";
  },
};

const laptop = {
  brand: "HP",
  color: "White",
  memory: "1000GB SSD",
  price: "$1500",
  ram: "16GB DDR4",
};

//  1 Challenge = ***
// laptop {
// #1 method Poweron
// #2 method Poweroff
// #3 method playVideo
// }

// 2 Challenge = *****
// properties
// ----------
// name
// color
// legs
// methods
// -------
// method running
// method stop
// method sleep

// #3 Arrays
// ---------

// const vegetable1 = 'Mongo'
// const vegetable2 = 'Lemon'
// const vegetable3 = 'Banana'

// const vegetables = [
//   "Mongo",
//   "Lemon",
//   "Banana",
//   5,
//   "50",
//   laptop,
//   true,
//   function () {
//     return car;
//   },
// ];

// Array Methods

// #1 Pop()
// #2 Push()
// #3 Shift()
// #4 Unshift()
// #5 Splice ()
// #6 Slice()
// #7 Concat()

const khudaar = [
  "Cambe",
  "Tufaax",
  "Muus",
  "Liin Macaan",
  "Cambe Babaay",
  "Liin Dhanaan",
  "Barbarooni",
];

// #1 Pop() Method -> Removes last element from the array
// ---------------
// khudaar.pop();

// #2 Push() Method -> Adds a new element to an array at the end
// khudaar.push("Cinab");
// khudaar.push(105);

// #3 Shift() Method -> Removes first element from the array
// khudaar.shift();
// khudaar.shift();

// #4 Unshift() Method -> Adds a new element to an array at the beginning
// khudaar.unshift("Cinab");
// khudaar.unshift(1111);

// #4 Splice () -> Adds new elements to an array or Removes elements to an array
// khudaar.splice(2, 0, "Liin Macaan", "Cambe Babaay", "Liin Dhanaan", "Barbarooni");

// khudaar.splice(1, 2);

// khudaar.splice(2);

// #5 Slice() Method -> Select elements from the existing array

// let myFav = khudaar.slice(3, 5);

// myFav = khudaar.slice(5, 7);

myFav = khudaar.slice(0, 3);

myLo = khudaar.slice(3, 5);

// console.log("Khudaar Aan Jecelahy : ", myFav);

// #6 Concat() Method -> Creates a new array by merging existing arrays
// let khudaarIigaara = myFav.concat(myLo);
// khudaarIigaara = myLo.concat(myFav);

// console.log("Khudaar Iigaara : ", khudaarIigaara);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const arr1Andarr2 = arr1.concat(arr2);

// console.log("Array 2 is : ", arr2);
// console.log("Array  is : ", arr1Andarr2);

// console.log("Khudaar : ", khudaar);

// IF STATEMENTS
// -------------
// if (7 > 6) {
//   console.log("Way Kala way yihiin");
// }

// if (5 < 10) {
//   console.log("Way isleeg yihiin");
// } else {
//   console.log("Isma leeka");
// }

// if (3 === 4) {
//   console.log("Way is leeg yihiin");
// } else if (3 < 2) {
//   console.log("3 Ayaa Kayar");
// } else if (3 >= 3) {
//   console.log("Way Is leegyiih ama ka waynyahay");
// } else {
//   console.log("Condition is false");
// }

// Qof Suuqa Wax ka iibsanaya
// const zaad = 10;
// const eDahab = 20;
// const keyboard = 15;
// const mouse = 20;
// const laptopFan = 10;

// console.log("Lacagta Zaad + eDahab = ", zaad + eDahab);
// console.log("Lacagta Keyboard + Mouse =", keyboard + mouse);

// if (zaad >= keyboard + mouse) {
//   console.log("Waad Iibsan Kartaa By Zaad");
// } else if (eDahab >= keyboard + mouse) {
//   console.log("Waad Iibsan Kartaa By eDahab");
// } else if (zaad + eDahab >= keyboard + mouse) {
//   console.log("Waad Iibsan Kartaa By Zaad + eDahab");
// } else {
//   console.log("Lacag kugu filan ma haystid");
// }

// Challenge 1
// ---------
// const zaad = 10;
// const eDahab = 20;
// const Evc = 5;
// const Golis = 6;

// // Alaab
// const keyboard = 15;
// const mouse = 20;
// const laptopFan = 10;

const byZaad = 5;
const byEDahab = 10;

const checkSale = (price) => {
  if (byZaad >= price) {
    console.log("Waad iibsan karta by Zaad");
  } else if (byEDahab >= price) {
    console.log("Waad iibsan karta by eDahab");
  } else if (byZaad + byEDahab >= price) {
    console.log("Waad iibsan karta by Zaad + by eDahab");
  } else {
    console.log("Lacag kugu filan ma haysatid");
  }
};

// Challenge 2
// ---------
// const zaad = 10;
// const eDahab = 20;
// const Evc = 5;
// const Golis = 6;
// const bank = 100;

// // Alaab
// const keyboard = 15;
// const mouse = 20;
// const laptopFan = 10;
// const macbookPro = 1500

//HIGHER ORDER FUNCTIONS
// =====================
// 1# Map
// 2# Filter
// 3# Reduce

// #1 Map
// ------
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbersArray.map(function (value) {
//   console.log("Number " + value + " * 2 is ", value * 2);
//   return value;
// });

// MULTIPLICATION FUNCTION

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipleByNum = (number) => {
  return arrayNumbers.map((data) => data * number);
};

const lacag = [
  { name: "Zaad", amount: 20000 },
  { name: "Sahal", amount: 31000 },
];

const funSub = (price) => {
  return lacag.map((money) => {
    return money.amount - price;
  });
};

const namesOfBank = () => {
  return lacag.map((bank) => {
    return bank.name;
  });
};

const Banks = lacag.map((value) => value.name);

// console.log(Banks);

const classB = [
  {
    name: "Mohamed Xasan",
    gender: "Male",
    grade: 30,
  },
  {
    name: "Nimco Jaamac",
    gender: "Female",
    grade: 43,
  },
  {
    name: "Jamaal Liibaan",
    gender: "Male",
    grade: 49,
  },
  {
    name: "Maryam Kaariye",
    gender: "Female",
    grade: 36,
  },
  {
    name: "Haaruun Mohamed",
    gender: "Male",
    grade: 40,
  },
  {
    name: "Layla Xasan",
    gender: "Female",
    grade: 25,
  },
  {
    name: "Cabdilaahi Mohmoud",
    gender: "Male",
    grade: 15,
  },
];

// ClassB All Students Name
// const classBNames = classB.map(function (student) {
//   return student.name;
// });

const classBNames = classB.map((student) => student.name);

// console.log(classBNames);

// ClassB All Students Grade
const classBGrades = classB.map((student) => student.grade);

// console.log(classBGrades);

// #2 Filter
// ---------

// ClassB Only Girls
const classBGirls = classB.filter((student) => {
  return student.gender === "Female";
});

// console.log(classBGirls);

// ClassB Only Boys
const classBBoys = classB.filter((student) => {
  return student.gender === "Male";
});

// console.log(classBBoys);

// ClassB Grade Above 30
const classBAbove30 = classB.filter((student) => student.grade > 30);

// console.log(classBAbove30);

// ClassB Grade Below or Equal 30
const classBBelow30 = classB.filter((student) => student.grade <= 30);

// console.log(classBBelow30);

// #3 Reduce
// ---------
const sumAllGrades = classB.reduce((grade, student) => {
  return grade + student.grade;
}, 0); //238

const sumAllBoysGrade = classBBoys.reduce((grade, student) => {
  return grade + student.grade;
}, 0); // 134

// Challenge return Sum All Girls Grade
// Answer 104

const Rakaab = [
  {
    name: "Xamda Mohamed Yaasiin",
    amount: 5,
    price: 10,
  },
  {
    name: "Kaahin Cali Nuur",
    amount: 8,
    price: 10,
  },
  {
    name: "Jamaal Xaashi Cumar",
    amount: 10,
    price: 10,
  },
];

// Magacyada Rakaabka
// Rakaab ka ay lacagtu ku dhimantahay
// Rakaab ka lacagta wada bixiyay
// Dhamaan Lacagta ay bixiyeen Rakaabku
// Dhamaan Lacagta laga doonayay
// Dhamaan Lacagta Dhiman
// Rakaab walba Lacagta ku dhiman iyo magaciisa

console.log(Rakaab);

// Magacyada Rakaabka

const namesOfPassengers = Rakaab.map((passenger) => {
  return passenger.name;
});

// console.log(namesOfPassengers);

// Rakaab ka ay lacagtu ku dhimantahay
const passengersBelowPrice = Rakaab.filter((passenger) => {
  return passenger.amount < passenger.price;
});

// console.log(passengersBelowPrice);

// Rakaab ka lacagta wada bixiyay

const passengersFullPaid = Rakaab.filter((passenger) => {
  return passenger.amount === passenger.price;
});

// console.log(passengersFullPaid);

// Dhamaan Lacagta ay bixiyeen Rakaabku

const totalAmountOfPassengers = Rakaab.reduce((amount, passenger) => {
  return amount + passenger.amount;
}, 0);

// console.log(totalAmountOfPassengers);

// Dhamaan Lacagta laga doonayay
const totalPriceOfPassengers = Rakaab.reduce((price, passenger) => {
  return price + passenger.price;
}, 0); // 30

// console.log(totalPriceOfPassengers);

// Dhamaan Lacagta Dhiman
// const LacagtaMaqan = totalPriceOfPassengers - totalAmountOfPassengers;

const LacagtaMaqan = Rakaab.reduce((amount, passenger) => {
  return amount - passenger.amount;
}, totalPriceOfPassengers);

// console.log(LacagtaMaqan);

const DetailsOfPassengers = Rakaab.map((passenger) => {
  return {
    fullName: passenger.name,
    price: passenger.price - passenger.amount,
    amount: passenger.amount,
    required: passenger.price,
  };
});

console.log(DetailsOfPassengers);
