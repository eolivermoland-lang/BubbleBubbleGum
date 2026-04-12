import { useState } from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import bg from '../assets/background.jpg'

export default function Home() {

  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => [...prev, product])
  }

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img src={bg} className="w-full h-full object-cover" />
      </div>

      <div className="relative min-h-dvh">
        <Navbar cart={cart} />
        <Hero />
        <Products addToCart={addToCart} />
      </div>
    </>
  )
}