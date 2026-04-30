export default function Cartp({ cart }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="">
      <div className="py-10 flex justify-center">
        <div className="bg-linear-to-tl from-pink-300 to-pink-700 md:w-[60%] w-[80%] p-6 rounded-xl">

          <h1 className="font-bold md:text-5xl text-3xl text-green-300 text-center mb-10">🛒 Cart</h1>

          {cart.length === 0 ? (
            <p className="text-center text-white">Cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item, i) => (
                <div key={i} className={`p-4 rounded-lg flex justify-between items-center md:w-[60%] mx-auto hover:scale-105 transition duration-300 bg-linear-to-tl ${item.color}`}>
                  
                  <div className="text-white">
                    <h2 className="font-bold">{item.name}</h2>
                    <p>{item.desc}</p>
                    <p className="font-bold">{item.price} kr</p>
                  </div>

                  <img src={item.img} className="w-16 h-16 object-cover rounded-4xl" />
                </div>
              ))}
            </div>
          )}

          {/* TOTAL */}
          {cart.length > 0 && (
            <div className="mt-10 text-center text-white">
              <h2 className="text-2xl font-bold">
                Total: {total} kr
              </h2>

              <button className="mt-4 bg-black px-6 py-3 rounded-xl md:w-[40%] md:text-xl font-bold hover:bg-gray-800 transition duration-150">
                Betal nå
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}