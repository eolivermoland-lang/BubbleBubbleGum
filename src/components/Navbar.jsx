import { Link } from 'react-router-dom';
import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-linear-to-tl from-pink-300 to-pink-600 text-green-300 flex justify-between items-center relative p-4">
      <h1 className="md:text-2xl text-xl font-extrabold tracking-tighter italic">BubbleBubbleGum</h1>
      <div className="gap-4 font-bold md:text-lg mt-0.5 hidden md:flex ml-auto">
        <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-600 transition duration-100">Hjem</Link>
        <Link to="/tjenester" onClick={() => setOpen(false)} className="hover:text-green-600 transition duration-100">Tjenester</Link>
        <button className=" hidden text-xl md:flex">🛒</button>
      </div>


      <div className="flex gap-3">
        <button className="md:hidden text-xl flex">🛒</button>

        <button 
          className="md:hidden text-xl flex"
          onClick={() => setOpen(!open)}
        >☰</button>
      </div>


      <div
        className={`md:hidden flex flex-col absolute overflow-hidden top-full left-0 w-full transition-all mb-4 bg-linear-to-bl from-pink-300 to-pink-700 duration-300 text-center ${
          open
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-2 font-bold text-xl mt-4  mb-4 flex-col">
          <Link to="/" className="hover:text-green-600 transition duration-100">Hjem</Link>
          <Link to="/tjenester" className="hover:text-green-600 transition duration-100">Tjenester</Link>
        </div>
      </div>

    </nav>
  )
}


