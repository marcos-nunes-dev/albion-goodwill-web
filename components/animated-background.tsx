"use client"

import { useEffect, useState } from "react"

interface Circle {
  id: number
  x: string
  y: string
  size: string
  color: 'blue' | 'pink'
  animation: string
}

export function AnimatedBackground() {
  const [circles, setCircles] = useState<Circle[]>([])

  useEffect(() => {
    // Create 6 circles with random positions and sizes
    const newCircles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${Math.random() * 300 + 200}px`,
      color: Math.random() > 0.5 ? 'blue' as const : 'pink' as const,
      animation: `float-${Math.random() > 0.5 ? 1 : 2} ${Math.random() * 10 + 20}s infinite linear`
    }))
    setCircles(newCircles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`blur-circle absolute ${
            circle.color === 'blue' ? 'blur-circle-blue' : 'blur-circle-pink'
          }`}
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            animation: circle.animation,
          }}
        />
      ))}
    </div>
  )
}

