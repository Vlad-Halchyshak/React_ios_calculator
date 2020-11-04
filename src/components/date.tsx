import { useState, useEffect } from 'react'
import React from 'react'

export const DateTime: React.FC = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    
    const tick = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(tick)
    }
  })
  return (
    <div>
      <p>
        {date.getHours()}:{date.getMinutes()< 10 ? '0' : ''}{date.getMinutes()}
      </p>
    </div>
  )
}


