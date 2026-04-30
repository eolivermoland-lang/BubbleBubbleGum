import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Home from './pages/Home';
import Tjenester from './pages/Tjenester';
import Cart from './pages/Cart';
import Cart2 from './pages/Cart2';
import SignUp from './components/SignUp';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart(prev => [...prev, product]);
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "ASze9b82TYiqBTYXHx8Bir14jYO6_tc1L_8f0_1YFrI4K55sGcxDZU7p1KULsyu-gbp0jsVQLQi0N9OE",
        currency: "USD"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
          <Route path="/tjenester" element={<Tjenester cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/Cart2" element={<Cart2 cart={cart} />} />
          <Route path="/signup" element={<SignUp cart={cart} />} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;