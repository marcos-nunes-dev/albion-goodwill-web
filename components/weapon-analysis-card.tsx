"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { RefreshCw } from "lucide-react"
import { DiscordMessage } from "@/components/ui/discord-message"

interface PlayerStats {
  ip: number;
  kd: number;
  battles: number;
  winRate: number;
  killFame: number;
}

interface WeaponAnalysisProps {
  playerName: string;
  weapon: string;
  playerStats: PlayerStats;
  topPlayers: Array<{
    name: string;
    stats: PlayerStats;
  }>;
  metrics: Array<{
    name: string;
    you: string | number;
    avg: string | number;
    score: string;
  }>;
  overallScore: number;
  playersFound: number;
  timestamp?: string;
}

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

export function WeaponAnalysisCard({
  playerName,
  weapon,
  playerStats,
  topPlayers,
  metrics,
  overallScore,
  playersFound,
  timestamp = "Hoje às 16:05"
}: WeaponAnalysisProps) {
  return (
    <DiscordMessage>
      <motion.div
        className="rounded bg-gray-50 p-4 font-mono text-sm border-l-2 border-purple-900 text-gray-800"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-800 mb-4 font-bold"
        >
          Weapon Comparison - {weapon}
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-700 mb-2"
        >
          Comparing {playerName}&apos;s performance with top Healer players using the same weapon
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-800 mb-4"
        >
          <span className="font-bold">{playerName}</span>
          <br />
          IP: {playerStats.ip} | K/D: {playerStats.kd} | Battles: {playerStats.battles} | W/rate: {playerStats.winRate}% | K/fame: {playerStats.killFame.toLocaleString()}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-800 mb-4"
        >
          <div className="font-semibold">Top Players Comparison</div>
          {topPlayers.map((player, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-gray-700"
            >
              {player.name}: IP: {player.stats.ip} | K/D: {player.stats.kd} | Battles: {player.stats.battles} | W/rate: {player.stats.winRate}% | K/fame: {player.stats.killFame.toLocaleString()}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-800 mb-4"
        >
          <div className="font-semibold">Performance Analysis</div>
          Overall Score: {overallScore}% (Exceptional)
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-800 mb-4"
        >
          <div className="font-semibold mb-2">Detailed Metrics:</div>
          <div className="font-mono whitespace-pre">
            <div className="grid grid-cols-4 gap-4 mb-2 text-gray-600">
              <div>Metric</div>
              <div>You</div>
              <div>Avg</div>
              <div>Score</div>
            </div>
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="grid grid-cols-4 gap-4 text-gray-700"
              >
                <div>{metric.name}</div>
                <div>{metric.you}</div>
                <div>{metric.avg}</div>
                <div className="text-green-600">{metric.score}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-gray-700"
        >
          Found {playersFound} players with {weapon} experience.
        </motion.div>
      </motion.div>
    </DiscordMessage>
  )
} 