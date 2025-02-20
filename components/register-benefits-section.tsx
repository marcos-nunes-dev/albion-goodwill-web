import { Link2, Clock, UserCheck, Swords, Shield } from "lucide-react"
import { GradientBackground } from "./gradient-background"

const CommandExample = ({ command, description }: { command: string; description: string }) => (
  <div className="mt-1 flex items-center gap-2 rounded-md p-1.5 text-xs">
    <code className="rounded bg-muted/100 px-1.5 py-0.5 font-mono font-semibold text-primary">/{command}</code>
    <span className="text-muted-foreground">{description}</span>
  </div>
)

export function RegisterBenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative w-full overflow-hidden bg-transparent py-8 md:py-12 lg:py-24 flex justify-center"
    >
      <GradientBackground />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Registration Benefits</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Link your Discord and Albion accounts seamlessly with our reliable registration system
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Command demonstration */}
          <div className="flex-1 space-y-8">
            <div className="relative space-y-4 rounded-xl border p-6 backdrop-blur-sm bg-background/60">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Link2 className="h-5 w-5 text-primary" />
                Quick Registration
              </h3>
              <CommandExample 
                command="register YourAlbionName" 
                description="Link your Discord to your Albion character"
              />
              <p className="text-sm text-muted-foreground">
                No need to change your Discord nickname - just use one simple command to link your accounts
              </p>
            </div>

            <div className="relative space-y-4 rounded-xl border p-6 backdrop-blur-sm bg-background/60">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Swords className="h-5 w-5 text-primary" />
                Automatic Role Assignment
              </h3>
              <CommandExample 
                command="updatemembersrole @role" 
                description="Update roles based on player activity"
              />
              <p className="text-sm text-muted-foreground">
                Your roles are automatically updated based on your main class and activity data
              </p>
            </div>
          </div>

          {/* Right side - Benefits list */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center md:text-left">Why Register With Us?</h3>
              <ul className="space-y-8">
                <li className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium mb-2">24/7 Availability</p>
                    <p className="text-muted-foreground">
                      Our registration system is always online, unlike competitors that frequently experience downtime
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium mb-2">Smart Role Management</p>
                    <p className="text-muted-foreground">
                      Integrates with AlbionBB and AlbionBattle data to accurately identify and assign roles to players with their really experienced classes
                    </p>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium mb-2">Easy Server Verification</p>
                    <p className="text-muted-foreground">
                      Easily verify unregistered players in your server with a single command and a simple verification process
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 