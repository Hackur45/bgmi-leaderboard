'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

type ClassicMatch = {
  squadName: string
  battle1Points: number
  battle2Points: number
  battle3Points: number
  frags: number
  placement: number
}

const calculateTotalScore = (match: ClassicMatch) => {
  const killPoints = match.frags * 5
  let placementPoints = 0
  if (match.placement === 1) placementPoints = 20
  else if (match.placement <= 5) placementPoints = 10
  else if (match.placement <= 10) placementPoints = 5
  return killPoints + placementPoints + match.battle1Points + match.battle2Points + match.battle3Points
}

type ClassicLeaderboardProps = {
  pool: string
  data: ClassicMatch[]
}

export default function ClassicLeaderboard({ pool, data }: ClassicLeaderboardProps) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => calculateTotalScore(b) - calculateTotalScore(a))
  }, [data])

  return (
    <motion.div
      className="glass-effect p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Classic Matches Leaderboard ({pool})</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">Squad Name</th>
              <th className="p-2">Frags</th>
              <th className="p-2">Placement</th>
              <th className="p-2">Total Dominance</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((squad, index) => (
              <motion.tr
                key={squad.squadName}
                className="hover:bg-white/10 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td className="p-2">{squad.squadName}</td>
                <td className="p-2">{squad.frags}</td>
                <td className="p-2">{squad.placement}</td>
                <td className="p-2 font-bold">{calculateTotalScore(squad)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
