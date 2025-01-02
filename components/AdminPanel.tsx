'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  onClose: () => void
}

export default function AdminPanel({ onClose }: Props) {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate the password against a secure backend
    if (password === 'admin123') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  if (!isAuthenticated) {
    return (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="glass-effect p-6 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="btn glow-effect"
              >
                Login
              </button>
              <button
                onClick={onClose}
                className="btn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="glass-effect p-6 max-w-4xl w-full h-3/4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Update Classic Matches</h3>
            {/* Add form fields for updating Classic Matches data */}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Update Solo TDM</h3>
            {/* Add form fields for updating Solo TDM data */}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 btn"
        >
          Close Admin Panel
        </button>
      </div>
    </motion.div>
  )
}

