import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="py-35 flex justify-center">
        <div className="py-20 flex justify-center rounded-xl bg-linear-to-b from-pink-300/60 to-pink-700/60 backdrop-blur-md w-[95%] md:w-[40%]">
            <div className="rounded-xl w-[80%]  bg-gray-50/30 shadow-xl p-5 ">
                <div className="py-6">
                    <h1 className="text-center text-green-300 font-extrabold text-3xl tracking-tight">Login</h1>
                </div>


                    <div className=" flex justify-center ">
                        <input 
                            type="email"
                            placeholder="Email or Username"
                            className="rounded-2xl border-2 p-1 px-4"
                        />
                    </div>


                    <div className=" flex justify-center py-3">
                        <input 
                            type="Password"
                            placeholder="Password"
                            className="rounded-2xl border-2 p-1 px-4"
                        />
                    </div>

                <div className="">
                    <Link to="/Cart2" className="hover:text-green-600 transition duration-100">gå videre</Link>
                </div>
            </div>

        </div>
    </div>
  )
}