export default function Login() {
  return (
    <div className="py-35 flex justify-center">
        <div className="py-20 flex justify-center border bg-linear-to-tl from-pink-300/90 to-pink-700/90 w-[95%] ">
            <div className="border rounded-xl w-[80%] bg-gray-50/30 shadow-xl p-5 ">
                <div className="py-6">
                    <h1 className="text-center text-green-300 font-extrabold text-2xl tracking-tight">Login</h1>
                </div>


                    <div className=" flex justify-center ">
                        <input 
                            type="email"
                            placeholder="Email or Username"
                            className="rounded-2xl border-3 border-black px-4"
                        />
                    </div>


                    <div className=" flex justify-center py-3">
                        <input 
                            type="Password"
                            placeholder="Password or Password"
                            className="rounded-2xl border-3 border-black px-4"
                        />
                    </div>


            </div>

        </div>
    </div>
  )
}