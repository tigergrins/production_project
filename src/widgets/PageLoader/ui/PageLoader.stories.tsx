import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { PageLoader } from './PageLoader'

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args}/>

export const Light = Template.bind({})
Light.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
