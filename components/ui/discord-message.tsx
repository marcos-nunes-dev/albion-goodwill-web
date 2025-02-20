"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useState, useRef, ReactNode } from "react"
import { RefreshCw } from "lucide-react"

const TypingIndicator = () => (
  <div className="flex gap-1 px-1">
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 1] }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, delay: 0.2, repeat: Infinity, times: [0, 0.5, 1] }}
    />
    <motion.span
      className="w-2 h-2 rounded-full bg-gray-400"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1, delay: 0.4, repeat: Infinity, times: [0, 0.5, 1] }}
    />
  </div>
)

interface DiscordMessageProps {
  children: ReactNode;
  timestamp?: string;
  thinkingMessage?: string;
}

export function DiscordMessage({ 
  children, 
  timestamp = "Hoje às 16:05",
  thinkingMessage = "Albion Goodwill is thinking"
}: DiscordMessageProps) {
  const [isThinking, setIsThinking] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const startAnimation = () => {
    setIsThinking(true)
    setShowContent(false)
    setIsRefreshing(true)
    
    const timer = setTimeout(() => {
      setIsThinking(false)
      setTimeout(() => {
        setShowContent(true)
        setIsRefreshing(false)
      }, 150)
    }, 2000)

    return timer
  }

  useEffect(() => {
    if (isInView) {
      const timer = startAnimation()
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const handleRefresh = () => {
    if (!isRefreshing) {
      const timer = startAnimation()
      return () => clearTimeout(timer)
    }
  }

  return (
    <div 
      ref={ref}
      className="w-full rounded-lg border bg-white text-gray-900 font-[gg sans] overflow-hidden "
    >
      <div className="flex items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/avatar.png" alt="Albion Goodwill" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Albion Goodwill</span>
              <span className="bg-[#5865F2] text-white text-xs px-1 rounded">APP</span>
            </div>
            <span className="text-gray-500 text-sm">{timestamp}</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isRefreshing ? { rotate: 360 } : {}}
          transition={isRefreshing ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
          onClick={handleRefresh}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 disabled:opacity-50"
          disabled={isRefreshing}
          title="Refresh analysis"
        >
          <RefreshCw className="w-5 h-5" />
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {isThinking ? (
          <motion.div
            key="thinking"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 w-full"
          >
            <div className="w-full rounded bg-gray-50 p-4 flex flex-row items-center justify-center gap-2">
              <div className="text-gray-700">{thinkingMessage}</div>
              <TypingIndicator />
            </div>
          </motion.div>
        ) : showContent ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 w-full"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
} 