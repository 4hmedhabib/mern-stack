import "./App.css";
import Product from "./components/Products/Product";

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
    <div className="flex flex-wrap">
      {store.map((item) => {
        return (
          <Product
            name={item.name}
            imageUrl={item.image}
            quantity={item.quantity}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default App;
