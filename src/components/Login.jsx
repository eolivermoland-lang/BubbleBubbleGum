import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login({ setShowLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please fill in both fields")
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setError("")
      navigate("/Cart2")
    } catch (err) {
      setError("Wrong email or password")
    }
  }

  return (
    <div className="py-35 flex justify-center">
      <div className="py-20 flex justify-center rounded-xl bg-linear-to-b from-pink-300/60 to-pink-700/60 backdrop-blur-md w-[95%] md:w-[40%]">

        <div className="rounded-xl w-[80%] bg-gray-50/30 shadow-xl p-5 flex flex-col gap-2">

          <h1 className="text-center text-green-300 font-extrabold text-3xl py-6 rounded-xl ">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border md:w-[50%] mx-auto p-1 px-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl border md:w-[50%] mx-auto p-1 px-4"
          />

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="border rounded-2xl w-[50%] bg-pink-400/20 mx-auto hover:scale-102 transition duration-75"
          >
            Login
          </button>

          <button
            onClick={() => setShowLogin(false)}
            className="text-sm text-blue-700 underline mt-2"
          >
            Don't have an account? Sign up
          </button>

        </div>
      </div>
    </div>
  )
}