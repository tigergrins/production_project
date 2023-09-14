import { type FC, useMemo, useState } from 'react'
import { Theme, ThemeContext, getThemeLS } from '../lib/ThemeContext'

const defaultTheme = getThemeLS() as Theme || Theme.LIGHT

interface ThemeProviderProps {
	initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const {
		children,
		initialTheme,
	} = props

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
