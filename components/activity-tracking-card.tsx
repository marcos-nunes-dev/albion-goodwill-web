"use client";

import { motion } from "framer-motion";
import { DiscordMessage } from "./ui/discord-message";

interface ActivityTrackingProps {
  playerName: string;
  date: string;
  voiceActivity: {
    totalTime: string;
    activeTime: string;
    afkTime: string;
    mutedTime: string;
  };
  chatActivity: {
    messagesSent: number;
  };
  activityDistribution: {
    active: number;
    afk: number;
  };
  lastUpdated: string;
}

export function ActivityTrackingCard(props: ActivityTrackingProps) {
  const {
    playerName,
    date,
    voiceActivity,
    chatActivity,
    activityDistribution,
    lastUpdated
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <DiscordMessage>
        <div className="space-y-2 text-sm rounded bg-gray-50 p-4 font-mono border-l-2 border-purple-900 text-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300" /> {/* Avatar placeholder */}
            <span className="font-semibold">{playerName}'s Daily Activity</span>
          </div>
          
          <div className="text-muted-foreground">
            Activity stats for {date}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <div className="flex items-center gap-2">
                🎤 Voice Activity
              </div>
              <div className="space-y-1 mt-1">
                <div>Total Time: {voiceActivity.totalTime}</div>
                <div>Active Time: {voiceActivity.activeTime}</div>
                <div>AFK Time: {voiceActivity.afkTime}</div>
                <div>Muted Time: {voiceActivity.mutedTime}</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                💬 Chat Activity
              </div>
              <div className="mt-1">
                Messages Sent: {chatActivity.messagesSent}
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-2 mb-1">
              📊 Activity Distribution
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500"
                style={{ width: `${activityDistribution.active}%` }}
              />
            </div>
            <div className="text-xs mt-1">
              Active: {activityDistribution.active}% | AFK: {activityDistribution.afk}%
            </div>
          </div>

          <div className="text-xs text-muted-foreground mt-4">
            Last updated • {lastUpdated}
          </div>
        </div>
      </DiscordMessage>
    </motion.div>
  );
} 