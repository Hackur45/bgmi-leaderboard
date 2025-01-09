import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/public/images/Compe-ex-LOGO.png'

export default function Header() {
  return (
    <motion.header
      className="text-center py-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col justify-center items-center space-x-4">
        <Image src={logo} alt="Comp-Ex Nagpur Logo" width={300} height={245} />
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Comp-Ex Nagpur BGMI Tournament
        </h1>
      </div>
      <p className="mt-2 text-xl text-gray-300">31st Edition - Official Leaderboards</p>
    </motion.header>
  )
}

