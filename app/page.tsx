import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommandsSection } from "@/components/commands-section"
import { StatsSection } from "@/components/stats-section"
import { SiteFooter } from "@/components/site-footer"
import { RegisterBenefitsSection } from "@/components/register-benefits-section"
import { StatsBenefitsSection } from "@/components/stats-benefits-section"
import { PlayerAnalysisSection } from "@/components/player-analysis-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RegisterBenefitsSection />
        <StatsBenefitsSection />
        <PlayerAnalysisSection />
        <CommandsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

