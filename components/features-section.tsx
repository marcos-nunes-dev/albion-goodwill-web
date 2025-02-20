import {
  BarChart2,
  Shield,
  Users,
  Command,
  Settings,
  Star,
} from "lucide-react";
import { GradientBackground } from "./gradient-background";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-slate-50/50 dark:bg-transparent py-8 md:py-12 lg:py-24 flex justify-center"
    >
      <GradientBackground />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to manage your Discord server effectively
          </p>
        </div>
        <div className="mt-8 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <BarChart2 className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Track Member Activity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track member activity with daily, weekly, and monthly
                  statistics.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <Shield className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Role Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  Easily manage roles and permissions with automated
                  verification.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Player Registration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Streamlined player registration and verification system.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <Command className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Intuitive Commands
                </h3>
                <p className="text-sm text-muted-foreground">
                  Easy-to-use slash commands for all bot functions.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <Settings className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Custom Settings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Flexible configuration options for your server's needs.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/2 to-primary/5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
            <div className="relative flex h-[180px] flex-col justify-between rounded-md p-6">
              <Star className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                  Leaderboards
                </h3>
                <p className="text-sm text-muted-foreground">
                  Track and display member rankings and achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
