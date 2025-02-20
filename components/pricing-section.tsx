import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Simple Pricing</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Affordable plans to help you achieve your career goals
        </p>
      </div>
      <div className="grid w-full items-start gap-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Get started with basic features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$0/month</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Access to community forums</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Basic interview preparation resources</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Limited access to webinars</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Job board access</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="gradient">
              Sign Up
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Monthly</CardTitle>
            <CardDescription>Unlock full features and support</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$19/month</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Access to all interview classes</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Resume review (1/month)</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Daily webinars</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Community access</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="gradient">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Annual</CardTitle>
            <CardDescription>Best value: Save 20% annually</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$180/year</div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>All Monthly plan features</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Priority access to job opportunities</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>1-on-1 mentoring session (quarterly)</span>
              </div>
              <div className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Extended resume reviews (2/month)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="gradient">
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

