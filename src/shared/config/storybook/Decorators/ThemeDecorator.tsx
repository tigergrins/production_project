import { type Story } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProviders'

export const ThemeDecorator = (theme: Theme) => (StorybookComponent: Story) => {
  return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StorybookComponent/>
			</div>
		</ThemeProvider>
  )
}
