import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <span className="font-bold">GoodWill</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/documentation"
              className="flex items-center gap-2 transition-colors hover:text-foreground/80"
            >
              Documentation
              <span className="text-xs bg-primary/20 text-primary px-1 py-0.5 rounded">new</span>
            </Link>
            <Link
              href="https://discord.com/users/219636732956508171"
              className="transition-colors hover:text-foreground/80"
            >
              Report a bug
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="default" size="lg" asChild>
            <Link
              href="https://discord.com/api/oauth2/authorize?client_id=1341055866064867410&permissions=8&scope=bot%20applications.commands"
              className="whitespace-nowrap"
            >
              <span>Add to Discord</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
