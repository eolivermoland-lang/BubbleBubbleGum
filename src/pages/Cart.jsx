import Navbar from '../components/Navbar';
import Login from '../components/Login';
import bg from '../assets/background.jpg'
export default function Cart() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img src={bg} className="w-full h-full object-cover" />
      </div>

      <div className="relative min-h-dvh">
        <Navbar />
        <Login />
      </div>
    </>
  )
}