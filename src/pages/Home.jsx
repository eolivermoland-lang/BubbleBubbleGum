import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import bg from '../assets/background.jpg'

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          src={bg}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative min-h-dvh">    
        <Navbar />
        <Hero />
        <Products />

      </div>
    </>
  )
}
