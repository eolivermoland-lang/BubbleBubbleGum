import Navbar from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import bg from '../assets/background.jpg'
import { useState } from "react"

export default function Cart({ cart }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img src={bg} className="w-full h-full object-cover" />
      </div>

      <div className="relative min-h-dvh">
        <Navbar cart={cart} />

        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <SignUp setShowLogin={setShowLogin} />
        )}
      </div>
    </>
  )
}