import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [deliveredPizzas, setDeliveredPizzas] = useState("");

  const orderPizza = () => {
    setCount(count + 1);
    let result = Math.random() < 0.9 ? "🍕" : "❌";
    setDeliveredPizzas(deliveredPizzas + result);
  };

  return (
    <>
      <img className="bg-img" src="./pizza-hero.jpg" alt="Pizza" />
      <header>
        <img className="logo" src="./pizza-shop-logo.png"></img>
        <h1>Pizza Shop</h1>
      </header>
      <main>
        <p>
          Welcome to the ultimate online pizza shop. Use our award winning{" "}
          <i>Pizza Shop™</i> application to order your pizzas on your phone or
          laptop and they magically appear.
        </p>
        <h2>Love it guarantee</h2>
        <p>
          At the Pizza Shop we always make it right! If we don't deliver a
          fresh, perfectly cooked, pizza to your device in under 500
          milliseconds we will bake you another pizza <b>add</b> refund your
          money.
        </p>
        <h2>Order</h2>
        <button onClick={orderPizza}>Buy now!</button>
        <div className="delivery-box">{deliveredPizzas}</div>
      </main>
      <footer>
        <p className="count-text">{count} pizzas served</p>
      </footer>
    </>
  );
}

export default App;
