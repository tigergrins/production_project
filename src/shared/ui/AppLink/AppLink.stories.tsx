import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Inverted = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED
}
