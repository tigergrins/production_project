import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProviders'

export const ThemeDecorator = (theme: Theme) => (StorybookComponent: Story) => {
  return (
		<div className={`app ${theme}`}>
			<StorybookComponent/>
		</div>
  )
}
