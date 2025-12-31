"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme, ...rest } = useNextTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])

  return {
    theme,
    setTheme,
    toggleTheme,
    ...rest,
  }
}
