'use client'

import { useEffect, useState } from 'react'

export default function TimerHeader({ onExpire }: { onExpire: () => void }) {
  const [seconds, setSeconds] = useState(120)

  useEffect(() => {
    if (seconds <= 0) return
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { clearInterval(id); onExpire(); return 0 }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secs = String(seconds % 60).padStart(2, '0')
  const isWarning = seconds <= 30

  return (
    <header className="sticky top-0 z-50 bg-[#1e3a1e] py-2 px-4 text-center shadow-md">
      <p className="text-white text-sm font-medium">Успейте открыть пробную неделю</p>
      <p
        className={`font-bold text-lg tabular-nums mt-0.5 transition-colors duration-300
          ${isWarning ? 'text-red-400 animate-blink' : 'text-yellow-400'}`}
      >
        • {mins}:{secs} •
      </p>
    </header>
  )
}
