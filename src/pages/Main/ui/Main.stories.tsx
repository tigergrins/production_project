import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import Main from './Main'

export default {
  title: 'pages/Main',
  component: Main
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = () => <Main />

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
