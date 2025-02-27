import React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const Documentation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container relative mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="blur-circle blur-circle-blue absolute w-[500px] h-[500px] top-[-250px] left-[-100px]"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#4D07E3] to-[#FF4C8C] text-transparent bg-clip-text">
              Bot Documentation
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete guide to setup and use our Discord bot
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <a
              href="#getting-started"
              className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">🚀</span>
                <span className="font-medium">Getting Started</span>
              </div>
            </a>
            <a
              href="#registration"
              className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">📝</span>
                <span className="font-medium">Registration</span>
              </div>
            </a>
            <a
              href="#presence"
              className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">📊</span>
                <span className="font-medium">Presence Stats</span>
              </div>
            </a>
            <a
              href="#player-quality"
              className="group relative overflow-hidden rounded-lg border bg-card p-4 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">⚔️</span>
                <span className="font-medium">Player Quality</span>
              </div>
            </a>
          </div>

          {/* Getting Started Section */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
            <div className="grid gap-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">
                  1. Invite the Bot
                </h3>
                <p className="text-muted-foreground mb-4">
                  Click the button below to invite the bot to your server. Make
                  sure you have the "Manage Server" permission:
                </p>
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=1341055866064867410&permissions=8&scope=bot%20applications.commands"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Invite Bot
                </a>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">2. Initial Setup</h3>
                <p className="text-muted-foreground mb-4">
                  After inviting the bot, you'll need to configure a few
                  essential settings. You have two options:
                </p>

                <div className="space-y-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Option 1: Automatic Setup
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      Use this command to automatically create and configure all
                      necessary roles and permissions{" "}
                      <small>
                        (you still need to setup manually other values as Albion
                        Guild ID)
                      </small>
                      :
                    </p>
                    <code className="block rounded-md bg-background px-4 py-3 font-mono text-primary">
                      /setupcreateroles
                    </code>
                    <p className="text-sm text-muted-foreground mt-2">
                      This will create roles like "Verified", "Healer", "DPS"
                      ... and set up proper permissions automatically.
                    </p>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Option 2: Manual Setup
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      If you prefer to customize everything, use these commands
                      to configure settings manually:
                    </p>

                    <div className="mt-3 space-y-6">
                      <div>
                        <h5 className="font-medium mb-2">General Settings</h5>
                        <div className="space-y-2">
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setprefix prefix:!bot
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setguildname name:"My Guild"
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setguildid id:YOUR_GUILD_ID
                          </code>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Role Configuration</h5>
                        <div className="space-y-2">
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:tank role:@Tank
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:support role:@Support
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:healer role:@Healer
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:dpsmelee role:@DPS-Melee
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:dpsranged role:@DPS-Ranged
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setrole type:battlemount role:@BattleMount
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /setverifiedrole role:@Verified
                          </code>
                        </div>
                        <div className="mt-2 bg-muted rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              About Verified Role:
                            </span>{" "}
                            The Verified role is automatically assigned to users
                            when they link their Albion Online character using
                            the /register command. This role serves as a visual
                            indicator that a player has completed the account
                            linking process, helping guild officers track which
                            members have verified their game identities.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Competitor Guilds</h5>
                        <div className="space-y-2">
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /competitors add id:COMPETITOR_GUILD_ID_1
                          </code>
                          <code className="block rounded-md bg-background px-4 py-2 font-mono text-primary text-sm">
                            /competitors add id:COMPETITOR_GUILD_ID_2
                          </code>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Use{" "}
                          <code className="text-primary">
                            /competitors list
                          </code>{" "}
                          to view all competitors and
                          <code className="text-primary">
                            /competitors remove
                          </code>{" "}
                          to remove a guild.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-background/50 rounded border border-primary/20">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-primary">Tip:</span>{" "}
                        Configure settings in the order shown above. Start with
                        general settings, then roles, and finally competitor
                        guilds.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Important Note
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Make sure the bot's role is placed higher in the server's
                    role hierarchy than any roles it needs to manage. This
                    ensures the bot can properly assign and manage roles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Commands Section */}
          <section id="commands" className="mb-16 relative">
            <div className="blur-circle blur-circle-pink absolute w-[400px] h-[400px] right-[-200px]"></div>
            <h2 className="text-3xl font-bold mb-6">Commands</h2>
            <div className="grid gap-6">
              {/* Utility Commands First */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Utility Commands</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <code className="text-primary">/ping</code>
                    <p className="text-muted-foreground mt-2">
                      Check if the bot is working and view its response time.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <code className="text-primary">/refreshcommands</code>
                    <p className="text-muted-foreground mt-2">
                      Updates the list of available commands in case of bot
                      updates.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <code className="text-primary">/settings</code>
                    <p className="text-muted-foreground mt-2">
                      View all current guild settings and configurations.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <code className="text-primary">/setup</code>
                    <p className="text-muted-foreground mt-2">
                      Interactive setup wizard to configure all guild settings
                      at once.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <code className="text-primary">/setupcreateroles</code>
                    <p className="text-muted-foreground mt-2">
                      Automatically creates and configures all required roles
                      for the bot.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <code className="text-primary">/help [command]</code>
                    <p className="text-muted-foreground mt-2">
                      Shows detailed instructions for a specific command. Use
                      without [command] to see all commands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Section */}
          <section id="configuration" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Registration</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Player Registration
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our registration system is flexible and doesn&apos;t require
                    users to match their Discord username with their in-game
                    name, just if you want to use the command{" "}
                    <code className="text-primary">
                      /setsyncnickname [enable:true/false]
                    </code>{" "}
                    you can sync the nickname with the in-game name. Without
                    this command turned on players can freely change their
                    Discord nickname without affecting their registration. The
                    Verified role serves as an indicator that a player has
                    successfully linked their Albion Online character to their
                    Discord account.{" "}
                    <small>
                      *Note that this does not ensure that the player is in your
                      guild or not.
                    </small>
                  </p>
                  <div className="text-muted-foreground mb-12">
                    Since the Albion APIs are instable and we can't relly on
                    their data, this bot use the ingame members list to manage
                    permission of players that no longer belongs to the guild.
                    Use the command{" "}
                    <code className="text-primary">
                      /membersdiff @membersRole &lt;members_txt&gt;
                    </code>{" "}
                    to compare your Discord server members against your Albion
                    Online guild roster to identify discrepancies and remove the
                    role from players that no longer belongs to the guild.
                  </div>

                  <div className="bg-muted rounded-lg p-4 mt-3 space-y-3 mb-12">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">
                        @verified:
                      </span>{" "}
                      This is a role that can be created automatically by the
                      /setupcreateroles command or manually by using /setup or
                      /setverifiedrole. This Role is meant to flag users that
                      has their albion nickname linked to their discord account,
                      being a guild member OR NOT.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">@member:</span>{" "}
                      We advise you to have a member role. This is pretty
                      standard practice for guilds. Use the @verified to keep
                      track of who is verified and who is not and the @members
                      role to keep track of who is in the guild and who is not.
                      The role @member is not created or managed by the bot.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /register [region] [player_name]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Links your Discord account with your Albion character
                        and assigns the Verified role to confirm the linkage.
                      </p>
                      <div className="bg-muted rounded-lg p-4 mt-3 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            Note:
                          </span>{" "}
                          This command uses the MurderLedger API to verify
                          player data. Recently created characters might not be
                          found immediately in the database.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            Verified Role:
                          </span>{" "}
                          The Verified role indicates that a player has
                          successfully linked their Albion Online character to
                          their Discord account. This helps guild officers
                          identify which members have completed the registration
                          process.
                        </p>
                      </div>
                    </div>
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /registerhim @user [region] [player_name]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Registers a user as a member of the guild. This command
                        is meant to be used by admins.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <code className="text-primary">/unregister</code>
                      <p className="text-muted-foreground mt-2">
                        Removes the link between your Discord account and Albion
                        character, and removes the Verified role.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /checkregistrations @role
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Lists all members with the specified role who haven't
                        registered their Albion character yet.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /updatemembersrole @role
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Automatically updates role assignments for all members
                        based on their main class in Albion Online{" "}
                        <small>
                          (We use Albion Battles and Albion BB history for this)
                        </small>
                        .
                        <span className="block text-sm mt-1">
                          This helps keep role assignments synchronized with
                          players' current main roles in-game.
                        </span>
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /membersdiff @membersRole &lt;members_txt&gt;
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Compares your Discord server members against your Albion
                        Online guild roster to identify discrepancies.{" "}
                        <small>
                          Use your member role as we advise you in the summary
                          of registration.
                        </small>
                      </p>
                      <div className="bg-muted rounded-lg p-4 mt-3 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            How to use:
                          </span>
                        </p>
                        <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-4">
                          <li>
                            In Albion Online, press &ldquo;G&rdquo; to open
                            guild panel
                          </li>
                          <li>Copy the entire members list to a text file</li>
                          <li>Upload the text file with the command</li>
                        </ol>
                        <p className="text-sm text-muted-foreground mt-2">
                          <span className="font-medium text-primary">
                            The command will show:
                          </span>
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                          <li>
                            Discord users with the members role who are no
                            longer in the guild
                          </li>
                          <li>
                            Guild members who haven&apos;t registered their
                            Discord account yet
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          This helps keep your Discord roles synchronized with
                          your actual guild roster and identify members who
                          still need to register. You can use the action buttons
                          to remove all players that are not in the guild from
                          the member role that you used in the command.
                        </p>
                      </div>
                    </div>                    
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /setsyncnickname [enable:true/false]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Toggles automatic synchronization of Discord nicknames
                        with Albion Online character names.
                      </p>
                      <div className="bg-muted rounded-lg p-4 mt-3 space-y-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            When enabled:
                          </span>
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                          <li>
                            Members&apos; Discord nicknames will be
                            automatically set to match their registered Albion
                            character name
                          </li>
                          <li>
                            Members will not be able to change their nicknames
                            manually
                          </li>
                          <li>
                            The bot will manage nickname permissions
                            automatically
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          <span className="font-medium text-primary">
                            When disabled:
                          </span>
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                          <li>
                            Members can set their Discord nicknames to whatever
                            they prefer
                          </li>
                          <li>
                            Nickname change permissions are restored to members
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          This feature helps maintain clear identification of
                          players in your Discord server by ensuring their
                          nicknames match their in-game names.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                    <li>• No Discord nickname requirements</li>
                    <li>• Works across any guild</li>
                    <li>• Simple one-command registration</li>
                    <li>• Easy to update if you change characters</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Presence Stats Section */}
          <section id="presence" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Presence Stats</h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Activity Tracking
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Track and analyze member activity in voice channels to help
                    manage guild participation and engagement.
                  </p>

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <code className="text-primary">/presencecheck @role</code>
                      <p className="text-muted-foreground mt-2">
                        Displays comprehensive activity statistics for all
                        members with the specified role.
                        <span className="block text-sm mt-1">
                          Shows detailed breakdown including:
                        </span>
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc pl-4">
                        <li>Time spent online in voice channels</li>
                        <li>AFK time tracking</li>
                        <li>Time spent muted</li>
                        <li>Message count in text channels</li>
                      </ul>
                      <div className="bg-muted rounded-lg p-3 mt-3">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            Activity Classification:
                          </span>{" "}
                          Members are classified as active or inactive based on
                          a dynamic threshold. This threshold is calculated from
                          the average activity of top performers in your guild.
                          Members with activity below 10% of this threshold are
                          marked as inactive.
                        </p>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /presencedaily [user]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Shows detailed activity stats for the specified user
                        over the last 24 hours.
                        <span className="block text-sm mt-1">
                          Includes total time spent in voice channels and
                          activity patterns.
                        </span>
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /presenceweekly [user]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Displays a weekly activity report for the specified
                        user.
                        <span className="block text-sm mt-1">
                          Shows day-by-day breakdown of voice channel activity.
                        </span>
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /presencemonthly [user]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Generates a monthly activity summary for the specified
                        user.
                        <span className="block text-sm mt-1">
                          Provides long-term activity trends and participation
                          patterns.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    About Activity Tracking
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                    <li>• Tracks time spent in voice channels</li>
                    <li>• Provides detailed statistics per user</li>
                    <li>• Helps identify active and inactive members</li>
                    <li>• Supports role-based activity monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Player Quality Section */}
          <section id="player-quality" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Player Quality Progression
            </h2>
            <div className="rounded-lg border bg-card p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Performance Analysis
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Track and analyze player performance, weapon proficiency,
                    and MMR rankings to help improve guild quality.
                  </p>

                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /canplay [player_name] [role] [alltime]
                        [compare_to=player1,player2,...]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Analyzes a player's weapon proficiency and provides
                        detailed performance comparisons.
                      </p>
                      <div className="bg-muted rounded-lg p-3 mt-3 space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              How it works:
                            </span>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>
                              Lists all weapons the player has experience with
                              for the specified role
                            </li>
                            <li>
                              Prompt to the user to pick one of the weapons to
                              compare with
                            </li>
                            <li>
                              Calculates an overall performance score based on
                              multiple metrics
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              Comparison Metrics:
                            </span>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>Combat Performance (K/D Ratio)</li>
                            <li>Win Rate Percentage</li>
                            <li>Fame per Battle</li>
                            <li>Average Item Power</li>
                            <li>Battle Experience (number of battles)</li>
                          </ul>
                        </div>

                        <div className="bg-background/50 rounded p-3 text-sm text-muted-foreground mt-2">
                          <p className="font-medium text-primary mb-2">
                            Example Output:
                          </p>
                          <div className="overflow-x-auto">
                            <pre className="text-xs whitespace-pre-wrap break-words font-mono bg-black/10 p-4 rounded-lg">
                              {`Weapon Comparison - Hallowfall
Comparing sabiopimpolho's performance with top Healer players using the same weapon
(All-time statistics)

sabiopimpolho
IP: 1537 | K/D: -9.15 | Battles: 1506 | Win Rate: 92.1% | Kill Fame: 401,008,322

Top Players Comparison
───────────────────────────────────────────────────────────────────────────────
sabiopimpolho: 
  IP: 1537 | K/D: -9.15 | Battles: 1506 | Win Rate: 92.1% | Kill Fame: 401M
Gantzone: 
  IP: 1516 | K/D: -25.00 | Battles: 342 | Win Rate: 92.7% | Kill Fame: 84M
Meneguel: 
  IP: 1463 | K/D: -3.84 | Battles: 868 | Win Rate: 91.6% | Kill Fame: 186M
OvoGraudo: 
  IP: 1440 | K/D: -3.14 | Battles: 285 | Win Rate: 92.3% | Kill Fame: 56M
Shippai: 
  IP: 1468 | K/D: -3.06 | Battles: 865 | Win Rate: 94.0% | Kill Fame: 212M

Performance Analysis
Overall Score: 100% (Exceptional)

Detailed Metrics:
Metric          You    Avg    Score
───────────────────────────────────
Combat (K/D)   -9.15   -8.84   100%
Win Rate       92.1%   92.5%    99%
Fame/Battle    266.3K  233.9K  100%
Item Power     1537    1485    100%
Experience     1506    773     100%

Summary: Found 5 players with Hallowfall experience.`}
                            </pre>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary">
                            Note:
                          </span>{" "}
                          Without specified comparison players, the command
                          automatically compares with the top performers in your
                          guild for that role and weapon.
                        </p>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <code className="text-primary">/mmrrank [role]</code>
                      <p className="text-muted-foreground mt-2">
                        Displays MMR (Matchmaking Rating) rankings for guild
                        members by role.
                      </p>
                      <div className="bg-muted rounded-lg p-3 mt-3 space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              Ranking System:
                            </span>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>
                              Shows rankings for each role (Healer, Tank, DPS,
                              etc.)
                            </li>
                            <li>
                              Only includes players with matches in the last 30
                              days
                            </li>
                            <li>
                              Requires matches with 20+ players to be considered
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              MMR Calculation:
                            </span>{" "}
                            Each role has its own specialized MMR formula that
                            considers role-specific metrics:
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>
                              Healers: Focuses on healing done, assists, and
                              survival rate
                            </li>
                            <li>
                              Tanks: Prioritizes damage taken, crowd control,
                              and engagement stats
                            </li>
                            <li>
                              DPS: Balances damage dealt, kills, and objective
                              participation
                            </li>
                            <li>and more...</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <code className="text-primary">
                        /playermmr [player_name]
                      </code>
                      <p className="text-muted-foreground mt-2">
                        Shows detailed MMR statistics for a specific player,
                        including comparisons with both guild members and
                        competitor guilds.
                      </p>
                      <div className="bg-muted rounded-lg p-3 mt-3 space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              Performance Analysis:
                            </span>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>Shows player's MMR for each role they play</li>
                            <li>
                              Compares performance with guild members in the
                              same role
                            </li>
                            <li>
                              Provides comparison against players from
                              competitor guilds
                            </li>
                            <li>
                              Helps evaluate player performance in a broader
                              context
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">
                              Competitive Analysis:
                            </span>
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4 mt-2">
                            <li>
                              Internal Ranking: Position within your guild
                            </li>
                            <li>
                              External Ranking: Standing among competitor guilds
                            </li>
                            <li>
                              Performance Gap Analysis: Shows areas where player
                              stands out or needs improvement compared to
                              competitors
                            </li>
                          </ul>
                        </div>

                        <p className="text-sm text-muted-foreground mt-2">
                          <span className="font-medium text-primary">
                            Note:
                          </span>{" "}
                          This command uses the competitor guilds configured in
                          your server settings for external comparisons. Make
                          sure to keep your competitor list updated for accurate
                          analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    About Performance Tracking
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2 mt-2">
                    <li>• Based on actual combat performance data</li>
                    <li>• Tracks progress over time</li>
                    <li>• Helps with role assignments</li>
                    <li>• Identifies areas for improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="rounded-lg border bg-card p-6 relative overflow-hidden">
            <div className="blur-circle blur-circle-blue absolute w-[300px] h-[300px] bottom-[-150px] right-[-150px]"></div>
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              If you need help or want to report a bug, shoot me a message on
              Discord:
            </p>
            <a
              href="https://discord.com/users/219636732956508171"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#4D07E3] to-[#FF4C8C] px-6 py-2 font-medium text-white hover:opacity-90"
            >
              Contact on Discord
            </a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Documentation;
