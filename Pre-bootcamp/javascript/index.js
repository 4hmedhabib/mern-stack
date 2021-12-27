var myPhone = 100000007;

var myPhone = "100000008";

var myPhone = "ahmed";

myPhone = 65465465;

// console.log(myPhone);

// let
let myName = "hebel";

myName = "hebel hebel";

// console.log(myName);

// const
const myClass = "Mern Stack";

// myClass = "Full Stack";

// Example

let maxamedAxmed = "4777777";

// console.log(myClass);

// Data Types
// ==========
// String
// Number
// Boolean
// Undefined
// Null

const string = "5000";

// console.log(string);

// Number
const myNum = "5";
// console.log(myNum);

// Boolean
// false or true
const iAmFemale = false;

const iAmMale = true;

// console.log(iAmMale);

// Undefined
let x;

console.log(x);

// Null
let y = [];

// Arithmatic Operators
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// Addition & Sub
let z = 5;
let k = 8;

// const sol = z + k;

// const solution = k - z;

console.log(z + k);
console.log(k - z);

// Multiplication
let i = 5;
let p = 6;

console.log(p * i);

// Division
let o = 9;
let l = 3;

console.log(o / l);

// Modulus Or Remainder
let q = 20;

console.log(q % 6);

// Decrement & Increment
// ======================
q = 10;
// console.log(q++);
// console.log(q--);

// for (let i = 1; q >= i; i++) {
//   console.log(i);
// }

// for (let i = 10; q <= i; i--) {
// console.log(i);
//   }

// Exponentiation
let m = 10 ** 2;

// console.log(m);

// ==================================================
// Functions
// function addition(x, y, z) {
//   return x + y / z;
// }

function sayHello(name) {
  return "Hello, Mr " + name;
}

function eDahab(name, number) {
  // console.log(
  //   "Ma hubtaa inaad u dirto " + name + " oo number kiisu yahay " + number
  // );
}

// const Dire = sendZaad("Xamse Cali", 6545456454);

// const LooDorp = recieveZaad("Hamda Yuusuf", 654654654);

// Objects
const car = {
  model: "Toyata",
  color: "white",
  year: 2019,
  name: "Mark X",
  mechine: "VTA",
  running: function start() {
    return this.name + " " + this.model + " Wuu dhaqaaqay gaadhigu";
  },
  stop: function stopp() {
    return "Wuu istaagay";
  },
};

const person = {
  firstname: "Mohamed",
  lastname: "Axmed Mohamed",
  fullName: function myName() {
    return this.firstname + " " + this.lastname;
  },
};

// Arrays
const myNicknames = ["ahmed", "hebel", "hebel"];

// console.log(myNicknames);

// IF Statement
let xy = 5;
let xz = 6;

if (xy === xz) {
  console.log("Way isleegyihiin");
} else {
  console.log("Isma Leeka");
}

const hadhaa = 90000;

// lacag <= hadhaa
//

function zaad2(lacag) {
  if (lacag === hadhaa) {
    console.log("Lacag waa dirtay");
  } else {
    console.log("Lacag kugu ma jirto");
  }
}

let number = 5;

if (number === 5) {
  console.log("uu ka wayn yahay");
} else if (number > 10) {
  console.log("Uu Ka yar yahay");
} else {
  console.log("Maa ha sax");
}

let zaadHadhaa = 50000;
let eDahabHadhaa = 90000;
let totalHadhaa = zaadHadhaa + eDahabHadhaa;

function item(price) {
  if (zaadHadhaa >= price) {
    console.log("Lacagtu way kugu filan tahay By Zaad");
  } else if (price <= eDahabHadhaa) {
    console.log("Lacagtu way kugu filan tahay By eDahab");
  } else if (price <= totalHadhaa) {
    console.log("Lacagtu way kugu filantahay By Zaad + eDahab");
  } else {
    console.log("Kuguma Filna");
  }
}
