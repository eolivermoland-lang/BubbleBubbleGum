import { motion, useScroll, useTransform } from "framer-motion";
import Herosn from '../assets/herosn.png';

export default function Hero() {
  const { scrollY } = useScroll();

  // ned bevegelse
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  // litt zoom = m,er dybde
const scale = useTransform(scrollY, [0, 500], [1, 1.05]);

  return (
    <section className="py-15">
      <motion.img className="mx-auto w-full md:h-150 h-60 border border-pink-300 shadow-2xl"  src={Herosn} alt="Hero Image" style={{ y, scale }} />
    </section>
  )
}
