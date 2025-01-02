'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import ClassicLeaderboard from '@/components/ClassicLeaderboard'
import SoloTDMLeaderboard from '@/components/SoloTDMLeaderboard'
import AdminPanel from '@/components/AdminPanel'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showAdminPanel, setShowAdminPanel] = useState(false)

  return (
    <main className="min-h-screen p-4 md:p-8">
      <Header />
      <HomePage />
      <div className="mt-8 space-y-8">
        <ClassicLeaderboard />
        <SoloTDMLeaderboard />
      </div>
      <motion.button
        className="fixed bottom-4 right-4 btn glow-effect"
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showAdminPanel ? 'Close Admin Panel' : 'Open Admin Panel'}
      </motion.button>
      <AnimatePresence>
        {showAdminPanel && <AdminPanel onClose={() => setShowAdminPanel(false)} />}
      </AnimatePresence>
    </main>
  )
}

