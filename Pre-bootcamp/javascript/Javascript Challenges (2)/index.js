const bas = {
  p1: {
    name: "Xasan",
    price: 2000,
  },
  p2: {
    name: "Xamda",
    price: 2000,
  },
  p3: {
    name: "Caasha",
    price: 0,
  },
  p4: {
    name: "Nuur",
    price: 1500,
  },
  p5: {
    name: "Maxamed",
    price: 1000,
  },
  p6: {
    name: "Jamaal",
    price: 2000,
  },
};

const shop = {
  i1: {
    item: "Kaluun",
    price: 9000,
    quantity: 10,
  },
  i2: {
    item: "Mongo Sharaab",
    price: 5000,
    quantity: 8,
  },
  i3: {
    item: "Caano Maraaci",
    price: 5000,
    quantity: 20,
  },
  i4: {
    item: "Caano Lis",
    price: 6000,
    quantity: 24,
  },
  i5: {
    item: "Fanta",
    price: 3500,
    quantity: 50,
  },
  i6: {
    item: "Buskud Cake",
    price: 1000,
    quantity: 0,
  },
  i7: {
    item: "Saliid",
    price: 80000,
    quantity: 1,
  },
  i8: {
    item: "Jawaan Sonkor",
    price: 120000,
    quantity: 0,
  },
};

// Forech

Object.entries(bas).forEach(([key, value])=> {
  console.log(value.name)
})

Object.entries(bas).forEach(([key, value])=> {
  if(value.price < 2000){
    console.log(value)
  }
})


