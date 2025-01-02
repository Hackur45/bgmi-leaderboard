import { motion } from 'framer-motion'
import Image from 'next/image'
import image1 from '../public/images/bgmi6.jpg'
import image2 from '../public/images/bgmi5.jpg'
import image3 from '../public/images/bgmi3.jpg'
import image4 from '../public/images/bgmi7.jpg'

export default function HomePage() {
  return (
    <motion.section
      className="glass-effect p-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Welcome to Compex Nagpur</h2>
          <p className="mb-4">
            For over three decades, Compex Nagpur has been at the forefront of showcasing cutting-edge technology and innovation. Now in its 31st edition, we're proud to present one of our major highlights: the BGMI Tournament!
          </p>
          <p className="mb-4">
            Experience the thrill of real-time action, compete for exciting prizes, and prove your skills in one of India's most popular mobile games. Whether you're a seasoned pro or a passionate newcomer, the BGMI Tournament at Compex Nagpur is your chance to shine!
          </p>
          <motion.button
            className="btn glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src={`${image1.src}`} alt="BGMI Character" width={200} height={200} className="rounded-lg" />
          <Image src={`${image2.src}`} alt="BGMI Weapon" width={200} height={200} className="rounded-lg" />
          <Image src={`${image3.src}`} alt="BGMI Map" width={200} height={200} className="rounded-lg" />
          <Image src={`${image4.src}`} alt="BGMI Logo" width={200} height={200} className="rounded-lg" />
        </div>
      </div>
    </motion.section>
  )
}

