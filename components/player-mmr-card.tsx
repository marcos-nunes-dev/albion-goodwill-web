"use client";

import { motion } from "framer-motion";
import { DiscordMessage } from "./ui/discord-message";

interface PlayerMMRCardProps {
  playerName: string;
  mainRole: string;
  battles: number;
  averageIP: number;
  combatStats: {
    kills: number;
    deaths: number;
    kd: number;
  };
  performance: {
    damage: number;
    healing: number;
    killFame: number;
  };
  mmrRankings: {
    global: {
      rank: string;
      position: string;
    };
    guild: {
      rank: string;
      position: string;
    };
  };
  topHealers: {
    global: {
      name: string;
      score: string;
      battles: number;
      avgIP: string;
      kd: string;
      dmgPerBattle: string;
      healingPerBattle: string;
      famePerBattle: string;
    };
    guild: {
      name: string;
      score: string;
      battles: string;
      avgIP: string;
      kd: string;
      dmgPerBattle: string;
      healingPerBattle: string;
      famePerBattle: string;
    };
  };
}

export function PlayerMMRCard(props: PlayerMMRCardProps) {
  const {
    playerName,
    mainRole,
    battles,
    averageIP,
    combatStats,
    performance,
    mmrRankings,
    topHealers,
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <DiscordMessage>
        <div className="space-y-2 text-sm rounded bg-gray-50 p-4 font-mono border-l-2 border-purple-900 text-gray-800">
          <div className="font-semibold">Player Stats: {playerName}</div>
          <div className="text-muted-foreground text-xs">
            Statistics from the last 30 days for battles with 20+ players.
            <br />
            Minimum 5 battles required for ranking.
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <div className="font-semibold">Main Role</div>
              <div>{mainRole}</div>
            </div>
            <div>
              <div className="font-semibold">Battles</div>
              <div>{battles}</div>
            </div>
            <div>
              <div className="font-semibold">Average IP</div>
              <div>{averageIP}</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">Combat Stats (Per Battle)</div>
              <div>
                Kills: {combatStats.kills} | Deaths: {combatStats.deaths} | K/D: {combatStats.kd}
              </div>
            </div>

            <div>
              <div className="font-semibold">Performance (Per Battle)</div>
              <div>
                Damage: {performance.damage}
                <br />
                Healing: {performance.healing.toLocaleString()}
                <br />
                Kill Fame: {performance.killFame.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold">MMR Rankings</div>
            <div>
              🌍 Global: {mmrRankings.global.rank} ({mmrRankings.global.position})
              <br />
              🏰 Guild: {mmrRankings.guild.rank} ({mmrRankings.guild.position})
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <div className="font-semibold">🏆 Top Healer (Global)</div>
              <div>
                {topHealers.global.name}: {topHealers.global.score} ({topHealers.global.battles}pm)
                <br />
                Avg IP: {topHealers.global.avgIP}
                <br />
                K/D: {topHealers.global.kd}
                <br />
                DMG/Battle: {topHealers.global.dmgPerBattle}
                <br />
                Healing/Battle: {topHealers.global.healingPerBattle}
                <br />
                Fame/Battle: {topHealers.global.famePerBattle}
              </div>
            </div>

            <div>
              <div className="font-semibold">🏆 Top Healer (Guild)</div>
              <div>
                {topHealers.guild.name}: {topHealers.guild.score} (Battles: {topHealers.guild.battles})
                <br />
                Avg IP: {topHealers.guild.avgIP}
                <br />
                K/D: {topHealers.guild.kd}
                <br />
                DMG/Battle: {topHealers.guild.dmgPerBattle}
                <br />
                Healing/Battle: {topHealers.guild.healingPerBattle}
                <br />
                Fame/Battle: {topHealers.guild.famePerBattle}
              </div>
            </div>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            Healer MMR = (50% Heal/Battle) + (20% KD Ratio) + (30% Avg IP) | Normalized against all
          </div>
          <div className="text-xs text-muted-foreground">
            Healers with 5+ battles • Hoje às 16:33
          </div>
        </div>
      </DiscordMessage>
    </motion.div>
  );
} 