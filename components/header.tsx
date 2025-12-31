"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { SearchDialog } from "@/components/search-dialog"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in slide-in-from-top-4 duration-700">
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="font-mono text-lg font-bold text-accent-foreground">P</span>
              </div>
              <span className="text-lg font-semibold">Pointrix</span>
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/#solutions"
                className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-0.5"
              >
                Solutions
              </Link>
              <Link
                href="/careers"
                className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-0.5"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-all duration-300 hover:text-foreground hover:translate-x-0.5"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="transition-all duration-300 hover:scale-105 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 transition-transform duration-300" />
              ) : (
                <Sun className="h-4 w-4 transition-transform duration-300" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 transition-all duration-300 hover:scale-105"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <Button size="sm" className="transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>
        </nav>
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
