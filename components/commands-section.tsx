import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CommandsSection() {
  return (
    <div className="flex justify-center bg-white">
      <section id="commands" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Commands
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore all available commands and their usage
          </p>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="general">
              <AccordionTrigger>General Commands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">/ping</h4>
                    <p className="text-sm text-muted-foreground">
                      Check if the bot is online and responsive.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/help</h4>
                    <p className="text-sm text-muted-foreground">
                      Display a list of all available commands and their
                      descriptions.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stats">
              <AccordionTrigger>Stats Commands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">/stats daily [user]</h4>
                    <p className="text-sm text-muted-foreground">
                      Check daily activity stats for yourself or a specified
                      user.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/stats weekly [user]</h4>
                    <p className="text-sm text-muted-foreground">
                      Check weekly activity stats for yourself or a specified
                      user.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/stats monthly [user]</h4>
                    <p className="text-sm text-muted-foreground">
                      Check monthly activity stats for yourself or a specified
                      user.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="roles">
              <AccordionTrigger>Role Commands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">/rolecheck</h4>
                    <p className="text-sm text-muted-foreground">
                      Check the activity of members in a specified role.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Usage: /rolecheck @role [daily|weekly]
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="settings">
              <AccordionTrigger>Guild Management Commands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">/settings setguildid</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the Albion guild ID.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/settings setprefix</h4>
                    <p className="text-sm text-muted-foreground">
                      Set a new command prefix.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/settings setguildname</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the name of the guild.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="player">
              <AccordionTrigger>Player Management Commands</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">/playermmr</h4>
                    <p className="text-sm text-muted-foreground">
                      Check the MMR of a player.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/register</h4>
                    <p className="text-sm text-muted-foreground">
                      Register your character in Albion.
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Usage: /register [america|europe|asia] [nickname]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">/unregister</h4>
                    <p className="text-sm text-muted-foreground">
                      Remove the registration of a player.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
