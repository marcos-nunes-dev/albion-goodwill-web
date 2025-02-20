"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GradientBackground } from "@/components/gradient-background"
import { TypedTestimonial } from "@/components/typed-testimonial"

export default function LoginPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "Lily has been instrumental in helping me land my dream job at a US tech company. The interview preparation and resume review services were invaluable!",
      author: "Rafael Silva",
      role: "Senior Software Engineer at TechCorp",
    },
    {
      quote: "The community support and daily webinars have helped me stay motivated and focused on my career goals.",
      author: "Marina Santos",
      role: "Full Stack Developer",
    },
    {
      quote:
        "Thanks to Lily's resume review service, I was able to highlight my skills effectively and attract better job opportunities.",
      author: "Lucas Oliveira",
      role: "Frontend Engineer",
    },
  ]

  const testimonialDuration = 10000 // 10 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, testimonialDuration)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen w-full bg-background flex">
      <GradientBackground />

      <div className="flex w-full">
        {/* Left side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          <div className="w-full max-w-md space-y-8">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
            </div>
            <div className="grid gap-6">
              <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300">
                <span className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Continue with Google
                </span>
              </Button>
              <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border border-gray-300">
                <span className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </span>
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or continue with email</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="bg-background/50 focus:bg-background transition-colors"
                    autoComplete="email"
                  />
                </div>
                <div className="grid gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-background/50 focus:bg-background transition-colors"
                    autoComplete="current-password"
                  />
                </div>
                <Button className="mt-2 w-full" variant="gradient">
                  Sign In
                </Button>
              </div>
              <div className="text-center text-sm">
                <Link
                  href="/forgot-password"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                Sign Up Now
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agree to Lily&apos;s{" "}
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right side - Testimonial */}
        <div className="hidden lg:flex lg:w-1/2 bg-muted items-center justify-center p-8">
          <TypedTestimonial
            quote={testimonials[currentTestimonial].quote}
            author={testimonials[currentTestimonial].author}
            role={testimonials[currentTestimonial].role}
            duration={testimonialDuration}
          />
        </div>
      </div>
    </div>
  )
}

