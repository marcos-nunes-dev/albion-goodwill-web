"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"

interface TypedTestimonialProps {
  quote: string
  author: string
  role: string
  duration: number
}

export function TypedTestimonial({ quote, author, role, duration }: TypedTestimonialProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setIsTyping(true)
    setDisplayedText("")
    setProgress(0)
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < quote.length) {
        setDisplayedText((prev) => prev + quote.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 30) // Adjust typing speed here

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 100 / (duration / 100) // Update every 100ms
      })
    }, 100)

    return () => {
      clearInterval(typingInterval)
      clearInterval(progressInterval)
    }
  }, [quote, duration])

  return (
    <div className="space-y-4 w-[500px]">
      {" "}
      {/* Fixed width */}
      <Progress
        value={progress}
        className="w-full h-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        // indicatorClassname="bg-gradient-to-r from-blue-500 to-purple-500"
      />
      <blockquote className="text-lg font-medium leading-relaxed min-h-[150px]">
        {" "}
        {/* Min height to prevent layout shift */}
        &ldquo;{displayedText}
        {isTyping && <span className="animate-pulse">|</span>}
        &rdquo;
      </blockquote>
      <footer className="text-sm text-muted-foreground">
        <p className="font-semibold">{author}</p>
        <p>{role}</p>
      </footer>
    </div>
  )
}

