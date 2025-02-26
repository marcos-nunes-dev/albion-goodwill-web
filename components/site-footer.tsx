import { Bot } from "lucide-react";
import Link from "next/link";

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
              Your comprehensive Discord management solution for gaming
              communities.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3"></div>
            <div className="space-y-3"></div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://discord.com/users/219636732956508171"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Report a bug
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.com/api/oauth2/authorize?client_id=1341055866064867410&permissions=8&scope=bot%20applications.commands"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Add to Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                    <span className="text-xs bg-primary/20 text-primary px-1 py-0.5 rounded">
                      new
                    </span>
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
          <p className="text-center text-sm text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://discord.com/users/219636732956508171"
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="font-bold">Marcos Nunes</span>
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
