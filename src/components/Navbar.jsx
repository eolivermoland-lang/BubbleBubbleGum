import { Link } from 'react-router-dom';
import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-linear-to-tl from-pink-300 to-pink-600 text-green-300 flex justify-between p-4">
      <h1 className="md:text-2xl text-xl font-extrabold tracking-tighter italic">BubbleBubbleGum</h1>
      <div className="gap-4 font-bold md:text-lg mt-0.5 hidden md:flex">
        <Link to="/" onClick={() => setOpen(false)} className="hover:text-green-600 transition duration-100">Hjem</Link>
        <Link to="/tjenester" onClick={() => setOpen(false)} className="hover:text-green-600 transition duration-100">Tjenester</Link>
      </div>


      <div className="flex gap-3">
        <button className="flex">🛒</button>

        <button 
          className="md:hidden text-xl flex"
          onClick={() => setOpen(!open)}
        >☰</button>
      </div>


      <div
        className={`md:hidden flex flex-col gap-4 mt-4 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-2 font-bold text-sm mt-5 flex-col">
          <Link to="/" className="hover:text-green-600 transition duration-100">Hjem</Link>
          <Link to="/tjenester" className="hover:text-green-600 transition duration-100">Tjenester</Link>
        </div>
      </div>

    </nav>
  )
}


