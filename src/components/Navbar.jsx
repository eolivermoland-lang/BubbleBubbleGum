import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-linear-to-tl from-pink-300 to-pink-600 text-green-300 flex justify-between p-3">
      <h1 className="md:text-2xl text-xl font-extrabold tracking-tighter italic">BubbleBubbleGum</h1>
      <div className="flex gap-4 font-bold md:text-lg mt-0.5">
        <Link to="/" className="hover:text-green-600 transition duration-100">Hjem</Link>
        <Link to="/tjenester" className="hover:text-green-600 transition duration-100">Tjenester</Link>
      </div>
    </nav>
  )
}


