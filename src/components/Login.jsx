import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { auth } from "../firebase" // ✅ correct path
import { signInWithEmailAndPassword } from "firebase/auth"

export default function Login() {
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
        <div className="rounded-xl w-[80%] bg-gray-50/30 shadow-xl p-5">

          <h1 className="text-center text-green-300 font-extrabold text-3xl py-6">
            Login
          </h1>

          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl border-2 p-1 px-4"
            />
          </div>

          <div className="flex justify-center py-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-2xl border-2 p-1 px-4"
            />
          </div>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          <div className="flex justify-center mt-3">
            <button
              onClick={handleLogin}
              className="border-2 rounded-2xl w-[48%] bg-pink-400"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center mt-3">
            <Link
              to="/Cart2"
              className="border-2 rounded-2xl w-[48%] text-center bg-pink-400"
            >
              Forsett som gjest
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}