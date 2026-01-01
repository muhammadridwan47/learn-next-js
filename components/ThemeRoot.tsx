"use client"

import { ReactNode } from "react"
import { useThemeStore } from "../store/theme"

export default function ThemeRoot({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme)
  const themeClass = theme === "dark" ? "dark-mode" : ""

  // Wrapper replicates body's flex column so footer can stick to bottom
  return (
    <div
      className={themeClass}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {children}
    </div>
  )
}