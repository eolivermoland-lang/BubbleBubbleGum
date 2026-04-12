import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import bg from '../assets/background.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}
