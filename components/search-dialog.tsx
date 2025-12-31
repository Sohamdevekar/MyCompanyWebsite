"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Search,
  Brain,
  Smartphone,
  Cloud,
  Database,
  BarChart3,
  Boxes,
  Briefcase,
  Mail,
  type FileText,
} from "lucide-react"

interface SearchResult {
  title: string
  description: string
  href: string
  icon: typeof FileText
  category: string
}

const searchData: SearchResult[] = [
  {
    title: "AI Solutions",
    description: "Artificial Intelligence & Machine Learning services for intelligent automation",
    href: "/#solutions",
    icon: Brain,
    category: "Solutions",
  },
  {
    title: "App Development",
    description: "Custom mobile and web application development with modern frameworks",
    href: "/#solutions",
    icon: Smartphone,
    category: "Solutions",
  },
  {
    title: "Cloud Services",
    description: "Cloud infrastructure, migration, and optimization services",
    href: "/#solutions",
    icon: Cloud,
    category: "Solutions",
  },
  {
    title: "Data Engineering",
    description: "Data pipelines, warehousing, and ETL solutions for enterprise data",
    href: "/#solutions",
    icon: Database,
    category: "Solutions",
  },
  {
    title: "Business Intelligence",
    description: "Analytics, reporting, and data visualization for actionable insights",
    href: "/#solutions",
    icon: BarChart3,
    category: "Solutions",
  },
  {
    title: "Enterprise Applications",
    description: "ERP, CRM, and workflow automation solutions for businesses",
    href: "/#solutions",
    icon: Boxes,
    category: "Solutions",
  },
  {
    title: "Senior AI Engineer",
    description: "Lead the development of cutting-edge AI solutions - San Francisco, CA",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "Cloud Solutions Architect",
    description: "Design scalable cloud infrastructure - Remote position",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "Full Stack Developer",
    description: "Build modern web applications with React and Node.js - New York, NY",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "Data Engineer",
    description: "Design data pipelines and warehousing solutions - Austin, TX",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "Product Designer",
    description: "Create intuitive user experiences for enterprise products - San Francisco, CA",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "DevOps Engineer",
    description: "Build CI/CD pipelines and infrastructure automation - Remote",
    href: "/careers",
    icon: Briefcase,
    category: "Careers",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for project inquiries",
    href: "/contact",
    icon: Mail,
    category: "Company",
  },
  {
    title: "Careers at Pointrix",
    description: "Join our team and shape the future of technology",
    href: "/careers",
    icon: Briefcase,
    category: "Company",
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>(searchData)
  const router = useRouter()

  useEffect(() => {
    if (!query) {
      setResults(searchData)
      return
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )
    setResults(filtered)
  }, [query])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  const handleSelect = (href: string) => {
    onOpenChange(false)
    setQuery("")
    router.push(href)
  }

  // Group results by category
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = []
      }
      acc[result.category].push(result)
      return acc
    },
    {} as Record<string, SearchResult[]>,
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center border-b px-4">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search solutions, careers, or pages..."
            className="border-0 shadow-none focus-visible:ring-0"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="ml-2 text-xs text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-110"
            >
              Clear
            </button>
          )}
        </div>
        <div className="max-h-[500px] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
              <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
              <p className="text-sm font-medium">No results found</p>
              <p className="mt-1 text-sm text-muted-foreground">Try searching for solutions, careers, or contact</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedResults).map(([category, categoryResults]) => (
                <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {category}
                  </div>
                  <div className="space-y-1">
                    {categoryResults.map((result, index) => {
                      const Icon = result.icon
                      return (
                        <button
                          key={result.href + result.title}
                          onClick={() => handleSelect(result.href)}
                          className="flex w-full items-start gap-3 rounded-md px-3 py-3 text-left transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] animate-in fade-in slide-in-from-left-4"
                          style={{ animationDelay: `${index * 50}ms`, animationDuration: "400ms" }}
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                            <Icon className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">{result.title}</p>
                            <p className="text-sm text-muted-foreground">{result.description}</p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t px-4 py-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono transition-all duration-300 hover:scale-110">
                  ↑
                </kbd>
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono transition-all duration-300 hover:scale-110">
                  ↓
                </kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono transition-all duration-300 hover:scale-110">
                  ↵
                </kbd>
                <span>Select</span>
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono transition-all duration-300 hover:scale-110">
                Esc
              </kbd>
              <span>Close</span>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
