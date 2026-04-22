import { Link } from 'react-router-dom'
import blue from '../assets/blue.webp'
import watermellon from '../assets/watermellon.jpg'
import red from '../assets/red.webp'
import yellow from '../assets/yellow.jpg'

export default function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Blue Razz",
      desc: "The blue raspberry flavor",
      price: 119,
      img: blue,
      color: "from-blue-300 to-blue-700"
    },
    {
      id: 2,
      name: "Watermelon Dream",
      desc: "The watermelon flavor",
      price: 129,
      img: watermellon,
      color: "from-green-600 to-red-400"
    },
    {
      id: 3,
      name: "Wildberry Taste",
      desc: "The wildberry flavor",
      price: 99,
      img: red,
      color: "from-red-300 to-red-700"
    },
    {
      id: 4,
      name: "Pineapple Punch",
      desc: "The pineapple flavor",
      price: 109,
      img: yellow,
      color: "from-yellow-300 to-yellow-700"
    }
  ]

  return (
    <section className="text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-4 mt-20 py-20 md:p-10 ">
      {products.map((p) => (
        <div
          key={p.id}
          className={`bg-linear-to-tl ${p.color} rounded-xl overflow-hidden flex flex-col`}
        >
          <img
            src={p.img}
            className="w-full h-56 md:h-64 object-cover p-4"
          />

          <div className="p-4 md:p-6 flex flex-col flex-1">
            <h1 className="text-center font-bold text-base md:text-xl mb-2">
              {p.name}
            </h1>

            <p className="text-center text-xs md:text-sm opacity-90 py-4">
              {p.desc}
            </p>

            <button
              onClick={() => addToCart(p)}
              className="mt-auto w-full bg-pink-400 py-1 rounded-xl font-bold hover:bg-pink-600 transition"
            >
              Kjøp
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}