import { useContext } from "react"
import { Theme, ThemeContext, setThemeLS } from "./ThemeContext"

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    setThemeLS(newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
