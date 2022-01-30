import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const store = [
    {
      name: "Apple",
      image: "/images/Apples.jpeg",
      description: "Organic Granny Apples 3 Lb Pouch",
      quantity: 15,
      price: 4.96,
    },
    {
      name: "Bananas",
      image: "/images/Bananas.jpeg",
      description: "Organic Bananas, Bunch",
      quantity: 17,
      price: 1.63,
    },
    {
      name: "Grapes",
      image: "/images/Grapes.jpeg",
      quantity: 51,
      description: "Organic Grapes, Bunch",
      price: 5.98,
    },
    {
      name: "Strawberries",
      image: "/images/Strawberries.jpeg",
      description: "Fresh USDA Organic Strawberries, 16 Oz",
      quantity: 105,
      price: 4.98,
    },
    {
      name: "Carrots",
      image: "/images/Carrots.jpeg",
      description: "Organic Whole Carrots, 2 Lb Bag",
      quantity: 92,
      price: 2.06,
    },
    {
      name: "Tomatoes",
      image: "/images/tomatoes.jpeg",
      description: "Organic Grape Tomatoes, 10 oz",
      quantity: 26,
      price: 2.92,
    },
    {
      name: "Avocados",
      image: "/images/avocados.jpeg",
      description: "Organic Medium Hass Avocados, 3-5 Count Bag",
      quantity: 66,
      price: 4.96,
    },
  ];

  return (
    <main className="bg-gray-50 h-screen w-screen">
      <Header />
      <section id="content" className="mt-10 mx-8 p-5 bg-gray-100 rounded-lg">
        <div className="">
          <h1 className="text-3xl text-green-500 font-bold mb-2">Products</h1>
          <hr />
        </div>
        <div
          id="products-list"
          className="grid sm:grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mt-3"
        >
          {store.map((product) => {
            return (
              <Product
                title={product.name}
                description={product.description}
                price={product.price}
                img={product.image}
                quantity={product.quantity}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
