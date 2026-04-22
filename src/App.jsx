import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Tjenester from './pages/Tjenester';
import Cart from './pages/Cart';
import Cart2 from './pages/Cart2';

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
    <Router>
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} />} />
        <Route path="/tjenester" element={<Tjenester cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/Cart2" element={<Cart2 cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;