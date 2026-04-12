import { Link } from 'react-router-dom'
import { useState } from "react"

export default function Navbar({ cart }) {

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-linear-to-tl from-pink-300 to-pink-600 text-green-300 flex justify-between items-center relative p-4">


      <h1 className="md:text-2xl text-xl font-extrabold tracking-tighter italic">
        BubbleBubbleGum
      </h1>


      <div className="hidden md:flex gap-4 font-bold md:text-lg ml-auto items-center">
        <Link to="/" className="hover:text-green-600 transition duration-100">
          Hjem
        </Link>
        <Link to="/tjenester" className="hover:text-green-600 transition duration-100">
          Tjenester
        </Link>
        <Link to="/cart" className="relative text-xl">
          🛒

          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 min-w-4-5 text-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>


      <div className="flex gap-3 items-center">
        <Link to="/cart" className="relative text-xl md:hidden flex">
          🛒

          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1 min-w-4-5 text-center">
              {cart.length}
            </span>
          )}
        </Link>
        <button
          className="md:hidden text-xl flex"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>


      <div
        className={`md:hidden flex flex-col absolute overflow-hidden top-full left-0 w-full transition-all mb-4 bg-linear-to-bl from-pink-300 to-pink-700 duration-300 text-center ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-2 font-bold text-xl mt-4 mb-4 flex-col">
          <Link to="/" className="hover:text-green-600 transition duration-100">
            Hjem
          </Link>
          <Link to="/tjenester" className="hover:text-green-600 transition duration-100">
            Tjenester
          </Link>
          <Link to="/cart" className="hover:text-green-600 transition duration-100">
            Cart
          </Link>
        </div>

      </div>
    </nav>
  )
}