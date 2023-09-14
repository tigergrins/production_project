import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProviders'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
  children: 'Text'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Text'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearLight = Template.bind({})
ClearLight.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED
}

export const ClearDark = Template.bind({})
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
	size: ButtonSize.M
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
	size: ButtonSize.L
}

export const OutlineSizeXl = Template.bind({})
OutlineSizeXl.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
	size: ButtonSize.XL
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]


export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L
}

export const SquareSizeXl = Template.bind({})
SquareSizeXl.args = {
  children: '<',
  theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL
}
