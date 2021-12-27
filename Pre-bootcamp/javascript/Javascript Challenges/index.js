const bas = [
  {
    name: "Xasan",
    price: 2000,
  },
  {
    name: "Xamda",
    price: 2000,
  },
  {
    name: "Caasha",
    price: 0,
  },
  {
    name: "Nuur",
    price: 1500,
  },
  {
    name: "Maxamed",
    price: 1000,
  },
  {
    name: "Jamaal",
    price: 2000,
  },
];

const shop = [
  {
    item: "Kaluun",
    price: 9000,
    quantity: 10,
  },
  {
    item: "Mongo Sharaab",
    price: 5000,
    quantity: 8,
  },
  {
    item: "Caano Maraaci",
    price: 5000,
    quantity: 20,
  },
  {
    item: "Caano Lis",
    price: 6000,
    quantity: 24,
  },
  {
    item: "Fanta",
    price: 3500,
    quantity: 50,
  },
  {
    item: "Buskud Cake",
    price: 1000,
    quantity: 0,
  },
  {
    item: "Saliid",
    price: 80000,
    quantity: 1,
  },
  {
    item: "Jawaan Sonkor",
    price: 120000,
    quantity: 0,
  },
];

// totalPriceOfAllQuanitity
// const total = shop.reduce(function (total, price) {
//   return total + price;
// });

let solution;

solution = bas.map((person) => person.name);

solution = bas.reduce((total, persons) => total + persons.price, 0);

solution = bas.filter((persons) => persons.price < 2000);

solution = bas.filter((persons) => persons.price === 2000);

const peopleUnpaidFull = bas.filter((persons) => persons.price < 2000);

solution = peopleUnpaidFull.reduce(
  (total, persons) => total + persons.price,
  1000
);

// Shop

solution = shop.reduce((total, items) => total + items.quantity, 0);

solution = shop.length;

const items = [];

solution = shop.map((it) => {
  items.push(it);
});

solution = shop.filter((items) => items.quantity > 20);

solution = shop.reduce(
  (total, items) => total + items.price * items.quantity,
  0
);

const availableItems = shop.filter((items) => items.quantity > 0);

solution = availableItems.reduce(
  (total, items) => total + items.price * items.quantity,
  0
);

solution = shop.filter((items) => items.quantity < 1);

solution = shop.filter((items) => items.quantity > 0);

console.log(solution);
