import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Users, TrendingUp, Heart, Zap, Award, Bell, Linkedin, Instagram } from "lucide-react"
import { XIcon } from "@/components/x-icon"
import Link from "next/link"

const jobListings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Artificial Intelligence",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    description:
      "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
    requirements: ["5+ years in ML/AI", "Python, TensorFlow, PyTorch", "Deep Learning expertise"],
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Cloud Services",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Design and implement scalable cloud infrastructure solutions for enterprise-level applications.",
    requirements: ["AWS/Azure/GCP certified", "5+ years cloud experience", "Infrastructure as Code"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "App Development",
    location: "New York, NY",
    type: "Full-time",
    level: "Mid-level",
    description: "Build modern web applications using React, Node.js, and cloud technologies.",
    requirements: ["3+ years full stack", "React, Node.js, TypeScript", "RESTful API design"],
  },
  {
    id: 4,
    title: "Data Engineer",
    department: "Data Engineering",
    location: "Austin, TX",
    type: "Full-time",
    level: "Mid-level",
    description: "Design and maintain data pipelines and warehousing solutions for large-scale data processing.",
    requirements: ["SQL & NoSQL databases", "ETL pipeline experience", "Python, Spark, Airflow"],
  },
  {
    id: 5,
    title: "Product Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Create intuitive and beautiful user experiences for enterprise software products.",
    requirements: ["4+ years UX/UI design", "Figma proficiency", "Design systems experience"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Cloud Services",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description: "Build and maintain CI/CD pipelines and infrastructure automation for enterprise applications.",
    requirements: ["Kubernetes & Docker", "CI/CD tools (Jenkins, GitLab)", "Infrastructure automation"],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages with equity options",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision coverage",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible hours and remote options",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Collaborate with talented professionals from around the world",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "Annual stipend for courses, conferences, and professional development",
  },
  {
    icon: Award,
    title: "Career Growth",
    description: "Clear advancement paths with mentorship and leadership opportunities",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,transparent_50%)] opacity-20 animate-in fade-in duration-1000" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Join Our Team & Shape the Future
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl">
              We're looking for talented individuals who are passionate about technology and want to make a real impact
              on businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Join Pointrix?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We believe in creating an environment where our team can thrive and do their best work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={benefit.title}
                  className="border-border bg-card p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-accent/50 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-500 hover:scale-110 hover:rotate-6">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 hover:text-accent">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Coming Soon Section */}
      <section className="py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Open Positions</h2>
            <p className="text-muted-foreground">
              We're currently preparing exciting new opportunities for talented professionals like you.
            </p>
          </div>

          <Card className="border-border bg-card p-12 text-center animate-in fade-in zoom-in-95 duration-700 hover:shadow-xl transition-all">
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 transition-all duration-500 hover:scale-110 hover:rotate-12">
              <Bell className="h-10 w-10 text-accent animate-pulse" />
            </div>
            <h3 className="mb-4 text-2xl font-bold tracking-tight">Exciting Opportunities Coming Soon</h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We're currently working on expanding our team and will be announcing new positions soon. Stay tuned for
              updates on career opportunities at Pointrix where you can make a real impact on businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">Get Notified</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Submit Your Resume</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center sm:p-12 animate-in fade-in zoom-in-95 duration-700 hover:shadow-2xl transition-all">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Want to Join Our Journey?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
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
