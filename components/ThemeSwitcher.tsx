"use client"

import { useThemeStore } from "../store/theme"

function ThemeSwitcher() {
  const theme = useThemeStore((s) => s.theme)
  const toggleTheme = useThemeStore((s) => s.toggleTheme)
  const isDark = theme === "dark"

  return (
    <button
      id="theme-switcher"
      className="theme-switcher"
      onClick={toggleTheme}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}

export default ThemeSwitcher