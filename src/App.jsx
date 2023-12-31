import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img className="bg-img" src="./pizza-hero.jpg" alt="Pizza" />
      <h1>Pizza Shop</h1>
      <p>Pizzas served: {count}</p>
      <button onClick={() => setCount(count + 1)}>order</button>
    </>
  );
}

export default App;
