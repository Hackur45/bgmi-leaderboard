'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type SoloTDMPlayer = {
  playerHandle: string
  matchesFought: number
  victories: number
  defeats: number
  eliminations: number
}

const initialData: SoloTDMPlayer[] = [
  { playerHandle: 'ProGamer123', matchesFought: 50, victories: 30, defeats: 20, eliminations: 150 },
  { playerHandle: 'Sniper_Elite', matchesFought: 45, victories: 25, defeats: 20, eliminations: 180 },
  { playerHandle: 'StealthMaster', matchesFought: 55, victories: 35, defeats: 20, eliminations: 165 },
]

export default function SoloTDMLeaderboard() {
  const [data, setData] = useState(initialData)

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.eliminations - a.eliminations)
  }, [data])

  return (
    <motion.div
      className="glass-effect p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Solo TDM Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">Player Handle</th>
              <th className="p-2">Matches Fought</th>
              <th className="p-2">Victories</th>
              <th className="p-2">Defeats</th>
              <th className="p-2">Eliminations</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((player, index) => (
              <motion.tr
                key={player.playerHandle}
                className="hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1,opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="p-2">{player.playerHandle}</td>
                <td className="p-2">{player.matchesFought}</td>
                <td className="p-2">{player.victories}</td>
                <td className="p-2">{player.defeats}</td>
                <td className="p-2 font-bold">{player.eliminations}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

