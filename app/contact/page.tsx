"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@pointrix.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: ["+1 (262) 612-6230", "+91 (977) 378-0879"],
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Coming Soon",
    description: "New location announcement coming soon",
  },
]

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,transparent_50%)] opacity-20 animate-in fade-in duration-1000" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">
              Have a project in mind or questions about our services? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-b py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={info.title}
                  className="border-border bg-card p-6 text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-accent/50 animate-in fade-in zoom-in-95 duration-500"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-500 hover:scale-110 hover:rotate-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold transition-colors duration-300 hover:text-accent">{info.title}</h3>
                  {Array.isArray(info.value) ? (
                    <div className="space-y-1">
                      {info.value.map((phone) => (
                        <p key={phone} className="text-sm font-medium">
                          {phone}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="mb-1 text-sm font-medium">{info.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <Card className="border-border bg-card p-8 animate-in fade-in zoom-in-95 duration-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500">
                    <Label htmlFor="name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-500">
                    <Label htmlFor="email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
                    <Label htmlFor="service">
                      Service of Interest <span className="text-destructive">*</span>
                    </Label>
                    <Select value={formData.service} onValueChange={handleServiceChange} required>
                      <SelectTrigger
                        id="service"
                        className="bg-background transition-all duration-300 focus:scale-[1.02]"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI Solutions</SelectItem>
                        <SelectItem value="app">App Development</SelectItem>
                        <SelectItem value="cloud">Cloud Services</SelectItem>
                        <SelectItem value="data">Data Engineering</SelectItem>
                        <SelectItem value="bi">Business Intelligence</SelectItem>
                        <SelectItem value="enterprise">Enterprise Applications</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none bg-background transition-all duration-300 focus:scale-[1.01]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="border-t py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Office Location</h2>
              <p className="text-muted-foreground">We're expanding! Our new office location will be announced soon.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-muted/30 animate-in fade-in zoom-in-95 duration-700 hover:shadow-xl transition-all">
              <div className="flex h-[400px] items-center justify-center">
                <div className="text-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-accent transition-transform duration-500 hover:scale-110 hover:rotate-6" />
                  <p className="text-lg font-semibold">Coming Soon</p>
                  <p className="text-muted-foreground">New location announcement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                  <span className="font-mono text-lg font-bold text-accent-foreground">P</span>
                </div>
                <span className="text-lg font-semibold">Pointrix</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <h3 className="mb-4 text-sm font-semibold">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#solutions"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#solutions"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    Data Engineering
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <h3 className="mb-4 text-sm font-semibold">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="transition-colors duration-300 hover:text-foreground">info@pointrix.com</li>
                <li className="transition-colors duration-300 hover:text-foreground">+1 (262) 612-6230</li>
                <li className="transition-colors duration-300 hover:text-foreground">+91 (977) 378-0879</li>
                <li className="transition-colors duration-300 hover:text-foreground">
                  Office Location
                  <br />
                  Coming Soon
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <p className="text-sm text-muted-foreground animate-in fade-in duration-700">
                &copy; 2025 Pointrix. All rights reserved.
              </p>
              <div className="flex items-center gap-4 animate-in fade-in duration-700 delay-100">
                <span className="text-sm font-medium text-muted-foreground">Connect with us:</span>
                <a
                  href="https://linkedin.com/company/pointrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-accent/50 hover:bg-accent/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
                </a>
                <a
                  href="https://x.com/pointrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-accent/50 hover:bg-accent/10"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
                </a>
                <a
                  href="https://instagram.com/pointrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card transition-all duration-300 hover:scale-110 hover:border-accent/50 hover:bg-accent/10"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
