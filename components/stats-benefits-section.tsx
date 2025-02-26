import { BarChart2, MessageSquare, Users2, Clock, Trophy } from "lucide-react";
import { GradientBackground } from "./gradient-background";
import { ActivityTrackingCard } from "./activity-tracking-card";

const StatCommand = ({
  command,
  description,
}: {
  command: string;
  description: string;
}) => (
  <div className="flex items-center gap-3 text-sm">
    <code className="rounded bg-muted/100 px-2 py-1 font-mono font-semibold text-primary">
      /{command}
    </code>
    <span className="text-muted-foreground">{description}</span>
  </div>
);

const ActivityMetric = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-3 rounded-lg border bg-background/60 p-3">
    <div className="rounded-md bg-primary/10 p-2">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

export function StatsBenefitsSection() {
  const activityTracking = {
    playerName: "Sabiopimpolho",
    date: "19 de fevereiro de 2025",
    voiceActivity: {
      totalTime: "6h 10m",
      activeTime: "4h 1m",
      afkTime: "2h 3m",
      mutedTime: "0m",
    },
    chatActivity: {
      messagesSent: 4,
    },
    activityDistribution: {
      active: 65,
      afk: 35,
    },
    lastUpdated: "Hoje às 16:50",
  };

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 lg:py-24 flex justify-center bg-slate-50/50">
      <GradientBackground />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Activity Tracking
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Keep your guild active and engaged with comprehensive activity
            tracking
          </p>
        </div>

        <div className="mt-16">
          {/* Activity Tracking Card */}
          <div className="max-w-[58rem] mx-auto mb-12">
            <ActivityTrackingCard {...activityTracking} />
          </div>

          {/* Top Section - Activity Metrics */}
          <div className="grid gap-4 md:grid-cols-3 mb-12">
            <ActivityMetric
              icon={MessageSquare}
              title="Message Activity"
              description="Track chat engagement across all channels"
            />
            <ActivityMetric
              icon={Clock}
              title="Voice Time"
              description="Monitor voice channel participation and AFK time"
            />
            <ActivityMetric
              icon={Users2}
              title="Member Presence"
              description="Identify active and inactive members"
            />
          </div>

          {/* Middle Section - Commands */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Commands List */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Activity Commands</h3>
                <div className="space-y-3 rounded-xl border p-4 bg-background/60">
                  <StatCommand
                    command="presencecheck @role"
                    description="Check inactive members in a role"
                  />
                  <StatCommand
                    command="presencedaily"
                    description="Daily activity summary"
                  />
                  <StatCommand
                    command="presenceweekly"
                    description="Weekly activity report"
                  />
                  <StatCommand
                    command="presencemonthly"
                    description="Monthly activity overview"
                  />
                </div>
                <div className="max-w-[90%] ml-[20px]">
                  <small className="text-muted-foreground">
                    *We identify inactive members using a dynamic algorithm that
                    takes your top 10 most active members avg and use then as
                    threshold. Inactive members has activity lower then 10% of
                    the threshold.
                  </small>
                </div>
              </div>
            </div>

            {/* Benefits Description */}
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-xl font-semibold">Why Track Activity?</h3>
              <div className="space-y-4">
                <div className="rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart2 className="h-5 w-5 text-primary" />
                    <h4 className="font-medium">Comprehensive Analytics</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Unlike generic paid stats bots, Goodwill provides detailed
                    insights into your members' activity patterns, helping you
                    make informed decisions about your guild's organization.
                  </p>
                </div>
                <div className="rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <h4 className="font-medium">Engagement Tracking</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Identify your most engaged members and those who might need
                    encouragement to participate more actively in guild
                    activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
