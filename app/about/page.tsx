import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GradientBackground } from "@/components/gradient-background"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <GradientBackground />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                We want to build something I love
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A new community for Brazilians learning how to enter the US tech market in 2025
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-01-16%20173443-bGUohoFdkYqu2X2jRkqh2qz8Y83b5u.png"
                    alt="Tony Teshara"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-medium">Tony Teshara</p>
                    <p className="text-sm text-muted-foreground">December 06, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="lead">
                Writing from the heart here. I've always tried to be my vulnerable, honest self in everything I do. So I
                wanted to provide you an update on what I am up to.
              </p>

              <p>
                You might of seen me around LinkedIn the past few years posting jobs in Brazil for US startups. The
                truth is, when I started, I didn't know what the hell I was doing. I was a white guy from California who
                started poking around blindly in a foreign country without a map or guidepost on how to find talent.
                Somehow I figured shit out, and over the past 4 years have placed about 120 Brazilians developers, UX/UI
                Designers, and data scientists in various US companies.
              </p>

              <p>
                Now, I've done a ton of things over the years. Sold different SaaS solutions and products, and it was
                all good, but there was something about helping people find jobs that hit different. The idea of helping
                people in other countries feed their families just really made me feel good. I realized just not only
                how brilliant and innovative the people of Brazil were, but they were warm, accommodating, and
                supportive. Watching you all flourish and grow made me want to advocate and educate the US startup
                systems about the wonders of Brazil.
              </p>

              <p>
                As 2023 began, and the market turned, the sad reality was my business suffered badly. Pay offers became
                smaller and smaller, I could pay people less and less. Unemployment sky rocketed. I had to lay off my
                contractors. It broke my heart. You couldn't feed your families and frankly, I couldn't feed mine. I got
                sick. I was in the ER. My mental health deteriorated. I battled depression and suicide. I felt like a
                failure.
              </p>

              <p>
                It was the spring of 2024 where I started offering resume rewrites and interview Master Classes. It went
                well. I was teaching people in Brazil interview tips, resume highlights, and how to apply for the US job
                market. I felt purpose. People were telling me they were getting job offers. They felt their confidence
                rise.
              </p>

              <div className="my-12 p-6 bg-muted rounded-lg">
                <p className="text-2xl font-semibold mb-4">That's why I created Lily.</p>
                <p className="text-lg">Lily is my daughter. She is from Brazil. She is my heart and soul.</p>
                <p className="text-lg">
                  Lily is fearless. Lily isn't afraid to try anything. Lily loves unconditionally.
                </p>
                <p className="text-lg">Just like the people of Brazil.</p>
              </div>

              <h2 className="text-2xl font-bold mt-12">What I Plan to Offer:</h2>
              <ul className="space-y-2">
                <li>Interview Classes</li>
                <li>Interview Psychology</li>
                <li>Body Language Basics</li>
                <li>Resume Reviews</li>
                <li>Daily Webinars</li>
                <li>How to use Social Media</li>
                <li>How to Navigate Social Media</li>
                <li>First notification on jobs</li>
                <li>Plus whatever you want</li>
              </ul>

              <p>
                Full transparency, I plan on charging a VERY LOW membership fee. This isn't to get rich, but to support
                my family. I do various jobs from Uber to teaching English and I want to pour my heart and soul into
                this. I promise I will always provide value and never take you for granted.
              </p>

              <p>
                I plan to build transparently and ask for feedback. I will make myself as available as I humanly can
                because this is what I love.
              </p>

              <div className="text-center mt-16">
                <p className="text-2xl font-semibold mb-8">
                  I want you to be proud of me. I want Lily to be proud of me.
                </p>
                <Link href="/signup">
                  <Button 
                    size="lg" 
                    variant="default"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <span className="flex items-center">
                      <Heart className="mr-2 h-5 w-5" />
                      <span>Join Our Community</span>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

