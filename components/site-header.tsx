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
              href="#features"
              className="transition-colors hover:text-foreground/80"
            >
              Documentation
            </Link>
            <Link
              href="#commands"
              className="transition-colors hover:text-foreground/80"
            >
              Report a bug
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="default" size="lg" asChild>
            <Link
              href="https://discord.com/oauth2/authorize"
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
