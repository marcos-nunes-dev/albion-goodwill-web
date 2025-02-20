"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GradientBackground } from "@/components/gradient-background"
import { TypedTestimonial } from "@/components/typed-testimonial"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  firstName: string
  lastName: string
  expertise: string
  email: string
  password: string
}

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    expertise: "",
    email: "",
    password: "",
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      quote:
        "Joining Lily was the best career decision I've made. The community and resources helped me land a job at a top US tech company!",
      author: "Carlos Mendes",
      role: "Backend Developer at TechGiant",
    },
    {
      quote:
        "The interview preparation and resume review services at Lily are top-notch. They truly understand the needs of Brazilian developers.",
      author: "Ana Rodrigues",
      role: "Full Stack Engineer",
    },
    {
      quote:
        "Lily's network opened doors I never thought possible. I'm now working remotely for a Silicon Valley startup!",
      author: "Pedro Alves",
      role: "Mobile App Developer",
    },
  ]

  const testimonialDuration = 10000 // 10 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, testimonialDuration)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNextStep = () => {
    setStep(2)
  }

  const handlePrevStep = () => {
    setStep(1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Redirect to a welcome page or dashboard
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  }

  return (
    <div className="min-h-screen w-full bg-background flex">
      <GradientBackground />

      <div className="flex w-full">
        {/* Left side - Sign Up Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          <div className="w-full max-w-md space-y-8">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
              <p className="text-sm text-muted-foreground">
                Join our community and start your journey to a global tech career
              </p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" {...fadeInUp}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-1">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          className="bg-background/50 focus:bg-background transition-colors"
                          autoComplete="given-name"
                          required
                        />
                      </div>
                      <div className="grid gap-1">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="bg-background/50 focus:bg-background transition-colors"
                          autoComplete="family-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-1 mt-4">
                      <label
                        htmlFor="expertise"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Area of Expertise
                      </label>
                      <Input
                        id="expertise"
                        name="expertise"
                        type="text"
                        value={formData.expertise}
                        onChange={handleInputChange}
                        placeholder="e.g., Frontend, Backend, Full Stack"
                        className="bg-background/50 focus:bg-background transition-colors"
                        required
                      />
                    </div>
                    <Button type="button" onClick={handleNextStep} className="mt-6 w-full" variant="gradient">
                      Next
                    </Button>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="step2" {...fadeInUp}>
                    <div className="grid gap-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="bg-background/50 focus:bg-background transition-colors"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className="grid gap-1 mt-4">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Password
                      </label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="bg-background/50 focus:bg-background transition-colors"
                        autoComplete="new-password"
                        required
                      />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button type="button" onClick={handlePrevStep} className="w-full" variant="outline">
                        Back
                      </Button>
                      <Button type="submit" className="w-full" variant="gradient">
                        Sign Up
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign In
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              By signing up, you agree to Lily&apos;s{" "}
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

