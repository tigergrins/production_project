import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProviders'
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator'
import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const PrimaryLight = Template.bind({})
PrimaryLight.args = {
  label: 'Login',
	placeholder: 'Enter your login'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	label: 'Login',
	placeholder: 'Enter your login'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
