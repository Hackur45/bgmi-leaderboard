'use client'

// import { useState } from 'react'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import ClassicLeaderboard from '@/components/ClassicLeaderboard'
// import { motion, AnimatePresence } from 'framer-motion'

type ClassicMatch = {
  squadName: string
  battle1Points: number
  battle2Points: number
  battle3Points: number
  frags: number
  placement: number
}

export default function Home() {
  // const [showAdminPanel, setShowAdminPanel] = useState(false)

  const poolAData: ClassicMatch[] = [
    { squadName: 'Alpha Squad', battle1Points: 25, battle2Points: 30, battle3Points: 20, frags: 15, placement: 1 },
    { squadName: 'Beta Team', battle1Points: 20, battle2Points: 35, battle3Points: 25, frags: 12, placement: 3 },
    { squadName: 'Gamma Force', battle1Points: 30, battle2Points: 25, battle3Points: 30, frags: 18, placement: 2 },
    { squadName: 'Crimson Knights', battle1Points: 15, battle2Points: 20, battle3Points: 25, frags: 10, placement: 4 },
    { squadName: 'Shadow Troopers', battle1Points: 35, battle2Points: 40, battle3Points: 30, frags: 25, placement: 1 },
    { squadName: 'Iron Wolves', battle1Points: 10, battle2Points: 15, battle3Points: 20, frags: 5, placement: 5 },
    { squadName: 'Phoenix Rangers', battle1Points: 25, battle2Points: 20, battle3Points: 15, frags: 8, placement: 8 },
    { squadName: 'Thunderbolts', battle1Points: 20, battle2Points: 25, battle3Points: 10, frags: 12, placement: 6 },
    { squadName: 'Silver Spartans', battle1Points: 30, battle2Points: 30, battle3Points: 30, frags: 20, placement: 2 },
    { squadName: 'Blazing Falcons', battle1Points: 10, battle2Points: 10, battle3Points: 20, frags: 15, placement: 10 },
    { squadName: 'Frost Giants', battle1Points: 20, battle2Points: 20, battle3Points: 20, frags: 12, placement: 7 },
    { squadName: 'Golden Arrows', battle1Points: 15, battle2Points: 15, battle3Points: 10, frags: 5, placement: 15 },
    { squadName: 'Venom Vipers', battle1Points: 25, battle2Points: 30, battle3Points: 15, frags: 18, placement: 3 },
    { squadName: 'Electric Eagles', battle1Points: 20, battle2Points: 15, battle3Points: 25, frags: 15, placement: 6 },
    { squadName: 'Scarlet Ravens', battle1Points: 35, battle2Points: 40, battle3Points: 45, frags: 30, placement: 1 },
    { squadName: 'Mystic Bears', battle1Points: 15, battle2Points: 20, battle3Points: 15, frags: 8, placement: 12 },
    { squadName: 'Raging Bulls', battle1Points: 25, battle2Points: 30, battle3Points: 35, frags: 22, placement: 2 },
    { squadName: 'Desert Scorpions', battle1Points: 10, battle2Points: 10, battle3Points: 15, frags: 5, placement: 18 },
    { squadName: 'Steel Hawks', battle1Points: 20, battle2Points: 25, battle3Points: 20, frags: 10, placement: 9 },
    { squadName: 'Onyx Panthers', battle1Points: 30, battle2Points: 20, battle3Points: 25, frags: 18, placement: 4 },
    { squadName: 'Amber Lions', battle1Points: 15, battle2Points: 15, battle3Points: 10, frags: 7, placement: 11 },
    { squadName: 'Crimson Foxes', battle1Points: 25, battle2Points: 30, battle3Points: 25, frags: 12, placement: 5 },
    { squadName: 'Titan Cobras', battle1Points: 10, battle2Points: 20, battle3Points: 15, frags: 9, placement: 13 },
    { squadName: 'Sapphire Sharks', battle1Points: 15, battle2Points: 20, battle3Points: 15, frags: 8, placement: 14 },
    { squadName: 'Emerald Owls', battle1Points: 20, battle2Points: 25, battle3Points: 30, frags: 18, placement: 3 },
  ]
  
  const poolBData: ClassicMatch[] = [
    { squadName: 'Delta Squad', battle1Points: 20, battle2Points: 20, battle3Points: 30, frags: 10, placement: 2 },
    { squadName: 'Omega Team', battle1Points: 30, battle2Points: 30, battle3Points: 25, frags: 20, placement: 1 },
    { squadName: 'Sigma Warriors', battle1Points: 15, battle2Points: 25, battle3Points: 20, frags: 8, placement: 4 },
    { squadName: 'Bronze Titans', battle1Points: 25, battle2Points: 35, battle3Points: 15, frags: 18, placement: 3 },
    { squadName: 'Diamond Phoenix', battle1Points: 40, battle2Points: 30, battle3Points: 20, frags: 25, placement: 1 },
    { squadName: 'Obsidian Wolves', battle1Points: 10, battle2Points: 15, battle3Points: 20, frags: 7, placement: 9 },
    { squadName: 'Cobalt Lions', battle1Points: 30, battle2Points: 25, battle3Points: 20, frags: 15, placement: 6 },
    { squadName: 'Ivory Bears', battle1Points: 20, battle2Points: 15, battle3Points: 20, frags: 10, placement: 11 },
    { squadName: 'Ruby Tigers', battle1Points: 25, battle2Points: 30, battle3Points: 25, frags: 18, placement: 4 },
    { squadName: 'Jet Panthers', battle1Points: 10, battle2Points: 15, battle3Points: 10, frags: 5, placement: 16 },
    { squadName: 'Pearl Falcons', battle1Points: 35, battle2Points: 40, battle3Points: 30, frags: 20, placement: 1 },
    { squadName: 'Copper Vultures', battle1Points: 15, battle2Points: 20, battle3Points: 15, frags: 7, placement: 12 },
    { squadName: 'Topaz Foxes', battle1Points: 20, battle2Points: 25, battle3Points: 20, frags: 12, placement: 5 },
    { squadName: 'Amethyst Cobras', battle1Points: 30, battle2Points: 20, battle3Points: 15, frags: 15, placement: 8 },
    { squadName: 'Steel Jaguars', battle1Points: 25, battle2Points: 35, battle3Points: 30, frags: 20, placement: 2 },
    { squadName: 'Quartz Scorpions', battle1Points: 10, battle2Points: 15, battle3Points: 20, frags: 8, placement: 10 },
    { squadName: 'Lapis Lazuli Owls', battle1Points: 20, battle2Points: 25, battle3Points: 25, frags: 10, placement: 7 },
    { squadName: 'Ebony Snakes', battle1Points: 15, battle2Points: 20, battle3Points: 15, frags: 6, placement: 13 },
    { squadName: 'Platinum Ravens', battle1Points: 25, battle2Points: 30, battle3Points: 25, frags: 18, placement: 3 },
    { squadName: 'Neon Wolves', battle1Points: 20, battle2Points: 15, battle3Points: 20, frags: 12, placement: 9 },
    { squadName: 'Shadow Sharks', battle1Points: 30, battle2Points: 25, battle3Points: 20, frags: 15, placement: 4 },
    { squadName: 'Radiant Bulls', battle1Points: 15, battle2Points: 20, battle3Points: 15, frags: 8, placement: 14 },
    { squadName: 'Amber Falcons', battle1Points: 20, battle2Points: 25, battle3Points: 30, frags: 18, placement: 5 },
    { squadName: 'Inferno Bears', battle1Points: 25, battle2Points: 30, battle3Points: 35, frags: 22, placement: 2 },
    { squadName: 'Storm Raptors', battle1Points: 10, battle2Points: 15, battle3Points: 20, frags: 5, placement: 20 },
  ]
  

  return (
    <main className="min-h-screen p-4 md:p-8">
      <Header />
      <HomePage />
      <div className="mt-8 space-y-8">
        {/* Pass data as props */}
        <ClassicLeaderboard pool="Pool A" data={poolAData} />
        <ClassicLeaderboard pool="Pool B" data={poolBData} />
      </div>
      {/* <motion.button
        className="fixed bottom-4 right-4 btn glow-effect"
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showAdminPanel ? 'Close Admin Panel' : 'Open Admin Panel'}
      </motion.button>
      <AnimatePresence>
        {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
      </AnimatePresence> */}
    </main>
  )
}
