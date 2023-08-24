import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { LangSwitcher } from './LangSwitcher'

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args}/>

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
