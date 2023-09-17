import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const getThemeLS = () => localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
export const setThemeLS = (theme: Theme) => { localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme) }
