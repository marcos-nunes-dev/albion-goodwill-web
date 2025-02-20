import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedBackground } from "./animated-background"
import Link from "next/link"
import { Discord3DBackground } from './discord-3d-background'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden">
      <Discord3DBackground />
      <AnimatedBackground />
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24 relative z-10">
        <a href="#features" className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse mr-2"></div>
            <span>Your Ultimate Discord Management Bot</span>
          </div>
        </a>
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
          Empower Your Discord
          <br className="hidden sm:inline" />
          Server Management
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Comprehensive stats tracking, role management, and player verification system designed for gaming communities.
        </p>
        <Link href="https://discord.com/oauth2/authorize">
          <Button size="lg" variant="ghost" className="whitespace-nowrap">
            <span className="flex items-center justify-center">
              Add to Discord
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </Link>
      </div>
    </section>
  )
}

