"use client"

import { useEffect, useState } from "react"

function ThemeSwitcher() {
  // Initialize state with localStorage value
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme === "dark-mode"
    }
    return false
  })

  // Apply theme changes
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light-mode")
    }
  }, [dark])

  return (
    <button 
      id="theme-switcher" 
      className="theme-switcher" 
      onClick={() => setDark(!dark)}
    >
      Switch Theme
    </button>
  )
}

export default ThemeSwitcher