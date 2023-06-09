import { type FC, useMemo, useState } from 'react'
import { Theme, ThemeContext, getThemeLS } from '../lib/ThemeContext'

const defaultTheme = getThemeLS() as Theme || Theme.LIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

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
