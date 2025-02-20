"use client";

import { Swords, Target, Trophy, Medal, Scale, Users } from "lucide-react";
import { GradientBackground } from "./gradient-background";
import { WeaponAnalysisCard } from "@/components/weapon-analysis-card"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlayerMMRCard } from "./player-mmr-card";

const CommandCard = ({
  command,
  description,
  example,
}: {
  command: string;
  description: string;
  example?: string;
}) => (
  <div className="relative w-full overflow-hidden rounded-lg p-4 hover:bg-muted/50 transition-colors">
    <div className="space-y-2">
      <code className="text-lg font-semibold text-primary">/{command}</code>
      <p className="text-sm text-muted-foreground">{description}</p>
      {example && (
        <div className="mt-2 text-xs">
          <span className="text-muted-foreground/80">Example: </span>
          <code className="rounded bg-muted/50 px-1.5 py-0.5 font-mono">
            /{example}
          </code>
        </div>
      )}
    </div>
  </div>
);

const FeatureHighlight = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 items-start">
    <div className="rounded-lg bg-primary/10 p-2.5 mt-1">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div className="space-y-1">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export function PlayerAnalysisSection() {
  const [activeTab, setActiveTab] = useState<'canplay' | 'playermmr'>('canplay');

  const exampleAnalysis = {
    playerName: "sabiopimpolho",
    weapon: "Hallowfall",
    playerStats: {
      ip: 1537,
      kd: -9.08,
      battles: 1505,
      winRate: 92.2,
      killFame: 401
    },
    topPlayers: [
      {
        name: "John",
        stats: {
          ip: 1463,
          kd: -3.84,
          battles: 868,
          winRate: 91.6,
          killFame: 186
        }
      },
      {
        name: "ABoy",
        stats: {
          ip: 1516,
          kd: -25.00,
          battles: 342,
          winRate: 92.7,
          killFame: 841
        }
      },
      // ... add other players
    ],
    metrics: [
      { name: "Combat (K/D)", you: -9.08, avg: -9.05, score: "100%" },
      { name: "Win Rate", you: "92.2%", avg: "91.5%", score: "100%" },
      { name: "Fame/Battle", you: "266.5K", avg: "211.4K", score: "100%" },
      { name: "Item Power", you: 1537, avg: 1479, score: "100%" },
      { name: "Experience", you: 1505, avg: 691, score: "100%" }
    ],
    overallScore: 100,
    playersFound: 5
  }

  const playerMMRAnalysis = {
    playerName: "sabiopimpolho",
    mainRole: "Healer",
    battles: 23,
    averageIP: 1575,
    combatStats: {
      kills: 0.1,
      deaths: 0.3,
      kd: -2.00,
    },
    performance: {
      damage: 202,
      healing: 169374,
      killFame: 194239,
    },
    mmrRankings: {
      global: {
        rank: "37/100",
        position: "#21 of 53 Healers"
      },
      guild: {
        rank: "71/100",
        position: "#4 of 15 Healers"
      }
    },
    topHealers: {
      global: {
        name: "EduardoCA",
        score: "100/100",
        battles: 11,
        avgIP: "1559 (+16)",
        kd: "0.50 (=)",
        dmgPerBattle: "114 (+88)",
        healingPerBattle: "1,204,148 (+1,034,774)",
        famePerBattle: "203,780 (+1,541)"
      },
      guild: {
        name: "Meneguel",
        score: "100/100",
        battles: "16 (+7)",
        avgIP: "1529 (+46)",
        kd: "0.00 (+0.50)",
        dmgPerBattle: "10 (+92)",
        healingPerBattle: "419,093 (+249,719)",
        famePerBattle: "190,156 (+4,083)"
      }
    }
  }

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 lg:py-24 flex justify-center">
      <GradientBackground />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Player Analysis
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Advanced analytics to measure and improve player performance
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-start">
          {/* Left Column - Made to take full width */}
          <div className="flex flex-col gap-4 justify-center lg:justify-end sticky top-8 w-full">
            {/* Tabs */}
            <div className="flex space-x-1 rounded-lg bg-muted p-1">
              <button
                onClick={() => setActiveTab('canplay')}
                className={cn(
                  "flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'canplay' 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-background/50"
                )}
              >
                /canplay
              </button>
              <button
                onClick={() => setActiveTab('playermmr')}
                className={cn(
                  "flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  activeTab === 'playermmr' 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-background/50"
                )}
              >
                /playermmr
              </button>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'canplay' ? (
              <WeaponAnalysisCard {...exampleAnalysis} />
            ) : (
              <PlayerMMRCard {...playerMMRAnalysis} />
            )}

            <div className="rounded-md border-1 border-primary/20 bg-gray-50 p-6 w-full">
              <h4 className="font-medium flex items-center gap-2 mb-3">
                <Trophy className="h-5 w-5 text-primary" />
                MMR System
              </h4>
              <p className="text-sm text-muted-foreground">
                Our unique MMR system analyzes player performance across multiple metrics,
                including kill participation, damage dealt, healing done, and combat
                efficiency. This provides a comprehensive view of player capabilities
                compared to both guildmates and competitors.
              </p>
            </div>
          </div>

          {/* Right Column - Made to take full width */}
          <div className="space-y-8 w-full">
            <div className="rounded-xl border bg-background/60 backdrop-blur-sm p-6 w-full">
              <h3 className="text-xl font-semibold mb-6">Analysis Commands</h3>
              <div className="grid gap-4">
                <CommandCard
                  command="competitors"
                  description="Set competitor guild IDs to compare against"
                  example="competitors add 1234567890"
                />
                <CommandCard
                  command="playermmr"
                  description="View player stats and MMR compared to competitors"
                  example="playermmr @player"
                />
                <CommandCard
                  command="canplay"
                  description="Check if you can perform well with a specific weapon"
                  example="canplay @player @role"
                />
                <CommandCard
                  command="mmrrank"
                  description="View internal guild MMR rankings by class"
                  example="mmrrank Healer"
                />
              </div>
            </div>

            <div className="rounded-xl border bg-background/60 backdrop-blur-sm p-6 w-full">
              <h3 className="text-xl font-semibold mb-6">Competitive Edge</h3>
              <div className="grid gap-6">
                <FeatureHighlight
                  icon={Scale}
                  title="Comparative Analysis"
                  description="Compare your performance against competitors and guildmates using our sophisticated MMR system"
                />
                <FeatureHighlight
                  icon={Target}
                  title="Performance Metrics"
                  description="Get detailed insights into player capabilities with specific weapons and roles"
                />
                <FeatureHighlight
                  icon={Users}
                  title="Guild-wide Rankings"
                  description="Internal ranking system that helps identify the best players for each class"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 