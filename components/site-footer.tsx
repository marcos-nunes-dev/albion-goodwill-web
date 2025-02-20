import { Bot } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <div className="flex justify-center border-t bg-background/80 backdrop-blur-sm">
      <footer className="container">
        <div className="flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="font-bold">GoodWill</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your comprehensive Discord management solution for gaming communities.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#commands" className="text-muted-foreground hover:text-foreground">
                  Commands
                </Link>
              </li>
              <li>
                <Link href="#stats" className="text-muted-foreground hover:text-foreground">
                  Stats
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/support" className="text-muted-foreground hover:text-foreground">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-muted-foreground hover:text-foreground">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GoodWill Bot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
