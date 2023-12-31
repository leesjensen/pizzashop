import { useState } from "react";

export function Order({ onOrder }) {
  const [deliveredPizzas, setDeliveredPizzas] = useState("");

  const orderPizza = () => {
    let result = Math.random() < 0.9 ? "🍕" : "❌";
    setDeliveredPizzas(deliveredPizzas + result);
    onOrder();
  };

  return (
    <>
      <h2>Order</h2>
      <button onClick={orderPizza}>Buy now!</button>
      <div className="delivery-box">{deliveredPizzas}</div>
    </>
  );
}
