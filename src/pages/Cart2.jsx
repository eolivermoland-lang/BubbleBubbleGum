import Navbar from '../components/Navbar';
import bg from '../assets/background.jpg'
import Cartp from '../components/Cartp';
export default function Cart2({ cart}) {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img src={bg} className="w-full h-full object-cover" />
      </div>

      <div className="relative min-h-dvh">
        <Navbar cart={cart} />
        <Cartp cart={cart} />
      </div>
    </>
  )
}