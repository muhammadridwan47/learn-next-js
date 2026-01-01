"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Theme = "light" | "dark"

export interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => {
        const current = get().theme
        set({ theme: current === "light" ? "dark" : "light" })
      },
    }),
    {
      name: "theme", // persisted in localStorage
    }
  )
)