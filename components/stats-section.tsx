import { Card } from "@/components/ui/card"
import { Bot, Server, Users } from "lucide-react"

export function StatsSection() {
  return (
    <section id="stats" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Bot Statistics</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Growing community of servers and users
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:gap-8 mt-8">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Server className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold">1,000+</h3>
              <p className="text-sm text-muted-foreground">Active Servers</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold">100,000+</h3>
              <p className="text-sm text-muted-foreground">Registered Users</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Bot className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

