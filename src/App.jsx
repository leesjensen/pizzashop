import { useState } from "react";
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./components/home/home";
import { Login } from "./components/login/login";
import { Order } from "./components/order/order";

function App() {
  const [count, setCount] = useState(0);

  console.log(`Render Count: ${count}`);

  const orderPizza = () => {
    setCount(count + 1);
    console.log(`Count: ${count}`);
  };

  return (
    <>
      <img className="bg-img" src="./pizza-hero.jpg" alt="Pizza" />
      <nav>
        <NavLink to="/">home</NavLink> | <NavLink to="/login">login</NavLink> |{" "}
        <NavLink to="/order">order</NavLink>
      </nav>
      <header>
        <NavLink to="/">
          <img className="logo" src="./pizza-shop-logo.png"></img>
        </NavLink>
        <h1>Pizza Shop</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order onOrder={orderPizza} />} />
        </Routes>
      </main>
      <footer>
        <p className="count-text">{count} pizzas served</p>
      </footer>
    </>
  );
}

export default App;
