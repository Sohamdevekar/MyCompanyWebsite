import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Brain,
  Smartphone,
  Cloud,
  Database,
  BarChart3,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Instagram,
  Zap,
  Rocket,
  Users,
  Target,
} from "lucide-react"
import Link from "next/link"
import { XIcon } from "@/components/x-icon"
import firebaseApp from "@/firebase"

const solutions = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Harness the power of artificial intelligence and machine learning to transform your business operations and decision-making processes.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build cutting-edge mobile and web applications that deliver exceptional user experiences across all platforms and devices.",
    features: ["Native iOS & Android", "Progressive Web Apps", "Cross-Platform Solutions", "UI/UX Design"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Migrate, manage, and optimize your infrastructure with enterprise-grade cloud solutions for maximum scalability and reliability.",
    features: ["Cloud Migration", "Infrastructure Management", "DevOps & CI/CD", "Multi-Cloud Strategy"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Design and implement robust data pipelines and architectures that ensure your data is accessible, reliable, and actionable.",
    features: ["Data Warehousing", "ETL Pipelines", "Real-time Processing", "Data Quality Management"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights with advanced analytics, reporting, and visualization solutions.",
    features: ["Custom Dashboards", "Predictive Modeling", "Performance Metrics", "Self-Service Analytics"],
  },
  {
    icon: Boxes,
    title: "Enterprise Applications",
    description:
      "Implement and customize enterprise software solutions that streamline operations and drive business growth.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "System Integration"],
  },
]

const startupEdge = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "No bureaucracy, just results. We move at startup speed to deliver your projects faster.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We're building the future, not maintaining the past. Cutting-edge tech in every solution.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "Direct access to decision makers. Your project matters, and you'll always know it.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Laser Focused",
    description: "100% dedicated to your success. Your wins are our wins, and we're hungry for both.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b w-full">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--accent)_0%,transparent_50%)] opacity-20 animate-in fade-in duration-1000" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="mb-6 inline-flex items-center rounded-full border bg-secondary px-4 py-1.5 text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent">Enterprise IT Solutions</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Transform Your Business with <span className="text-accent">Next-Gen Technology</span>
            </h1>
            <p className="mb-10 text-lg text-muted-foreground text-pretty sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Empowering organizations with cutting-edge AI, cloud infrastructure, and data solutions that drive
              innovation and accelerate digital transformation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl">
            <div className="mb-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <h2 className="text-2xl font-bold sm:text-3xl">
                The <span className="text-accent">Startup Advantage</span>
              </h2>
              <p className="mt-2 text-muted-foreground">
                Why choose a startup? Because we're hungry, fast, and fearless.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {startupEdge.map((edge, index) => {
                const Icon = edge.icon
                return (
                  <Card
                    key={edge.title}
                    className="group relative overflow-hidden border bg-card p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-in fade-in zoom-in-95"
                    style={{ animationDelay: `${800 + index * 100}ms`, animationDuration: "700ms" }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${edge.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    />
                    <div className="relative">
                      <div
                        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${edge.gradient} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold transition-all duration-300 group-hover:text-accent">
                        {edge.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{edge.description}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="border-b py-24 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Comprehensive IT Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From AI-powered solutions to enterprise applications, we deliver technology that propels your business
              forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card
                  key={solution.title}
                  className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/10 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-accent">
                      {solution.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm transition-transform duration-300 hover:translate-x-1"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b py-24 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center sm:p-12 animate-in fade-in zoom-in-95 duration-700 hover:shadow-2xl transition-all">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/careers">Explore Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 w-full">
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
