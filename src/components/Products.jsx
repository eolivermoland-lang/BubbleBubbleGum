import { Link } from 'react-router-dom';
import blue from '../assets/blue.webp'
import watermellon from '../assets/watermellon.jpg'
import red from '../assets/red.webp'
import yellow from '../assets/yellow.jpg'

export default function Products() {
  return (
    <section className="">
      <div className="text-white flex p-15 gap-15 justify-center">
        <div className="bg-linear-to-tl from-blue-300 to-blue-700 md:w-[30%] w-[80%] p-10 rounded-xl">
          <img src={blue} alt="Blue Razz" className="rounded-xl mb-10"></img>
          <h1 className="text-center font-bold md:text-2xl mb-2">Blue Razz</h1>
          <p className="text-center">The blue raspberry flavor</p>
          <Link to="/tjenester" className="flex justify-center mx-auto mt-5 bg-pink-400 rounded-2xl md:w-[50%] hover:bg-pink-700 transition duration-150">Kjøp</Link>
        </div>
        <div className="bg-linear-to-tl from-green-600 to-red-400 md:w-[30%] w-[80%] p-10 rounded-xl">
          <img src={watermellon} alt="Watermellon Dream" className="rounded-xl mb-10"></img>
          <h1 className="text-center font-bold md:text-2xl text-sm mb-2">Watermellon Dream</h1>
          <p className="text-center text-sm">The watermelon flavor</p>
          <Link to="/tjenester" className="flex justify-center mx-auto mt-5 bg-pink-400 rounded-2xl md:w-[50%] hover:bg-pink-700 transition duration-150">Kjøp</Link>
        </div>
      </div>
      <div className="text-white flex p-15 gap-15 justify-center">
        <div className="bg-linear-to-tl from-red-300 to-red-700 md:w-[30%] w-[80%] p-10 rounded-xl">
          <img src={red} alt="Wildberry" className="rounded-xl mb-10 mx-auto"></img>
          <h1 className="text-center font-bold md:text-2xl mb-2">Wildberry taste</h1>
          <p className="text-center">The wildberry flavor</p>
          <Link to="/tjenester" className="flex justify-center mx-auto mt-5 bg-pink-400 rounded-2xl md:w-[50%] hover:bg-pink-700 transition duration-150">Kjøp</Link>
        </div>
        <div className="bg-linear-to-tl from-yellow-300 to-yellow-700 md:w-[30%] w-[80%] p-10 rounded-xl">
          <img src={yellow} alt="Pinapple Punch" className="rounded-xl mb-10"></img>
          <h1 className="text-center font-bold md:text-2xl mb-2">Pinapple Punch</h1>
          <p className="text-center text-sm">The pinapple flavor</p>
          <Link to="/tjenester" className="flex justify-center mx-auto mt-5 bg-pink-400 rounded-2xl md:w-[50%] hover:bg-pink-700 transition duration-150">Kjøp</Link>
        </div>
      </div>
    </section>
  )
}