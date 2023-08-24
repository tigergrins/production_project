import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args}/>

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
