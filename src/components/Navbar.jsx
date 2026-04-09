import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="">
      <h1 className="text-xl font-extrabold tracking-tighter italic">BubbleBubbleGum</h1>
      <div className="">
        <Link to="/" className="">Hjem</Link>
        <Link to="/tjenester" className="">Tjenester</Link>
      </div>
    </nav>
  )
}
