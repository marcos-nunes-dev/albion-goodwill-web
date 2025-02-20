"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Add white background with 60% opacity
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const circles: Circle[] = []
    const colors = ["rgba(59, 130, 246, 0.15)", "rgba(168, 85, 247, 0.15)"]

    class Circle {
      x: number
      y: number
      radius: number
      dx: number
      dy: number
      color: string

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.dx = (Math.random() - 0.5) * 0.3 // Slightly increase speed
        this.dy = (Math.random() - 0.5) * 0.3 // Slightly increase speed
        this.color = color
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.filter = "blur(120px)" // Reduce blur slightly
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
      }

      update() {
        if (!canvas) return
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        this.draw()
      }
    }

    for (let i = 0; i < 6; i++) {
      // Increase number of circles
      const radius = Math.random() * 120 + 80 // Adjust size range
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      const color = colors[Math.floor(Math.random() * colors.length)]
      circles.push(new Circle(x, y, radius, color))
    }

    function animate() {
      if (!ctx) return
      if (!canvas) return
      requestAnimationFrame(animate)
      // Clear and redraw white background each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      circles.forEach((circle) => circle.update())
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

